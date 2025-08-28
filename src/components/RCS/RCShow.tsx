// @ts-nocheck
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardList,
  LayoutTemplate,
  Rocket,
  BarChart3,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Plan Your Messaging Strategy",
    description:
      "📋 Identify your campaign goals, target audience, and performance KPIs.",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    title: "Customize Your RCS Flow",
    description:
      "🎨 Use branded media, carousels, buttons, and verified sender IDs.",
    icon: <LayoutTemplate className="w-6 h-6" />,
  },
  {
    title: "Launch & Automate",
    description:
      "🚀 Trigger messages via APIs, time-based flows, or user actions.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Track, Analyze & Optimize",
    description:
      "📊 Access live dashboards, click maps, and funnel analytics.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const RCShow = () => {
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
        <h2 className="text-4xl font-extrabold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-4">
          Rich Messaging. Smartly Delivered.
        </h2>
        <p className="text-lg text-[#183ec2] font-medium">
          From idea to execution in four simple steps.
        </p>
      </div>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="relative bg-white rounded-2xl shadow-md p-6 border border-[#dbe3ff] hover:shadow-xl transition-all duration-300 group"
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
    </section>
  );
};

export default RCShow;
