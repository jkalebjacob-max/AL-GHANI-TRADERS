import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "./ProductCard";

export function NewArrivals() {
  // Show a different set — products 8-15
  const arrivals = products.slice(8, 16);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
              Just added
            </p>
            <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
              New arrivals
            </h2>
          </div>
          <Link
            to="/shop"
            className="shrink-0 text-sm font-semibold text-brand transition-colors hover:text-primary"
          >
            See all →
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {arrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
