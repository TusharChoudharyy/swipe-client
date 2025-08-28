// @ts-nocheck
"use client";
import { motion } from "framer-motion";

// Features with icons (your BENEFITS)
const features = [
  { icon: "💼", title: "Affiliate Network Access", desc: "Connect with top-performing global affiliates across niches." },
  { icon: "⚡", title: "Real-Time Bidding Control", desc: "Leverage precision targeting across DSPs, SSPs, and native ad networks." },
  { icon: "🌐", title: "Multi-Channel Strategy", desc: "From social to native to programmatic — all synced and optimized." },
  { icon: "🛡️", title: "Fraud Shield Technology", desc: "Cut through click fraud and invalid traffic with layered protection." },
  { icon: "📈", title: "Conversion Funnel Intelligence", desc: "Monitor full-funnel insights from click to conversion." },
  { icon: "🏆", title: "Tier-1 Publisher Deals", desc: "Exclusive media placements with premium inventory access." },
  { icon: "⏱️", title: "24/7 Campaign Surveillance", desc: "Round-the-clock optimization to reduce CPA and maximize LTV." },
  { icon: "📊", title: "Integrated Attribution Stack", desc: "Unified analytics from first-click to last conversion." },
];


export default function AffiliateModelsBenefits() {
  return (
    <div className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 ">
          Media Buying Benefits
        </h2>

        <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-22">
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
