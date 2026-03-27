import { GoogleGenAI } from "@google/genai";
import localforage from "localforage";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Configure localforage for persistent storage
localforage.config({
  name: "al-ghani-traders",
  storeName: "product-images",
  description: "Cache for AI-generated product images"
});

const imageCache: Record<string, string> = {};

// Queue management to prevent hitting rate limits
class TaskQueue {
  private queue: (() => Promise<any>)[] = [];
  private processing = 0;
  private maxConcurrent = 2; // Limit concurrent requests

  async add<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.process();
    });
  }

  private async process() {
    if (this.processing >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }

    this.processing++;
    const task = this.queue.shift();
    if (task) {
      try {
        await task();
      } finally {
        this.processing--;
        // Add a small delay between tasks to further respect rate limits
        setTimeout(() => this.process(), 500);
      }
    }
  }
}

const queue = new TaskQueue();

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function generateProductImage(prompt: string, retries = 3): Promise<string> {
  // 1. Check in-memory cache first (fastest)
  if (imageCache[prompt]) {
    return imageCache[prompt];
  }

  // 2. Check persistent storage (IndexedDB)
  try {
    const cachedImage = await localforage.getItem<string>(prompt);
    if (cachedImage) {
      imageCache[prompt] = cachedImage; // Sync back to memory
      return cachedImage;
    }
  } catch (err) {
    console.warn("Persistent cache read error:", err);
  }

  // 3. If not cached, generate using API
  return queue.add(async () => {
    let lastError: any;
    
    for (let i = 0; i < retries; i++) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              {
                text: prompt,
              },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
              imageSize: "1K"
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            const base64EncodeString: string = part.inlineData.data;
            const imageUrl = `data:image/png;base64,${base64EncodeString}`;
            
            // Save to both caches
            imageCache[prompt] = imageUrl;
            try {
              await localforage.setItem(prompt, imageUrl);
            } catch (err) {
              console.warn("Persistent cache write error:", err);
            }
            
            return imageUrl;
          }
        }
        
        throw new Error("No image data found in response");
      } catch (error: any) {
        lastError = error;
        
        // If it's a rate limit error (429), wait and retry with exponential backoff
        if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("429") || error?.message?.includes("quota")) {
          const waitTime = Math.pow(2, i) * 2000 + Math.random() * 1000;
          console.warn(`Rate limit hit for prompt: "${prompt.substring(0, 30)}...". Retrying in ${Math.round(waitTime/1000)}s (Attempt ${i + 1}/${retries})`);
          await sleep(waitTime);
          continue;
        }
        
        // For other errors, don't retry immediately or at all depending on the error
        throw error;
      }
    }
    
    throw lastError;
  });
}
