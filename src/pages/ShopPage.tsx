import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white pt-32 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400"
          >
            All products
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-serif text-3xl font-semibold text-primary sm:text-5xl"
          >
            Shop our collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base text-gray-500 leading-relaxed"
          >
            Curated essentials for kitchen, home, beauty, and fitness — all in one place.
          </motion.p>
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-[12px] font-semibold tracking-wide transition-all ${
                  active
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:text-primary"
                }`}
              >
                {cat === "All" ? "All products" : cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-gray-400">No products in this category.</p>
          </div>
        )}

        {/* Bottom banner */}
        <div className="relative mt-28 overflow-hidden rounded-3xl bg-primary px-10 py-16 text-center lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-transparent to-transparent" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
              Need help?
            </p>
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Not sure what to get?
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Our team is happy to help you find the right products. Reach out anytime.
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-8 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
