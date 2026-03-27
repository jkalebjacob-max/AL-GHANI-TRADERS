import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section
      id="products"
      className="relative scroll-mt-28 bg-white pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gray-200/90 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col justify-between gap-10 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand/80"
            >
              Featured wholesale lines
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
            >
              High-rotation SKUs buyers reorder with confidence.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              A preview of the catalog behind Al-Ghani Traders—structured for distributors, retailers, and brands that need
              volume, consistency, and specifications that survive a customs clearance check.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="shrink-0 md:text-right"
          >
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-200/90 bg-[#fafbfa] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-primary transition hover:border-brand/20 hover:bg-white hover:text-brand"
            >
              Full catalog
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="mt-3 hidden text-xs text-gray-500 md:block">Kitchen, home, beauty, and lifestyle categories.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-10">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
