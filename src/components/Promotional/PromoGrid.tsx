// @ts-nocheck
import { motion } from "framer-motion";

const features = [
  {
    title: "High-Volume Delivery",
    desc: "Reach thousands in seconds with enterprise-grade infrastructure.",
  },
  {
    title: "Dynamic Templates",
    desc: "Personalize messages using name, offer, location, and more.",
  },
  {
    title: "Real-Time Analytics",
    desc: "Monitor open rates, CTRs, and delivery insights instantly.",
  },
  {
    title: "Omnichannel Integrations",
    desc: "Plug into your CRM, API, or media buying stack easily.",
  },
  {
    title: "Geo + Device Targeting",
    desc: "Localize content for higher engagement and response.",
  },
  {
    title: "Smart Routing",
    desc: "Auto-switch between DLT, global, and fallback routes for 100% delivery assurance.",
  },
  {
    title: "Compliance Engine",
    desc: "Stay DLT/TRAI compliant with built-in consent & filtering tools.",
  },
  {
    title: "Performance-Optimized",
    desc: "Designed for affiliate networks, media buyers, and lead gen pros.",
  },
];


export default function PromoGrid() {
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
