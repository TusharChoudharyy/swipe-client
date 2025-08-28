// @ts-nocheck
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Green Tick Access",
    desc: "Boost brand trust with official business verification",
  },
  {
    title: "Smart Trigger Campaigns",
    desc: "Set behavioral triggers that auto-fire messages at key journey points",
  },
  {
    title: "End-to-End Funnel Tracking",
    desc: "Measure clicks, replies, and sales in one unified dashboard",
  },
  {
    title: "Multi-Agent Dashboard",
    desc: "Scale conversations with multiple reps without losing context",
  },
  {
    title: "Dynamic Message Personalization",
    desc: "Merge user data in real-time for contextual engagement",
  },
  {
    title: "Rich Media Support",
    desc: "Use videos, carousels, PDFs to sell, support, and upsell",
  },
  {
    title: "Integration-Ready API",
    desc: "Connect with CRMs, landing pages, bots, and affiliate tracking tools",
  },
  {
    title: "Compliance & Opt-in Tools",
    desc: "Stay 100% compliant across geographies and verticals",
  },
];


export default function WAgrid() {
  return (
    <div className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#183ec2]">
          Why Advertisers Choose Us
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
