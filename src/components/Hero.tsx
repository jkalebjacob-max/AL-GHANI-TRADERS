import { motion } from "motion/react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

const floating = {
  animate: {
    y: [0, -12, 0],
    x: [0, 8, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f9fafb] to-[#eef6f2]" />

      <motion.div
        variants={floating}
        animate="animate"
        className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand/8 blur-3xl"
      />
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute top-24 right-0 h-80 w-80 rounded-full bg-accent/8 blur-3xl"
        style={{ animationDelay: "1.2s" }}
      />
      <motion.div
        variants={floating}
        animate="animate"
        className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand/6 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto grid min-h-[min(92vh,880px)] max-w-7xl items-center gap-12 px-6 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[88vh] lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-36">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand shadow-sm backdrop-blur-md sm:text-[13px] sm:normal-case sm:tracking-normal sm:text-gray-700"
          >
            <span className="hidden sm:inline">
              Al-Ghani Traders · Wholesale sourcing & export programs
            </span>
            <span className="sm:hidden">Wholesale sourcing & export</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl sm:leading-[1.06] lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            Wholesale supply,
            <span className="block text-brand">structured for serious buyers.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8"
          >
            From kitchen and home essentials to beauty and active categories, Al-Ghani Traders
            pairs you with vetted manufacturing capacity, clear MOQs, and documentation-ready
            shipments—so your next program launches on time, at scale.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/shop"
                className="flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-brand px-8 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(15,61,46,0.45)] transition-colors hover:bg-[#0d3428] sm:min-h-0 sm:w-auto sm:px-9 sm:py-4"
              >
                Browse wholesale catalog
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/inquiry"
                className="flex min-h-[48px] w-full items-center justify-center rounded-2xl border border-gray-200/90 bg-white/90 px-8 py-3.5 text-center text-sm font-semibold text-primary shadow-sm backdrop-blur-sm transition hover:border-gray-300 hover:bg-white sm:min-h-0 sm:w-auto sm:px-9 sm:py-4"
              >
                Request a sourcing proposal
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xs leading-relaxed text-gray-500 sm:text-sm"
          >
            <span className="font-medium text-gray-600">Fast quote turnaround.</span>{" "}
            Share SKU targets and volume—our team responds with pricing direction and next steps, typically within one to two business days.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gray-200/80"
          >
            <div className="rounded-2xl border border-gray-100/80 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:py-0 sm:shadow-none sm:first:pl-0">
              <p className="font-serif text-2xl font-semibold text-primary sm:text-3xl">500+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm sm:normal-case sm:tracking-normal sm:text-gray-600">
                SKU-ready catalog lines
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100/80 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:py-0 sm:shadow-none">
              <p className="font-serif text-2xl font-semibold text-primary sm:text-3xl">Global</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm sm:normal-case sm:tracking-normal sm:text-gray-600">
                Consolidated sourcing & QC
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100/80 bg-white/60 px-5 py-4 shadow-sm backdrop-blur-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:py-0 sm:shadow-none">
              <p className="font-serif text-2xl font-semibold text-primary sm:text-3xl">B2B</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm sm:normal-case sm:tracking-normal sm:text-gray-600">
                Built for distributors & brands
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:block"
        >
          <div className="mx-auto max-w-lg lg:max-w-none">
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-brand/6 to-accent/6 blur-2xl lg:block" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[28px] border border-white/70 bg-white/45 p-2.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:rounded-[32px] sm:p-3"
            >
              <div className="overflow-hidden rounded-[22px] bg-white p-1.5 shadow-inner sm:rounded-[24px] sm:p-2">
                <img
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200"
                  alt="Global wholesale logistics and consolidated shipments"
                  className="aspect-[4/3] h-auto w-full rounded-[16px] object-cover sm:aspect-auto sm:h-[min(58vh,520px)] sm:rounded-[20px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -left-2 top-4 max-w-[220px] rounded-2xl border border-white/90 bg-white/95 px-4 py-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md sm:-left-8 sm:top-16 sm:max-w-none sm:px-6 sm:py-4 lg:-left-12"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 sm:text-[10px]">
                    Program status
                  </p>
                  <p className="truncate text-xs font-bold text-primary sm:text-sm">
                    Active lanes · consolidation ready
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="absolute -right-1 bottom-8 max-w-[200px] rounded-2xl border border-white/90 bg-white/95 px-4 py-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] backdrop-blur-md sm:-right-4 sm:bottom-20 sm:max-w-none sm:px-6 sm:py-4 lg:-right-8"
            >
              <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 sm:text-[10px]">
                Factory alignment
              </p>
              <p className="text-xs font-bold text-primary sm:text-sm">Spec & QC tracked</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
