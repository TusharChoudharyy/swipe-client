// @ts-nocheck
"use client";
import { motion } from "framer-motion";

// Features with icons
const features = [
  { icon: "📢", title: "Exclusive Offers Only", desc: "You get campaigns no one else does." },
  { icon: "🧠", title: "Smart Traffic Routing", desc: "Boost EPC with geo/device logic." },
  { icon: "📲", title: "Mobile & Web Campaigns", desc: "Run both app installs and web leads." },
  { icon: "⏱️", title: "Fast Payout Cycles", desc: "Weekly, net-7, or even faster." },
  { icon: "📊", title: "Transparent Reporting", desc: "See every click, lead, and payout." },
  { icon: "🤝", title: "Direct Brand Access", desc: "Work directly with advertisers—not middlemen." },
  { icon: "🔒", title: "Traffic Integrity Filters", desc: "Bot-blocking and fraud monitoring done for you." },
  { icon: "🧰", title: "Full Creative Support", desc: "We handle design so you can focus on scaling." },
];

export default function PublisherBenefits() {
  return (
    <div className="w-full px-6 py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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
