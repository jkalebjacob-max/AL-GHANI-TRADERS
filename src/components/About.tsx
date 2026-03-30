import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const highlights = [
  { value: "500+", label: "Products available" },
  { value: "4.8★", label: "Customer rating" },
  { value: "4", label: "Categories" },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#fafbfa] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-last lg:order-first"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200"
                alt="Quality kitchen and home products"
                className="aspect-[4/3] h-auto w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Stat cards */}
            <div className="absolute -bottom-6 left-4 right-4 grid grid-cols-3 gap-3 sm:left-8 sm:right-8">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-gray-100 bg-white px-3 py-3 text-center shadow-[0_12px_32px_-8px_rgba(0,0,0,0.1)] sm:px-4"
                >
                  <p className="font-serif text-xl font-bold text-primary sm:text-2xl">{h.value}</p>
                  <p className="mt-0.5 text-[10px] font-medium text-gray-400 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pt-10 lg:pt-0"
          >
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-brand/70">
              Our story
            </p>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl">
              Products people love,<br />at prices that make sense.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              Al-Ghani Traders was built around one simple idea: make quality everyday products
              easy to find and easy to buy. No complicated ordering, no bulk minimums — just
              great products delivered to your door.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              From kitchen tools to home essentials to beauty and fitness, every product in our
              catalog is selected for quality, usability, and everyday value.
            </p>

            {/* Star row */}
            <div className="mt-7 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">4.8</span>
              <span className="text-sm text-gray-400">— loved by our customers</span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand"
              >
                Shop our collection
              </Link>
              <a
                href="#contact"
                className="text-sm font-semibold text-gray-500 transition hover:text-primary"
              >
                Contact us →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
