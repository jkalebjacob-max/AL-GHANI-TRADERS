import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const featured = products.slice(0, 8);

  return (
    <section id="products" className="scroll-mt-24 bg-[#fafbfa] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Compact header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400 mb-1">
              Editor's picks
            </p>
            <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
              Best sellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="shrink-0 text-sm font-semibold text-brand hover:text-primary transition-colors"
          >
            Shop all →
          </Link>
        </div>

        {/* 4-col product grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
