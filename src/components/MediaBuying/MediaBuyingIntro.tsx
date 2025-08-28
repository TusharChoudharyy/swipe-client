// @ts-nocheck
// src/components/MediaBuyingAtSwipe.jsx
import { Zap, Target, BarChart2, Repeat } from "lucide-react";

const features = [
  { icon: <Target size={20} />, title: "Precision Targeting" },
  { icon: <Zap size={20} />, title: "Real-Time Optimization" },
  { icon: <BarChart2 size={20} />, title: "Data-Driven Decisions" },
  { icon: <Repeat size={20} />, title: "Scalable Strategies" },
];

const MediaBuyingAtSwipe = () => {
  return (
    <section className="relative bg-gradient-to-tr from-[#FFF4ED] to-[#FFE9D6] py-24 overflow-hidden">
      {/* Decorative diagonal layer */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#FF7F2E]/20 rotate-45 rounded-full blur-3xl z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#0B0B0F] leading-snug mb-6">
            Media Buying at <br /> <span className="text-[#FF7F2E]">Swipe Media</span>
          </h2>
          <p className="text-[#333] text-lg leading-relaxed mb-8">
            Our team blends creative strategy with deep data insights to deliver media buying campaigns that convert.
            We ensure every rupee spent goes toward real, scalable results.
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300 group"
              >
                <div className="p-2 bg-[#FF7F2E]/10 rounded-full text-[#FF7F2E] group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <span className="text-[#0B0B0F] font-medium">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Card */}
        <div className="relative">
          <div className="w-full h-[300px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between border border-[#FFD3B6] hover:scale-[1.02] transition">
            <h3 className="text-xl font-semibold text-[#FF7F2E]">
              “Better ROI Starts with Smarter Buying”
            </h3>
            <p className="text-[#333] text-sm">
              Swipe optimizes ad delivery across native, display, and in-app channels — ensuring your brand appears where your customers are.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm text-[#0B0B0F] font-semibold">
              Built for Performance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBuyingAtSwipe;
