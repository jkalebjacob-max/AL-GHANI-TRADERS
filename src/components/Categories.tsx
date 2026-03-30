import { motion } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Kitchen",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200",
    href: "/category/kitchen",
  },
  {
    title: "Home",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
    href: "/category/home",
  },
  {
    title: "Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200",
    href: "/category/beauty-personal-care",
  },
  {
    title: "Fitness",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    href: "/category/fitness-lifestyle",
  },
];

export function Categories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-gray-400">
              Browse
            </p>
            <h2 className="font-serif text-2xl font-semibold text-primary sm:text-3xl">
              Shop by category
            </h2>
          </div>
          <Link
            to="/shop"
            className="shrink-0 text-sm font-semibold text-brand transition-colors hover:text-primary"
          >
            View all →
          </Link>
        </div>

        {/* 4-equal-column grid — sm:grid-cols-4 so 4 cols appear at tablet, not just desktop */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
            >
              <Link
                to={cat.href}
                className="group relative block overflow-hidden rounded-2xl bg-gray-100"
              >
                {/* Same aspect ratio for every card */}
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.title} products`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Same gradient strength for every card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="font-serif text-lg font-semibold text-white sm:text-xl">
                    {cat.title}
                  </h3>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 transition-colors group-hover:text-white/95">
                    Shop now →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
