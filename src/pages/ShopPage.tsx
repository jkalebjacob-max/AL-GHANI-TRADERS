import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { products, categories } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-serif"
          >
            Wholesale Catalog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            Browse our complete selection of high-quality products. Each item is verified for quality and reliability, ready for your business needs.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
              activeCategory === "All"
                ? "bg-brand text-white shadow-lg shadow-brand/20"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
                activeCategory === category
                  ? "bg-brand text-white shadow-lg shadow-brand/20"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">No products found in this category.</p>
          </div>
        )}

        {/* Custom Sourcing Section */}
        <div className="mt-32 rounded-[40px] bg-primary p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white sm:text-4xl font-serif mb-6">Can't find what you're looking for?</h2>
            <p className="text-lg text-gray-300 mb-10">
              Our global sourcing network can find almost any product at competitive wholesale prices. Submit a custom sourcing request and our team will get back to you within 24 hours.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-block rounded-2xl bg-brand px-10 py-5 text-sm font-bold uppercase tracking-widest text-white shadow-xl shadow-brand/20 transition hover:bg-brand/90"
            >
              Custom Sourcing Request
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}
