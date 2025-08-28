// @ts-nocheck
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Benefits Data
const BENEFITS = [
  { emoji: "⚡", title: "Supercharged Deliverability", desc: "Guaranteed low-latency global SMS delivery." },
  { emoji: "💻", title: "Developer-Friendly APIs", desc: "RESTful, scalable, and lightning-fast endpoints." },
  { emoji: "🧭", title: "Intelligent Routing", desc: "Avoid grey routes, boost conversion consistency." },
  { emoji: "🔐", title: "Carrier Grade Security", desc: "Data encrypted, fraud detection built-in." },
  { emoji: "🤝", title: "Affiliate Friendly Logs", desc: "Campaign-specific delivery logs for your network partners." },
  { emoji: "📈", title: "Instant Scalability", desc: "Scale from 1K to 10M+ messages on demand." },
  { emoji: "🔌", title: "Seamless CRM Hooks", desc: "Zapier, Make, or custom webhooks—done in minutes." },
  { emoji: "🕑", title: "24/7 Monitoring & Support", desc: "Real-time alerts with expert human support." },
];


const TransA2PBenefits = () => {
  const ref = useRef<HTMLDivElement>(null);


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

export default TransA2PBenefits;
