import type { Key } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { ProductImage } from "./ProductImage";
import { useInquiry } from "../context/InquiryContext";

interface ProductCardProps {
  product: Product;
  index: number;
  /** Declared for compatibility with React/TS JSX `key` checking on this component. */
  key?: Key;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToInquiry, isInInquiry } = useInquiry();
  const alreadyInInquiry = isInInquiry(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ delay: index * 0.09, duration: 0.55 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block cursor-pointer">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] border border-gray-200/75 bg-[#f4f6f5] shadow-sm transition-[border-color,box-shadow,transform] duration-500 ease-out group-hover:-translate-y-0.5 group-hover:border-brand/20 group-hover:shadow-premium">
          <ProductImage
            fallback={product.fallbackImage}
            alt={product.name}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-4 top-4 max-w-[calc(100%-2rem)]">
            <p className="inline-block truncate rounded-full bg-white/92 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-primary/90 shadow-sm backdrop-blur-sm">
              {product.category}
            </p>
          </div>

          <div className="absolute right-4 top-4">
            <div className="rounded-full border border-white/60 bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-700 shadow-sm backdrop-blur-md">
              {product.status}
            </div>
          </div>
        </div>
      </Link>

      <div className="mt-7 space-y-3">
        <Link to={`/product/${product.id}`} className="block cursor-pointer">
          <h3 className="text-lg font-semibold leading-snug text-primary transition-colors duration-300 group-hover:text-brand sm:text-xl">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-500">{product.description}</p>
        <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-400">MOQ</span>
            <p className="mt-1 text-sm font-semibold text-primary">{product.moq}</p>
          </div>
          <motion.button
            type="button"
            whileHover={
              alreadyInInquiry ? undefined : { scale: 1.02 }
            }
            whileTap={alreadyInInquiry ? undefined : { scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault();
              addToInquiry(product);
            }}
            disabled={alreadyInInquiry}
            className={`w-full rounded-xl border px-5 py-2.5 text-center text-xs font-bold uppercase tracking-[0.14em] transition-all sm:w-auto ${
              alreadyInInquiry
                ? "cursor-not-allowed border-brand/20 bg-brand/10 text-brand"
                : "border-primary/15 bg-primary text-white shadow-sm hover:border-brand hover:bg-brand"
            }`}
          >
            {alreadyInInquiry ? "In inquiry list" : "Add to inquiry"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
