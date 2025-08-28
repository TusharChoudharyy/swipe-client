// @ts-nocheck
"use client";
// @ts-nocheck

import { motion } from "framer-motion";

// Features with icons (replace emojis with SVGs if needed)
const features = [
  { icon: "📊", title: "Data-Driven Insights", desc: "We provide actionable analytics to drive measurable growth and ROI." },
  { icon: "⚡", title: "Optimized Campaigns", desc: "High-performance campaigns designed for scalability and efficiency." },
  { icon: "🌐", title: "Global Reach", desc: "Expand your brand across international markets with localized strategies." },
  { icon: "🔐", title: "Security & Compliance", desc: "We maintain strict compliance standards to ensure data safety." },
  { icon: "🎯", title: "Targeted Solutions", desc: "Hyper-targeted strategies to reach the right audience at the right time." },
  { icon: "🤝", title: "Partnerships & Support", desc: "Collaborate with our global network for maximum impact." },
];

export default function ProfessionalFeatureGrid() {
  return (
    <div className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 ">
          Why Top Brands Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
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
  );
}
