import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-brand uppercase tracking-widest">About Al-Ghani Traders</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl font-serif">
              Your Trusted Global Sourcing Partner
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Al-Ghani Traders is a dedicated wholesale supplier committed to helping businesses scale with reliable products, strong sourcing partnerships, and efficient global distribution.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We bridge the gap between high-quality manufacturers and growing enterprises, providing a curated selection of goods that meet the highest standards of quality and value.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand transition-colors"
              >
                Learn More
              </motion.button>
              <a href="#contact" className="text-sm font-semibold leading-6 text-primary">
                Contact our team <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-brand/10 to-accent/10 blur-3xl" />
            
            <div className="relative aspect-[5/4] overflow-hidden rounded-[40px] bg-gray-100 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200"
                alt="Global Sourcing Operations"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -left-10 rounded-3xl bg-white p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-gray-100 hidden md:block"
            >
              <div className="flex flex-col gap-1">
                <span className="text-5xl font-bold text-brand">15+</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Years of Excellence</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -top-6 -right-6 rounded-2xl bg-accent px-6 py-4 text-white shadow-xl hidden lg:block"
            >
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Global Reach</p>
              <p className="text-lg font-bold">50+ Countries</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
