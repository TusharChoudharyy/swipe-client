// @ts-nocheck
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-12 bg-white border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
        
        {/* Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          Ready to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#183ec2] via-[#5a8dee] to-[#183ec2] animate-gradient">
            Elevate Your Brand?
          </span>
        </motion.h2>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center md:justify-end"
        >
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#183ec2] to-[#5a8dee] text-white font-semibold shadow-md hover:shadow-lg transition-all">
            Request Demo
          </button>
          <button className="px-6 py-3 rounded-lg border border-[#183ec2] text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all">
            Contact Sales
          </button>
        </motion.div>
      </div>

      {/* Gradient Animation */}
      <style>
        {`
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 6s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
}
