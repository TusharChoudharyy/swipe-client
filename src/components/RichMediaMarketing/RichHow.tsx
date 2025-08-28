// @ts-nocheck
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lock,
  Brain,
  Settings,
  BarChart3,
  TrendingUp
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Strategy & Ideation",
    description: "📋 We define your goals, KPIs, and affiliate network needs.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Creative Development",
    description: "🎨 Our team crafts high-performance rich media units.",
    icon: <Brain className="w-6 h-6" />,
  },
  {
    title: "A/B Testing & QA",
    description: "🧪 Rigorous testing to ensure speed, compatibility, and performance.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Deployment & Tracking",
    description: "🚀 Integrated across your media buys and affiliate channels.",
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: "Optimize & Scale",
    description: "📊 Real-time analytics, heatmaps, and creative iterations to scale.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];



const RichHow = () => {
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
        <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
          Launch. Optimize. Scale. Repeat.
        </h2>
        <p className="text-lg text-[#183ec2] font-medium">
          We simplify performance marketing for publishers so you focus on revenue—not operations.
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

export default RichHow;
