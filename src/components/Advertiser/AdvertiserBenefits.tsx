import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Benefits Data
const BENEFITS = [
  { emoji: "⚡", title: "Rapid Campaign Launch", desc: "Get your offer live in 48 hours or less." },
  { emoji: "🔍", title: "Advanced Audience Targeting", desc: "Layered targeting via behavior, geo, device & more." },
  { emoji: "📈", title: "ROI-Driven Optimization", desc: "We auto-optimize for CPA, LTV, and retention." },
  { emoji: "👥", title: "Curated Affiliate Access", desc: "Work only with proven, vetted traffic partners." },
  { emoji: "🛡️", title: "Full-Funnel Fraud Control", desc: "Bot filtering, click validation & affiliate hygiene." },
  { emoji: "🔄", title: "Multi-Channel Attribution", desc: "Track conversions across email, push, native, and social." },
];

const AdvertiserBenefits = () => {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll(".benefit-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, rotate: -3 },
        { y: 0, opacity: 1, rotate: 0, duration: 1.2, ease: "power3.out", stagger: 0.1 }
      );
    }
  }, []);

  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-white text-[#183ec2] overflow-hidden">
      {/* Gradient Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
          Performance Marketing Benefits
        </h2>
        <p className="text-lg text-[#183ec2]/80 max-w-3xl mx-auto">
          Everything you need to scale smartly, backed by real-time data and elite support.
        </p>
      </div>

      {/* Benefit Cards Grid */}
      <div
        ref={ref}
        className="relative z-10 grid md:grid-cols-3 sm:grid-cols-2 gap-8 place-items-center"
      >
        {BENEFITS.map((item, idx) => (
          <div
            key={idx}
            className="benefit-card group w-full max-w-xs bg-[#eaeefe] border border-[#183ec2]/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-3 hover:scale-105 duration-300"
          >
            <div className="text-5xl mb-4">{item.emoji}</div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-[#183ec2]/80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvertiserBenefits;
