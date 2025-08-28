// @ts-nocheck
// src/components/Industryuse.jsx
import { motion } from "framer-motion";
import {
  Building,
  Stethoscope,
  GraduationCap,
  Store,
  Plane,
  MonitorSmartphone,
} from "lucide-react";

const industries = [
  {
    icon: <Building size={28} />,
    tagline: "🏢 B2B Marketing",
    title: "Enterprise & SaaS",
    desc: "Craft tailored campaigns to engage decision-makers and drive demo requests at scale.",
  },
  {
    icon: <Stethoscope size={28} />,
    tagline: "💊 Healthcare Content",
    title: "MedTech & Wellness",
    desc: "Simplify complex healthcare products into scroll-stopping content that builds trust.",
  },
  {
    icon: <GraduationCap size={28} />,
    tagline: "📚 EdTech Growth",
    title: "Education & Courses",
    desc: "Boost signups and engagement with value-driven video content and storytelling.",
  },
  {
    icon: <Store size={28} />,
    tagline: "🛒 DTC Performance",
    title: "E-commerce & Retail",
    desc: "Launch product-led campaigns that turn visitors into loyal customers.",
  },
  {
    icon: <Plane size={28} />,
    tagline: "🌍 Hospitality Ads",
    title: "Travel & Tourism",
    desc: "Inspire action with story-first content for hotels, experiences, and destinations.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    tagline: "📱 App Promotions",
    title: "Tech & Startups",
    desc: "From pre-launch buzz to viral loops—boost visibility and installs with Swipe media.",
  },
];

const Industryuse = () => {
  return (
    <section className="bg-white text-gray-900 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Industry Use Cases 🌐
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proven Swipe solutions across sectors — from SaaS to startups and retail to healthcare.
          </p>
        </motion.div>

        {/* Grid of Industries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white hover:bg-gray-50 transition rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md"
            >
              <div className="text-purple-600 mb-2">{item.icon}</div>
              <div className="text-sm text-gray-500 mb-1 font-medium tracking-wide">
                {item.tagline}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industryuse;
