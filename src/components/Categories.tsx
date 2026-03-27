import { motion } from "motion/react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Kitchen",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200",
    href: "/category/kitchen",
    description:
      "Prep, storage, and small equipment lanes for distributors, HORECA, and retail kitchen programs.",
    programTag: "Foodservice & retail",
  },
  {
    title: "Home",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=1200",
    href: "/category/home",
    description:
      "Organization, décor, and household lines sized for seasonal resets, private label, and volume POs.",
    programTag: "Distributors & brands",
  },
  {
    title: "Beauty / Personal Care",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=1200",
    href: "/category/beauty-personal-care",
    description:
      "Skincare, tools, and accessories structured for salons, pharmacies, and omnichannel wellness assortments.",
    programTag: "Compliance-ready specs",
  },
  {
    title: "Fitness / Lifestyle",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
    href: "/category/fitness-lifestyle",
    description:
      "Training, recovery, and active categories with MOQs and assortments built for sports retail and B2B bundles.",
    programTag: "Performance retail",
  },
];

export function Categories() {
  return (
    <section
      id="categories"
      className="relative scroll-mt-28 bg-gradient-to-b from-[#fafbfa] to-white pt-20 pb-24 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gray-200/90 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl md:mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand/80"
          >
            Category programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
          >
            Lanes your buyers can plan around—not aisle fillers.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Each vertical is set up for wholesale workflows: reproducible specs, MOQ conversations, and shipment timing
            that protects your sell-in dates. Drill into a lane to see Al-Ghani Traders SKUs curated for that category.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-9 lg:grid-cols-4 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
            >
              <Link
                to={category.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[26px] border border-gray-200/80 bg-gray-100/50 shadow-sm outline-none ring-brand/0 transition duration-500 ease-out hover:-translate-y-1 hover:border-brand/20 hover:shadow-premium focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#fafbfa] sm:rounded-[28px]"
              >
                <img
                  src={category.image}
                  alt={`${category.title} wholesale program — browse SKUs`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/35 to-primary/5 transition-opacity duration-500 group-hover:via-primary/40" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7 lg:p-8">
                  <p className="mb-2 inline-flex max-w-full items-center rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/95 backdrop-blur-md ring-1 ring-white/20">
                    {category.programTag}
                  </p>
                  <h3 className="font-serif text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-200/95 sm:line-clamp-none sm:text-[0.9375rem]">
                    {category.description}
                  </p>
                  <div className="mt-5 flex items-center text-xs font-bold uppercase tracking-[0.14em] text-accent sm:text-sm">
                    <span className="underline decoration-accent/40 underline-offset-4 transition group-hover:decoration-accent">
                      View SKUs &amp; programs
                    </span>
                    <svg
                      className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
