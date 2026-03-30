import { motion } from "motion/react";
import { Sparkles, FileCheck2, Zap, HeadphonesIcon } from "lucide-react";

const pillars = [
  {
    icon: Sparkles,
    title: "Curated quality",
    body: "Every product is handpicked for reliability, design, and everyday usability.",
  },
  {
    icon: FileCheck2,
    title: "Transparent details",
    body: "Materials, usage, and pricing are clear and easy to understand before you buy.",
  },
  {
    icon: Zap,
    title: "Fast checkout",
    body: "Add to cart, enter your details, and place your order in under a minute.",
  },
  {
    icon: HeadphonesIcon,
    title: "Helpful support",
    body: "Our team is available to help with product questions and order issues.",
  },
];

export function Trust() {
  return (
    <section className="bg-[#fafbfa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-2xl font-semibold text-primary sm:text-3xl"
          >
            Why shoppers choose us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.07 }}
            className="mt-3 text-sm text-gray-500 sm:text-base"
          >
            Built for customers who want quality products and a checkout that just works.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand/8 text-brand">
                <item.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
