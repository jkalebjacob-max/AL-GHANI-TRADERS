import { motion } from "motion/react";
import { Factory, FileCheck2, ShieldCheck, HeadphonesIcon } from "lucide-react";

const pillars = [
  {
    title: "Vetted manufacturing",
    body: "We align production with your category, volume curve, and packaging standards—not generic marketplace lists.",
    icon: Factory,
  },
  {
    title: "QC & documentation",
    body: "Specs, revisions, and inspection checkpoints stay visible so approvals don’t stall at the loading dock.",
    icon: FileCheck2,
  },
  {
    title: "Export-ready programs",
    body: "Consolidation, labeling, and shipment milestones are planned for distributors, retailers, and private-label brands.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive trade desk",
    body: "Share targets and MOQs; our team routes your inquiry with clear next steps, typically within 1–2 business days.",
    icon: HeadphonesIcon,
  },
];

export function Trust() {
  return (
    <section className="relative border-b border-gray-100/80 bg-gradient-to-b from-white to-[#fafbfa] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gray-200 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand/80"
          >
            Why buyers choose Al-Ghani Traders
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
          >
            Institutional-grade sourcing, without the noise.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            Built for teams that need repeatable supply—not one-off quotes. Every engagement is structured for clarity,
            accountability, and long-term scale.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {pillars.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-gray-100/90 bg-white/80 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.03)] backdrop-blur-sm transition-[box-shadow,border-color] duration-300 hover:border-brand/15 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-[#f8faf9] text-brand transition-colors duration-300 group-hover:border-brand/10 group-hover:bg-brand/[0.06]">
                <item.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
