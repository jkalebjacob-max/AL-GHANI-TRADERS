import { motion } from "motion/react";
import { Truck, RotateCcw, ShieldCheck, Headphones } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "Fast shipping",
    body: "Orders processed quickly and delivered to your door.",
  },
  {
    icon: RotateCcw,
    title: "Easy returns",
    body: "Not satisfied? Returns and exchanges are simple.",
  },
  {
    icon: ShieldCheck,
    title: "Quality guaranteed",
    body: "Every product is handpicked for reliability and everyday use.",
  },
  {
    icon: Headphones,
    title: "Customer support",
    body: "Real help available when you need it — before or after your order.",
  },
];

export function Features() {
  return (
    <section className="border-y border-gray-100 bg-[#fafbfa] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left lg:flex-col lg:items-center lg:text-center"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm text-brand">
                <perk.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{perk.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-gray-500 hidden sm:block">{perk.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
