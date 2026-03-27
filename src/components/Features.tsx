import { motion } from "motion/react";
import { Globe, ShieldCheck, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    name: "Reliable Global Sourcing",
    description: "Direct access to verified manufacturers across the globe, ensuring consistent supply chains.",
    icon: Globe,
  },
  {
    name: "Competitive Pricing",
    description: "Direct-from-source pricing models that help your business maintain healthy margins.",
    icon: BarChart3,
  },
  {
    name: "Quality Assurance",
    description: "Multi-stage inspection processes to guarantee every product meets international standards.",
    icon: ShieldCheck,
  },
  {
    name: "Efficient Logistics",
    description: "Streamlined shipping and customs handling to get products to your warehouse faster.",
    icon: Zap,
  },
];

export function Features() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-brand uppercase tracking-widest"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Built for Scalable Business Growth
          </motion.p>
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col items-center text-center p-8 rounded-[32px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:border-brand/5"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F9FAFB] shadow-inner border border-gray-50 transition-colors group-hover:bg-brand/5">
                  <feature.icon className="h-10 w-10 text-brand transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                </div>
                <dt className="text-xl font-bold leading-7 text-primary">
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto leading-relaxed">{feature.description}</p>
                </dd>
                
                <div className="absolute inset-0 rounded-[32px] border border-transparent transition-colors group-hover:border-brand/10 pointer-events-none" />
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
