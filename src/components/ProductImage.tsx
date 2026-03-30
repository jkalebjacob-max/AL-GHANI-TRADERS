import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProductImageProps {
  fallback: string;
  alt: string;
  objectFit?: "cover" | "contain";
}

export function ProductImage({
  fallback,
  alt,
  objectFit = "cover",
}: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  const isContain = objectFit === "contain";

  return (
    <div
      className={`relative h-full w-full overflow-hidden${isContain ? " p-2" : ""}`}
    >
      <AnimatePresence mode="wait">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-brand border-t-transparent" />
          </div>
        )}
      </AnimatePresence>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        src={fallback}
        alt={alt}
        onLoad={() => setLoading(false)}
        className={`h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isContain ? "group-hover:scale-[1.05]" : "group-hover:scale-[1.08]"
        }`}
        style={{ objectFit, objectPosition: "center" }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
