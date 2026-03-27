import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative isolate overflow-hidden rounded-[40px] bg-brand px-6 py-20 text-center shadow-[0_40px_80px_-24px_rgba(15,61,46,0.38)] sm:rounded-[52px] sm:px-14 sm:py-24 lg:px-20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand via-[#0c3428] to-[#081f18]" />
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/[0.07] blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">
              Wholesale desk · Al-Ghani Traders
            </p>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-[1.15] lg:text-[2.65rem]">
              Ready when your brief is.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-gray-300 sm:text-lg">
              Send categories, target landed cost, and volumes. We translate your brief into SKUs, timelines, and a quote
              structure your finance team can model—without the usual back-and-forth noise.
            </p>
          </div>

          <div className="relative z-10 mt-11 flex flex-col items-stretch justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5">
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/inquiry"
                className="flex min-h-[48px] w-full min-w-[200px] items-center justify-center rounded-2xl bg-white px-9 py-3.5 text-sm font-semibold text-brand shadow-lg shadow-black/10 transition-colors hover:bg-gray-50 sm:min-h-0 sm:w-auto"
              >
                Start your inquiry
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/shop"
                className="flex min-h-[48px] w-full min-w-[200px] items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-9 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 sm:min-h-0 sm:w-auto"
              >
                Browse the catalog
              </Link>
            </motion.div>
          </div>

          <p className="relative z-10 mx-auto mt-8 max-w-md text-xs leading-relaxed text-gray-400 sm:text-sm">
            No catalog noise, no obligations.{" "}
            <span className="text-gray-300">We typically reply within one to two business days</span> with next steps and
            MOQ-aware pricing direction.
          </p>

          <svg
            viewBox="0 0 1024 1024"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[48rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 opacity-40 [mask-image:radial-gradient(closest-side,white,transparent)] sm:h-[56rem] sm:w-[56rem]"
            aria-hidden
          >
            <circle cx={512} cy={512} r={512} fill="url(#cta-gradient)" fillOpacity="0.12" />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#ffffff" />
                <stop offset={1} stopColor="#C9A14A" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
