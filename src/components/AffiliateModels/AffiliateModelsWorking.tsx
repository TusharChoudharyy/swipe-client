// @ts-nocheck
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Settings, Globe, BarChart3, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Pick Your Model",
    description: "🎯 Choose CPA, CPL, CPI, RevShare, or hybrid based on your goals.",
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: "Launch With Full Setup",
    description: "⚙️ We handle creatives, tracking, and funnel config for you.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Plug Into Our Network",
    description: "🌐 Get access to high-performing publishers and media buyers.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Track & Optimize",
    description: "📊 Monitor live data, test creatives, and boost conversion points.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Scale What Works",
    description: "📈 Auto-optimize sources and expand across verticals and geos.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
];

const AffiliateModelsWorking = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-white relative">
      <div className="absolute inset-0 top-40 bg-[radial-gradient(ellipse_150%_100%_at_top_left,#eaeefe,#ffffff)] -z-10"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold ">
          Choose Your Model. We’ll Power It.
        </h2>
        <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto">
          Our team supports and scales affiliate models designed around your KPIs, vertical, and growth targets.
        </p>
      </div>

      {/* Top 3 cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.slice(0, 3).map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-white rounded-2xl shadow-md p-6 border border-[#dbe3ff] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#183ec2] to-[#001e80] rounded-l-xl transition-transform duration-300 group-hover:scale-y-110"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#183ec2]">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#183ec2]">
                {index + 1}. {step.title}
              </h3>
            </div>
            <p className="text-sm text-[#4c5472]">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom 2 cards - centered with staircase effect */}
      <div className="flex justify-center gap-8 mt-8">
        {steps.slice(3).map((step, index) => (
          <div
            key={index + 3}
            ref={(el) => (cardsRef.current[index + 3] = el)}
            className={`relative bg-white rounded-2xl shadow-md p-6 border border-[#dbe3ff] hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group w-80
              ${index === 0 ? "-translate-y-6" : "translate-y-0"}`}
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#183ec2] to-[#001e80] rounded-l-xl transition-transform duration-300 group-hover:scale-y-110"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#183ec2]">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#183ec2]">
                {index + 4}. {step.title}
              </h3>
            </div>
            <p className="text-sm text-[#4c5472]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AffiliateModelsWorking;
