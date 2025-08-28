// @ts-nocheck
"use client";
// @ts-nocheck

import { motion } from "framer-motion";

// Features with icons (your BENEFITS)
const features = [
  { icon: "💼", title: "Custom Affiliate Models", desc: "Run CPA, CPL, CPI, RevShare, or hybrid—on your terms." },
  { icon: "⚙️", title: "Performance Marketing Ready", desc: "Optimize every campaign by cost per action." },
  { icon: "📲", title: "Mobile & Web Support", desc: "Support across platforms, devices, and geos." },
  { icon: "📊", title: "Transparent Tracking", desc: "Real-time data visibility, from click to conversion." },
  { icon: "🚀", title: "Built for Scale", desc: "Infrastructure supports massive volumes without latency." },
  { icon: "👥", title: "Partner With Top Affiliates", desc: "Vetted network built for high-EPC delivery." },
  { icon: "🔐", title: "Fraud Detection Layer", desc: "Safeguard your brand and budget from bad actors." },
  { icon: "🧠", title: "AI Optimization Tools", desc: "Smart targeting, dynamic routing, and source pruning." },
];

export default function AffiliateModelsBenefits() {
  return (
    <div className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 ">
          Affiliate Marketing Benefits
        </h2>

        <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-26">
    {features.map((feature, i) => (
      <motion.div
        key={i}
        className="flex items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
      >
        {/* Left: Icon */}
        <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 text-3xl">
          {feature.icon}
        </div>

        {/* Right: Text */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
