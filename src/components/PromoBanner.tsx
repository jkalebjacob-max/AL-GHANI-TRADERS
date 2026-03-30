import { motion } from "motion/react";
import { Link } from "react-router-dom";
import kitchenBanner from "../assets/products/Kitchenbanner.png";

export function PromoBanner() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="group relative overflow-hidden rounded-3xl"
        >
          {/* Full-width landscape banner — 21:9 on desktop, 16:9 on mobile */}
          <div className="aspect-[16/9] sm:aspect-[21/9]">
            <img
              src={kitchenBanner}
              alt="Curated everyday essentials"
              className="h-full w-full object-cover object-[50%_30%] sm:object-[50%_24%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>

          {/* Bottom gradient strip — covers 30% height only */}
          <div
            className="absolute bottom-0 left-0 right-0"
            style={{
              height: "25%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.22) 60%, transparent 100%)",
            }}
          />

          {/* Text overlay — bottom-left */}
          <div className="absolute bottom-0 left-0 p-8 sm:p-12 lg:p-16">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white/60">
              New arrivals
            </p>
            <h3 className="max-w-sm font-serif text-2xl font-semibold text-white drop-shadow-sm sm:text-3xl lg:text-4xl">
              Fresh picks for every room in your home
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center rounded-xl bg-white px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-primary transition hover:bg-gray-100"
              >
                Shop now
              </Link>
              <Link
                to="/category/kitchen"
                className="inline-flex items-center rounded-xl border border-white/40 bg-white/10 px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Kitchen →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
