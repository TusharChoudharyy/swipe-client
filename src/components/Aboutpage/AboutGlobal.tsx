// @ts-nocheck
// src/components/AboutGlobal.tsx
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Mumbai", country: "India", position: "left" },
  { name: "New York", country: "USA", position: "right" },
  { name: "London", country: "UK", position: "center" },
  { name: "Dubai", country: "UAE", position: "center" },
  { name: "Singapore", country: "Asia", position: "left" },
  { name: "Sydney", country: "Australia", position: "right" },
];

const AboutGlobal = () => {
  // Animation variants
  const variants = {
    left: { opacity: 0, x: -80 },
    right: { opacity: 0, x: 80 },
    center: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <section className="relative bg-[#F9FAFB] text-gray-900 py-24 px-6 md:px-20 overflow-hidden">
      {/* Light Gradient Glows */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-indigo-300/30 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-pink-300/20 blur-[160px] rounded-full -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Header */}
        <span className="inline-block bg-indigo-50 px-4 py-1 rounded-full text-xs sm:text-sm text-indigo-600 uppercase tracking-wide font-medium mb-4">
          Global Presence
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">
          Connecting <span className="text-indigo-600">Markets</span> Worldwide
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          From strategic hubs across continents, we help brands expand reach
          and impact — combining messaging precision with performance marketing scale.
        </p>

        {/* City Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="relative bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-left"
              variants={variants}
              initial={city.position}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            >
              {/* Location Icon */}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
                  {city.name}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {city.name}
              </h3>
              <p className="text-sm text-gray-500">{city.country}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote / Closing Statement */}
        <motion.div
          className="mt-16 bg-white border border-gray-200 rounded-xl p-8 max-w-3xl mx-auto shadow-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            “Our distributed presence enables us to serve clients locally while 
            driving global strategies that deliver measurable impact.”
          </p>
          <p className="text-sm text-gray-500 mt-3">
            — SwipeMedia Leadership Team
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutGlobal;
