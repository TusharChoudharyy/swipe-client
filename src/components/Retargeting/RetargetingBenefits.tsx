// @ts-nocheck
"use client";
import { motion } from "framer-motion";

// Features with icons
const features = [
  { icon: "🎯", title: "Precision Audience Targeting", desc: "Re-engage only your most valuable drop-off segments." },
  { icon: "🔄", title: "Multi Touch Sequences", desc: "Layered messaging across channels for higher recall." },
  { icon: "🚀", title: "Conversion Lift", desc: "Boost sales by up to 30% with optimized retargeting." },
  { icon: "💬", title: "Dynamic Creative Variants", desc: "Personalized ads based on real-time behavior." },
  { icon: "📊", title: "Transparent Reporting", desc: "Full funnel visibility on every step and spend." },
  { icon: "⏱️", title: "Rapid Campaign Deployment", desc: "Get retargeting live within 48 hours of setup." },
  { icon: "🛡️", title: "Fraud & Bot Protection", desc: "Advanced filters ensure genuine traffic engagement." },
  { icon: "🔗", title: "Affiliate Network Sync", desc: "Seamless integration with top CPA/CPL offers." },
];

export default function RetargetingBenefits() {
  return (
    <div className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 ">
          Why Partner with Us?
        </h2>

        {/* Features Grid */}
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
                {/* Icon */}
                <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg text-gray-700 text-3xl">
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
