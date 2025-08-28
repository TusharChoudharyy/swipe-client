// @ts-nocheck
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom Affiliate Strategy",
    desc: "Tailored affiliate programs aligned to your KPIs.",
  },
  {
    title: "Global Traffic Access",
    desc: "Reach tech-savvy buyers via global premium publishers.",
  },
  {
    title: "Advanced Media Buying",
    desc: "Programmatic and direct buys across performance-driven platforms.",
  },
  {
    title: "Fraud Detection & Traffic Quality",
    desc: "AI-based fraud protection and validation systems.",
  },
  {
    title: "Transparent Attribution",
    desc: "Real-time tracking with full-funnel visibility.",
  },
  {
    title: "Multi-Device Campaigns",
    desc: "Cross-platform reach — mobile, desktop, app, OTT.",
  },
  {
    title: "Vertical Optimization",
    desc: "Campaigns tuned specifically for B2B tech, SaaS, cloud & more.",
  }
];

export default function TechGrid() {
  return (
    <div className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 ">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,1fr)]">
          {features.map((f, i) => {
            let customClass = "";
            if (i === 0) customClass = "md:col-span-2 md:row-span-2";
            if (i === 2) customClass = "md:row-span-2";
            if (i === 5 || i === 7) customClass = "md:col-span-2";

            return (
              <motion.div
                key={i}
                className={`bg-white border border-[#183ec2] rounded-xl p-6 shadow-sm hover:shadow-md transition transform hover:scale-[1.015] hover:-translate-y-1 ${customClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3 className="text-xl font-semibold text-[#183ec2] mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
