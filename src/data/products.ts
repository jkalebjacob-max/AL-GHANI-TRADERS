export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  material: string;
  usage: string;
  moq: string;
  status: string;
  fallbackImage: string; // High-quality Unsplash image as fallback
}

const images = import.meta.glob("../assets/products/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const getProductImage = (id: string, fallback: string): string =>
  images[`../assets/products/${id}.png`] ||
  images[`../assets/products/${id}.jpg`] ||
  images[`../assets/products/${id}.jpeg`] ||
  images[`../assets/products/${id}.webp`] ||
  fallback;

const priceMap: Record<string, number> = {
  // Kitchen
  "k-1": 24.99, "k-2": 19.99, "k-3": 14.99, "k-4": 27.99, "k-5": 29.99,
  "k-6": 24.99, "k-7": 49.99, "k-8": 29.99, "k-9": 34.99, "k-10": 9.99,
  "k-11": 12.99, "k-12": 11.99, "k-13": 39.99, "k-14": 18.99, "k-15": 16.99,
  // Home
  "h-1": 29.99, "h-2": 19.99, "h-3": 13.99, "h-4": 34.99, "h-5": 27.99,
  "h-6": 59.99, "h-7": 44.99, "h-8": 32.99, "h-9": 14.99, "h-10": 19.99,
  "h-11": 16.99, "h-12": 18.99, "h-13": 29.99, "h-14": 21.99, "h-15": 10.99,
  // Beauty / Personal Care
  "b-1": 24.99, "b-2": 14.99, "b-3": 26.99, "b-4": 10.99, "b-5": 24.99,
  "b-6": 39.99, "b-7": 29.99, "b-8": 19.99, "b-9": 9.99, "b-10": 16.99,
  "b-11": 34.99, "b-12": 29.99, "b-13": 27.99, "b-14": 8.99, "b-15": 39.99,
  // Fitness / Lifestyle
  "f-1": 19.99, "f-2": 11.99, "f-3": 24.99, "f-4": 29.99, "f-5": 19.99,
  "f-6": 17.99, "f-7": 69.99, "f-8": 19.99, "f-9": 39.99, "f-10": 34.99,
  "f-11": 79.99, "f-12": 24.99, "f-13": 14.99, "f-14": 9.99, "f-15": 8.99,
};

const getProductPrice = (id: string): number => priceMap[id] ?? 19.99;

export const categories = [
  "Kitchen",
  "Home",
  "Beauty / Personal Care",
  "Fitness / Lifestyle"
];

const baseProducts: Omit<Product, "price">[] = [
  // Kitchen
  {
    id: "k-1",
    name: "Precision Vegetable Chopper",
    category: "Kitchen",
    description: "Multi-functional vegetable chopper with stainless steel blades for precise dicing and slicing. Ergonomic design for commercial kitchen efficiency.",
    material: "304 Stainless Steel, BPA-free ABS",
    usage: "Commercial and Professional Kitchens",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1590333746438-281f69d93d2f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-2",
    name: "Silicone Cooking Utensil Set",
    category: "Kitchen",
    description: "Heat-resistant silicone utensils with natural beechwood handles. Non-scratch and durable for high-volume culinary use.",
    material: "Food-grade Silicone, Beechwood",
    usage: "Professional Cooking and Serving",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1594385208974-2e75f9d8a847?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-3",
    name: "Glass Oil Dispenser Bottle",
    category: "Kitchen",
    description: "Elegant borosilicate glass dispenser with a leak-proof stainless steel pourer. Perfect for controlled oil and vinegar distribution.",
    material: "Borosilicate Glass, Stainless Steel",
    usage: "Kitchen Organization and Table Service",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-4",
    name: "Glass Meal Prep Containers",
    category: "Kitchen",
    description: "Stackable borosilicate glass containers with BPA-free airtight lids. Oven, microwave, and dishwasher safe for professional meal prep.",
    material: "Borosilicate Glass, BPA-free Plastic",
    usage: "Food Storage and Meal Preparation",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1544333323-537f994e220b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-5",
    name: "Manual Food Processor",
    category: "Kitchen",
    description: "Hand-powered food processor for quick chopping and blending. Portable and efficient for kitchens without power access.",
    material: "Reinforced Plastic, Stainless Steel Blades",
    usage: "Quick Food Preparation",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-6",
    name: "Spice Rack Organizer",
    category: "Kitchen",
    description: "Space-saving tiered organizer for spice jars. Durable construction with a non-slip surface for pantry efficiency.",
    material: "High-impact Polystyrene",
    usage: "Pantry and Cabinet Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1590735204425-231f7a855a4a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-7",
    name: "Professional Knife Set",
    category: "Kitchen",
    description: "Precision-forged knife set with ergonomic handles. Includes chef's knife, paring knife, and utility blades for professional use.",
    material: "High-carbon Stainless Steel, Acacia Wood",
    usage: "Professional Culinary Tasks",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-8",
    name: "Bamboo Cutting Board Set",
    category: "Kitchen",
    description: "Sustainable bamboo cutting boards in multiple sizes. Features juice grooves and easy-grip handles for heavy-duty kitchen use.",
    material: "Natural Bamboo",
    usage: "Food Preparation and Serving",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-9",
    name: "Airtight Storage Containers",
    category: "Kitchen",
    description: "Clear stackable containers with easy-lock lids. Keeps dry goods fresh and organized in commercial pantries.",
    material: "BPA-free Acrylic",
    usage: "Dry Food Storage",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1590735204425-231f7a855a4a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-10",
    name: "Digital Kitchen Timer",
    category: "Kitchen",
    description: "Precision digital timer with a loud alarm and magnetic back. Essential for accurate cooking and baking times.",
    material: "ABS Plastic, Electronic Components",
    usage: "Cooking and Baking Timing",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-11",
    name: "Stainless Steel Garlic Press",
    category: "Kitchen",
    description: "Ergonomic garlic press designed for high-volume use. Easy to clean and highly durable for professional kitchens.",
    material: "304 Stainless Steel",
    usage: "Food Preparation",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1590333746438-281f69d93d2f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-12",
    name: "Measuring Cups & Spoons Set",
    category: "Kitchen",
    description: "Complete set of engraved measuring tools. Accurate measurements for consistent culinary results.",
    material: "Stainless Steel",
    usage: "Baking and Cooking Measurements",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-13",
    name: "Expandable Dish Drying Rack",
    category: "Kitchen",
    description: "Versatile drying rack that expands to fit different sink sizes. Features a drainage spout and cutlery holder.",
    material: "Stainless Steel, ABS Plastic",
    usage: "Kitchen Cleanup and Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-14",
    name: "Magnetic Knife Strip",
    category: "Kitchen",
    description: "Strong magnetic strip for safe and accessible knife storage. Saves counter space in professional kitchens.",
    material: "Stainless Steel, Neodymium Magnets",
    usage: "Kitchen Tool Storage",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "k-15",
    name: "Professional Rolling Pin",
    category: "Kitchen",
    description: "Heavy-duty rolling pin for consistent dough thickness. Non-stick surface and smooth rotation for high-volume baking.",
    material: "Stainless Steel",
    usage: "Baking and Pastry Preparation",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1590333746438-281f69d93d2f?auto=format&fit=crop&q=80&w=1200"
  },

  // Home
  {
    id: "h-1",
    name: "Modular Storage Bins",
    category: "Home",
    description: "Stackable storage bins with integrated handles. Durable and versatile for home and retail organization.",
    material: "High-density Polypropylene",
    usage: "Home and Retail Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1594404298423-55999c32ff8e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-2",
    name: "Drawer Organizer Set",
    category: "Home",
    description: "Customizable drawer dividers for office and home use. Clear design for easy visibility of stored items.",
    material: "BPA-free Acrylic",
    usage: "Drawer and Desk Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-3",
    name: "Minimalist Wall Hooks",
    category: "Home",
    description: "Sleek wall-mounted hooks for entryways and closets. Strong weight capacity with a minimalist aesthetic.",
    material: "Solid Oak Wood",
    usage: "Entryway and Closet Storage",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-4",
    name: "Portable Ultrasonic Humidifier",
    category: "Home",
    description: "Compact ultrasonic humidifier with quiet operation. USB-powered for use in offices and small living spaces.",
    material: "ABS Plastic",
    usage: "Air Quality Improvement",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1585351049065-34c97340be48?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-5",
    name: "Linen Laundry Basket",
    category: "Home",
    description: "Breathable linen laundry basket with a collapsible frame. Ideal for modern living spaces and hotel use.",
    material: "Natural Linen, Beech Wood",
    usage: "Laundry and Textile Storage",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-6",
    name: "Closet Organizer System",
    category: "Home",
    description: "Vertical hanging organizer for maximizing closet space. Reinforced shelves for heavy-duty storage.",
    material: "Non-woven Fabric, Cardboard",
    usage: "Closet and Wardrobe Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-7",
    name: "Multi-Tier Shoe Rack",
    category: "Home",
    description: "Sturdy multi-tier rack for organized shoe storage. Compact design suitable for entryways and mudrooms.",
    material: "Powder-coated Steel",
    usage: "Entryway Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1595943923128-382420fd8999?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-8",
    name: "LED Desk Lamp",
    category: "Home",
    description: "Adjustable LED lamp with multiple brightness levels and color temperatures. Energy-efficient for workspace use.",
    material: "Aluminum, ABS Plastic",
    usage: "Office and Study Lighting",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-9",
    name: "Cleaning Brush Set",
    category: "Home",
    description: "Comprehensive set of ergonomic cleaning brushes. Natural bristles for effective and eco-friendly cleaning.",
    material: "Bamboo, Natural Bristles",
    usage: "Household Cleaning",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-10",
    name: "Velvet Hanger Set",
    category: "Home",
    description: "Non-slip velvet hangers with a slim profile. Maximizes closet space while protecting delicate garments.",
    material: "ABS Plastic, Velvet Flocking",
    usage: "Closet Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-11",
    name: "Scented Soy Candles",
    category: "Home",
    description: "Hand-poured soy wax candles with natural essential oils. Long-burning and eco-friendly for home ambiance.",
    material: "Soy Wax, Essential Oils, Glass",
    usage: "Home Fragrance and Decor",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-12",
    name: "Linen Throw Pillow Covers",
    category: "Home",
    description: "Soft and durable linen pillow covers with hidden zippers. Neutral tones for versatile home styling.",
    material: "Natural Linen",
    usage: "Living Room and Bedroom Decor",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-13",
    name: "Woven Storage Basket",
    category: "Home",
    description: "Hand-woven seagrass basket for natural storage. Durable handles for easy transport of household items.",
    material: "Natural Seagrass",
    usage: "Home Storage and Decor",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-14",
    name: "Acrylic Desk Organizer",
    category: "Home",
    description: "Sleek acrylic organizer for office supplies. Transparent design for a clean and modern workspace.",
    material: "Premium Acrylic",
    usage: "Office and Study Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1594488651129-753240755ffd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "h-15",
    name: "Modern Door Stopper",
    category: "Home",
    description: "Heavy-duty stainless steel door stopper with a rubber bumper. Protects walls and doors with a modern look.",
    material: "Stainless Steel, Rubber",
    usage: "Home and Office Safety",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200"
  },

  // Beauty / Personal Care
  {
    id: "b-1",
    name: "Sonic Facial Cleansing Brush",
    category: "Beauty / Personal Care",
    description: "Advanced sonic technology for deep pore cleansing. Waterproof and rechargeable for professional skincare routines.",
    material: "Medical-grade Silicone",
    usage: "Professional and Home Skincare",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-2",
    name: "Rose Quartz Jade Roller",
    category: "Beauty / Personal Care",
    description: "Natural rose quartz roller for lymphatic drainage and skin rejuvenation. Hand-crafted for premium spa quality.",
    material: "Natural Rose Quartz, Zinc Alloy",
    usage: "Facial Massage and Skincare",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-3",
    name: "Acrylic Makeup Organizer",
    category: "Beauty / Personal Care",
    description: "Multi-compartment organizer for cosmetics and jewelry. Clear design for easy access to beauty essentials.",
    material: "High-grade Acrylic",
    usage: "Cosmetic Organization",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-4",
    name: "Eyelash Curler Kit",
    category: "Beauty / Personal Care",
    description: "Ergonomic eyelash curler with replacement pads. Designed for a long-lasting curl without pinching.",
    material: "Stainless Steel, Silicone",
    usage: "Eye Makeup Application",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-5",
    name: "Skincare Storage Box",
    category: "Beauty / Personal Care",
    description: "Dust-proof storage box for skincare products. Features a built-in mirror and LED lighting for beauty routines.",
    material: "ABS Plastic, Glass",
    usage: "Skincare and Beauty Storage",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-6",
    name: "Hair Styling Tool Set",
    category: "Beauty / Personal Care",
    description: "Set of professional-grade hair styling tools including brushes and combs. Heat-resistant and anti-static.",
    material: "Carbon Fiber, Nylon",
    usage: "Professional Hair Styling",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-7",
    name: "Professional Nail Care Kit",
    category: "Beauty / Personal Care",
    description: "Comprehensive manicure and pedicure set. High-quality stainless steel tools for professional nail care.",
    material: "Stainless Steel, PU Leather",
    usage: "Manicure and Pedicure",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1519415510236-8559b1985602?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-8",
    name: "Makeup Brush Set",
    category: "Beauty / Personal Care",
    description: "12-piece synthetic makeup brush set with soft bristles. Includes brushes for face, eyes, and lips.",
    material: "Synthetic Fibers, Aluminum, Wood",
    usage: "Makeup Application",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-9",
    name: "Microfiber Hair Towel",
    category: "Beauty / Personal Care",
    description: "Ultra-absorbent microfiber towel for quick hair drying. Reduces frizz and hair damage compared to standard towels.",
    material: "Microfiber",
    usage: "Hair Drying and Care",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-10",
    name: "Organic Bath Bomb Set",
    category: "Beauty / Personal Care",
    description: "Handmade bath bombs with natural essential oils and dried flowers. Moisturizing and relaxing for spa treatments.",
    material: "Sodium Bicarbonate, Essential Oils",
    usage: "Bath and Body Care",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-11",
    name: "Essential Oil Diffuser",
    category: "Beauty / Personal Care",
    description: "Ultrasonic diffuser with adjustable mist settings and LED light. Enhances ambiance and air quality with essential oils.",
    material: "PP Plastic, Electronic Components",
    usage: "Aromatherapy and Home Fragrance",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1585351049065-34c97340be48?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-12",
    name: "Pure Silk Pillowcase",
    category: "Beauty / Personal Care",
    description: "100% Mulberry silk pillowcase for hair and skin protection. Hypoallergenic and temperature-regulating.",
    material: "100% Mulberry Silk",
    usage: "Sleep and Skincare",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-13",
    name: "Collapsible Foot Spa Basin",
    category: "Beauty / Personal Care",
    description: "Space-saving foot spa basin with massage rollers. Ideal for professional pedicures and home relaxation.",
    material: "TPE, PP Plastic",
    usage: "Foot Care and Relaxation",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1519415510236-8559b1985602?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-14",
    name: "Silicone Scalp Massager",
    category: "Beauty / Personal Care",
    description: "Soft silicone brush for scalp massage and deep cleaning. Promotes circulation and hair health.",
    material: "Food-grade Silicone",
    usage: "Hair Care and Scalp Treatment",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "b-15",
    name: "LED Cosmetic Mirror",
    category: "Beauty / Personal Care",
    description: "Tabletop mirror with adjustable LED lighting and magnification. Touch control for professional makeup application.",
    material: "ABS Plastic, Glass",
    usage: "Makeup and Skincare Application",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=1200"
  },

  // Fitness / Lifestyle
  {
    id: "f-1",
    name: "Resistance Bands Set",
    category: "Fitness / Lifestyle",
    description: "Heavy-duty latex resistance bands for strength training. Includes five resistance levels and a carrying case.",
    material: "Natural Latex",
    usage: "Strength Training and Physical Therapy",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1598289431512-b97b0917a63e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-2",
    name: "Speed Jump Rope",
    category: "Fitness / Lifestyle",
    description: "High-speed jump rope with ball bearing handles. Adjustable cable for professional cardio workouts.",
    material: "Steel Cable, Aluminum Handles",
    usage: "Cardio and Speed Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1590333746438-281f69d93d2f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-3",
    name: "High-Density Foam Roller",
    category: "Fitness / Lifestyle",
    description: "Durable foam roller for muscle recovery and myofascial release. Lightweight and portable for gym use.",
    material: "EVA Foam",
    usage: "Muscle Recovery and Yoga",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-4",
    name: "Premium Yoga Mat",
    category: "Fitness / Lifestyle",
    description: "Non-slip yoga mat with high-density cushioning. Eco-friendly and durable for professional studio use.",
    material: "Natural Rubber, TPE",
    usage: "Yoga, Pilates, and Stretching",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1592432676556-28403596e6f1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-5",
    name: "Insulated Water Bottle",
    category: "Fitness / Lifestyle",
    description: "Double-walled vacuum insulated bottle. Keeps drinks cold for 24 hours or hot for 12 hours.",
    material: "304 Stainless Steel",
    usage: "Hydration and Lifestyle",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1602143399827-bd959683a345?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-6",
    name: "Padded Gym Gloves",
    category: "Fitness / Lifestyle",
    description: "Breathable gym gloves with palm padding and wrist support. Enhanced grip for heavy weightlifting.",
    material: "Neoprene, Silicone",
    usage: "Weightlifting and Strength Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-7",
    name: "Deep Tissue Massage Gun",
    category: "Fitness / Lifestyle",
    description: "Powerful percussion massage gun for muscle recovery. Multiple speed settings and interchangeable heads.",
    material: "ABS Plastic, Electronic Components",
    usage: "Muscle Recovery and Therapy",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-8",
    name: "Cork Yoga Blocks",
    category: "Fitness / Lifestyle",
    description: "Sustainable cork blocks for yoga support and alignment. High-density and non-slip for stability.",
    material: "Natural Cork",
    usage: "Yoga and Flexibility Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-9",
    name: "Doorway Pull-Up Bar",
    category: "Fitness / Lifestyle",
    description: "Adjustable pull-up bar for home gyms. Strong steel construction with comfortable foam grips.",
    material: "Steel, EVA Foam",
    usage: "Upper Body Strength Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-10",
    name: "Cast Iron Kettlebell",
    category: "Fitness / Lifestyle",
    description: "Solid cast iron kettlebell for full-body workouts. Wide handle for comfortable grip and stability.",
    material: "Cast Iron",
    usage: "Strength and Conditioning",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-11",
    name: "Adjustable Dumbbell Set",
    category: "Fitness / Lifestyle",
    description: "Space-saving adjustable dumbbells for home gyms. Quick-change weight system for versatile training.",
    material: "Steel, High-density Plastic",
    usage: "Strength Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-12",
    name: "Anti-Burst Exercise Ball",
    category: "Fitness / Lifestyle",
    description: "Heavy-duty exercise ball for core training and balance. Anti-burst design with a non-slip surface.",
    material: "PVC",
    usage: "Core Training and Stability",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-13",
    name: "Dual-Wheel Ab Roller",
    category: "Fitness / Lifestyle",
    description: "Stable dual-wheel ab roller for core strengthening. Includes a high-density foam knee pad.",
    material: "Stainless Steel, Rubber, Plastic",
    usage: "Core Strength Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-14",
    name: "Adjustable Hand Gripper",
    category: "Fitness / Lifestyle",
    description: "Adjustable resistance hand gripper for forearm and grip strength. Durable spring and comfortable handles.",
    material: "Stainless Steel, ABS Plastic",
    usage: "Grip Strength Training",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1591190282059-00399659097e?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "f-15",
    name: "Cotton Sweatband Set",
    category: "Fitness / Lifestyle",
    description: "Breathable and absorbent cotton sweatbands for head and wrists. Ideal for high-intensity workouts.",
    material: "Organic Cotton, Spandex",
    usage: "Fitness and Sports",
    moq: "Available upon request",
    status: "Available for Order",
    fallbackImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
  },
];

export const products: Product[] = baseProducts.map((product) => ({
  ...product,
  price: getProductPrice(product.id),
  fallbackImage: getProductImage(product.id, product.fallbackImage),
}));
