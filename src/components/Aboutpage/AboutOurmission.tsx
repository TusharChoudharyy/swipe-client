// @ts-nocheck
// src/components/AboutOurmission.jsx

import { motion } from "framer-motion";

const AboutOurmission = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-16">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
    
    {/* Mission Statement */}
    <div>
      <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
        Our Mission — <br />
        <span className="text-blue-600">
          Powering Communication. Driving Growth.
        </span>
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-xl">
           We bring together <strong>messaging solutions</strong> and 
            <strong> performance marketing</strong> — helping global brands 
            connect, engage, and grow with measurable impact.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            title: "Enterprise Messaging",
            desc: "Secure, scalable, verified channels — SMS, RCS, WhatsApp built for global reach.",
          },
          {
            title: "Performance Marketing",
            desc: "ROI-driven affiliate models, precision targeting, and media strategies that deliver growth.",
          },
          {
            title: "Global Scale",
            desc: "Supporting clients across 50+ markets with compliance-ready, future-proof solutions.",
          },
          {
            title: "Data-Led Creativity",
            desc: "Combining analytics, automation, and creativity to maximize efficiency and impact.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Decorative Visual Side */}
    <div className="relative flex justify-center">
      <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border border-gray-200 rounded-2xl px-8 py-12 shadow-xl max-w-sm w-full">
        <p className="text-xl font-semibold text-gray-800 leading-snug">
          “We enable <span className="text-blue-600">trusted communication</span> 
          and deliver <span className="text-blue-600">measurable growth</span> 
          for our clients worldwide.”
        </p>
        <div className="mt-6 w-14 h-1 bg-blue-600 rounded-full" />
        <p className="text-sm text-gray-500 mt-4">— The SwipeMedia Team</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutOurmission;
