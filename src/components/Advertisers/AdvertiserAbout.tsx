// @ts-nocheck
"use client";
// @ts-nocheck

import { motion } from "framer-motion";
import aboutImage from "../../assets/images/hero2.png";

const benefits = [
  { icon: "🚀", text: "Hyper-Targeted Lead Generation" },
  { icon: "🌐", text: "Global Publisher Ecosystem" },
  { icon: "📊", text: "Real-Time Conversion Tracking" },
  { icon: "🔐", text: "Fraud Protection + Compliance" },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AdvertiserAbout() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f5f8ff] px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-2xl -z-10" />
          <img
            src={aboutImage}
            alt="Affiliate Network"
            className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="text-lg mb-3 uppercase tracking-widest font-semibold text-[#001e80]"
          >
            Dominate
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold "
          >
            Affiliate Network Built for Advertisers
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-gray-700 leading-relaxed"
          >
            Power performance campaigns across global markets with data-driven
            targeting and elite publisher partnerships.
          </motion.p>

          {/* Benefit Boxes */}
          <motion.div
            variants={containerVariants}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-start gap-3 bg-white px-5 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <p className="font-medium text-gray-800">{benefit.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
