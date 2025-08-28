// @ts-nocheck
import React from "react";
// @ts-nocheck

const AdvertiserCTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-[#f9fafb] overflow-hidden border-t border-gray-200">
      {/* Abstract Pattern (Soft Waves) */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 800 400"
        >
          <path
            d="M 0 200 Q 200 100 400 200 T 800 200 L 800 400 L 0 400 Z"
            fill="url(#grad)"
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#38bdf8", stopOpacity: 0.08 }} />
              <stop offset="100%" style={{ stopColor: "#a855f7", stopOpacity: 0.08 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-gradient">
          Supercharge Your Campaign Performance
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
          Join leading brands using Swipe to turn every message into measurable growth. Built for scale, speed, and conversion.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md transform hover:scale-105 hover:shadow-lg transition-all">
            Start Scaling Today
          </button>
          <button className="px-8 py-3 rounded-full font-semibold text-gray-700 border border-gray-300 hover:border-blue-400 hover:text-blue-500 transform hover:scale-105 transition-all">
            Talk to an Expert
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientShift 6s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default AdvertiserCTA;
