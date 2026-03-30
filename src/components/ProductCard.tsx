import type { Key } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Product } from "../data/products";
import { ProductImage } from "./ProductImage";
import { useCart } from "../context/InquiryContext";

interface ProductCardProps {
  product: Product;
  index: number;
  /** Declared for compatibility with React/TS JSX `key` checking on this component. */
  key?: Key;
}

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, getQuantity, openCart } = useCart();
  const quantity = getQuantity(product.id);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    openCart();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-24px" }}
      transition={{ delay: Math.min(index * 0.06, 0.4), duration: 0.45 }}
      className="group flex flex-col"
    >
      {/* ── Image ── */}
      <Link to={`/product/${product.id}`} className="block">
        <div className={`relative overflow-hidden rounded-2xl bg-[#f2f4f3] ${product.id.startsWith("f-") ? "aspect-square" : "aspect-[3/4]"}`}>
          <ProductImage
            fallback={product.fallbackImage}
            alt={product.name}
            objectFit={product.id.startsWith("f-") ? "contain" : "cover"}
          />

          {/* Dark gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* In-cart badge (always visible if qty > 0) */}
          {quantity > 0 && (
            <div className="absolute right-3 top-3">
              <span className="flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold text-white shadow">
                {quantity} in cart
              </span>
            </div>
          )}

          {/* Quick-add slides up on hover */}
          <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={handleAdd}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-primary shadow-lg transition hover:bg-gray-50 active:scale-[0.98]"
            >
              <ShoppingBag className="h-3.5 w-3.5" strokeWidth={2} />
              {quantity > 0 ? "Add again" : "Add to cart"}
            </button>
          </div>
        </div>
      </Link>

      {/* ── Info ── */}
      <div className="mt-3.5 flex flex-col gap-1.5 px-0.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-primary transition-colors hover:text-brand sm:text-[0.9375rem]">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <span className="text-base font-bold text-primary">
            {currency.format(product.price)}
          </span>

          <button
            type="button"
            onClick={handleAdd}
            className={`shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-semibold transition-all ${
              quantity > 0
                ? "bg-brand/10 text-brand hover:bg-brand/15"
                : "border border-gray-200 bg-white text-gray-600 hover:border-primary/20 hover:text-primary"
            }`}
          >
            {quantity > 0 ? `+ Add (${quantity})` : "Add"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
