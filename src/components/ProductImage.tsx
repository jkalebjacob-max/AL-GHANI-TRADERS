import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ProductImageProps {
  fallback: string;
  alt: string;
  className?: string;
}

export function ProductImage({ fallback, alt, className }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
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
        className="h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
