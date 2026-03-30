import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import modernPicture from "../assets/products/modernpicture.png";

const categoryLinks = [
  { label: "Kitchen", href: "/category/kitchen" },
  { label: "Home", href: "/category/home" },
  { label: "Beauty", href: "/category/beauty-personal-care" },
  { label: "Fitness", href: "/category/fitness-lifestyle" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f9fafb]">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f4f1] via-[#f9fafb] to-white" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-28 sm:pb-16 sm:pt-32 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:pb-20 lg:pt-36">
        {/* Left: copy */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand/70"
          >
            Al-Ghani Traders
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]"
          >
            Quality products
            <span className="block text-brand">for everyday living.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-gray-500 sm:text-lg"
          >
            Shop kitchen, home, beauty, and fitness essentials — all in one place,
            with transparent pricing and fast checkout.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-7 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-brand"
            >
              Shop now
            </Link>
            <Link
              to="/shop"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-7 text-sm font-semibold text-primary transition hover:border-gray-300 hover:bg-gray-50"
            >
              Browse categories
            </Link>
          </motion.div>

          {/* Category quick-links */}
          <motion.div variants={fadeUp} className="mt-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
              Shop by department
            </p>
            <div className="flex flex-wrap gap-2">
              {categoryLinks.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="group inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-600 transition hover:border-brand/30 hover:bg-brand/5 hover:text-brand"
                >
                  {cat.label}
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.15)]">
            <img
              src={modernPicture}
              alt="Curated everyday essentials"
              className="aspect-[4/3] h-auto w-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Floating badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/95 px-5 py-3.5 shadow-lg backdrop-blur-sm">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">New arrivals</p>
                <p className="text-sm font-semibold text-primary">Fresh products added weekly</p>
              </div>
              <Link
                to="/shop"
                className="ml-4 shrink-0 rounded-lg bg-primary px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-white transition hover:bg-brand"
              >
                Shop all
              </Link>
            </div>
          </div>

          {/* Small floating stat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -right-3 top-6 rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.12)] sm:-right-6"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">In stock</p>
            <p className="text-sm font-bold text-primary">Ready to ship</p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-gray-500">Available now</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
