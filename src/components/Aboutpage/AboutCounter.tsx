// @ts-nocheck
// src/components/AboutCounter.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageSquare, ShieldCheck, Globe, BarChart3, TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";

const messagingStats = [
  { label: "Messages Delivered", value: 2.5, suffix: "B+", icon: MessageSquare },
  { label: "Enterprise Clients", value: 300, suffix: "+", icon: ShieldCheck },
  { label: "Global Reach", value: 70, suffix: "+", icon: Globe },
  { label: "Avg. Engagement", value: 92, suffix: "%", icon: BarChart3 },
];

const performanceStats = [
  { label: "Ad Spend Managed", value: 25, suffix: "M+", icon: DollarSign },
  { label: "Conversions Driven", value: 1.8, suffix: "M+", icon: ShoppingCart },
  { label: "Brands Scaled", value: 150, suffix: "+", icon: Users },
  { label: "Avg. ROI Delivered", value: 4.5, suffix: "x", icon: TrendingUp },
];

export default function AboutCounter() {
  const countersRef = useRef([]);

  useEffect(() => {
    const animateCounters = () => {
      countersRef.current.forEach((el, i) => {
        const target = el.dataset.value;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: target % 1 === 0 ? 1 : 0.1 },
            ease: "power3.out",
            onUpdate: function () {
              if (String(target).includes(".")) {
                el.innerText = parseFloat(el.innerText).toFixed(1);
              }
            },
          }
        );
      });
    };

    animateCounters();
  }, []);

  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-r from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-indigo-600 text-sm uppercase tracking-wide bg-indigo-100 px-4 py-1 rounded-full inline-block mb-4">
          Numbers That Define Us
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Messaging <span className="text-indigo-600">&</span> Performance — United Impact
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm">
          From secure global messaging to ROI-driven performance campaigns, here’s how we deliver measurable outcomes.
        </p>
      </div>

      {/* Dual Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative">
        {/* Messaging Side */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
          <h3 className="text-xl font-semibold text-indigo-600 mb-8 text-left">Messaging Excellence 📩</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {messagingStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div
                  ref={(el) => (countersRef.current[i] = el)}
                  data-value={stat.value}
                  className="text-3xl font-bold text-indigo-700"
                >
                  0
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <span className="text-indigo-500 font-semibold">{stat.suffix}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Side */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-8 text-left">Performance Impact 📊</h3>
          <div className="grid sm:grid-cols-2 gap-8">
            {performanceStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div
                  ref={(el) => (countersRef.current[messagingStats.length + i] = el)}
                  data-value={stat.value}
                  className="text-3xl font-bold text-blue-700"
                >
                  0
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <span className="text-blue-500 font-semibold">{stat.suffix}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-16">
        <p className="text-gray-500 text-sm italic">
          Two verticals. One mission. Driving growth and engagement at a global scale. 🌍
        </p>
      </div>
    </section>
  );
}
