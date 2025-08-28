// @ts-nocheck
// src/components/SMMFeatures.jsx
import { features } from "../../data/SmmFeatures";
import { motion } from "framer-motion";

const SMMFeatures = () => {
  return (
    <section className="w-full py-28 px-6 md:px-16 bg-[#F4FBFF]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#0B0B0F] mb-20">
          Social Media at Swipe Media
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6">
          {features.map((feature, index) => {
            // Custom span layout logic
            let className = "col-span-1 row-span-1";
            if (index === 0) className = "lg:col-span-2 row-span-2";
            if (index === 3) className = "lg:row-span-2";
            if (index === 5) className = "lg:col-span-2";

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:scale-[1.02] ${className}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF9F1C] mb-4">
                  <img src={feature.icon} alt={feature.title} className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#0B0B0F] mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-[#444] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SMMFeatures;
