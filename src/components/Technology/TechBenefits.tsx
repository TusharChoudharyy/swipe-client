// @ts-nocheck
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Benefits Data
const BENEFITS = [
  { emoji: "💹", title: "Higher ROI", desc: "Optimize every dollar with data-backed campaign scaling." },
  { emoji: "🎯", title: "Targeted Lead Generation", desc: "Reach the right audience, at the right time." },
  { emoji: "💰", title: "Low CAC", desc: "Drive more value from every acquisition." },
  { emoji: "📊", title: "Full-Funnel Tracking", desc: "Know exactly what’s driving conversions." },
  { emoji: "📈", title: "Scalable Campaign Models", desc: "Grow faster without growing your team." },
  { emoji: "🤝", title: "Trusted Affiliate Network", desc: "Rely on vetted partners with proven results." },
];

const TechBenefits = () => {
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
           Scale Smarter. Perform Better.
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Everything you need to scale smartly, backed by real-time data and elite support.
        </p>
      </div>

      {/* Benefit Cards Grid */}
       <div
        ref={ref}
        className="relative z-10 grid md:grid-cols-3 sm:grid-cols-2 gap-x-18 gap-y-8 justify-items-center"
      >
        {BENEFITS.map((item, idx) => (
          <div
            key={idx}
            className="benefit-card group w-full bg-[#eaeefe] border border-[#183ec2]/10 rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-3 hover:scale-105 duration-300"
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

export default TechBenefits;
