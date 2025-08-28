// @ts-nocheck
// src/components/ServiceHighlights.jsx
import { Sparkles, ShieldCheck, Clock, BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: <Sparkles size={24} />, 
    title: "Creative-led Approach",
    desc: "We blend design thinking and innovation to craft visually stunning and intuitive experiences."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Enterprise-Grade Delivery",
    desc: "From MVPs to massive rollouts, our architecture supports scale, security, and performance."
  },
  {
    icon: <Clock size={24} />,
    title: "Rapid Execution",
    desc: "Agile sprints, fast prototypes, real-time feedback loops — because time is your biggest asset."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Growth Optimization",
    desc: "We design to drive metrics — conversions, retention, engagement, and real business impact."
  },
];

const ServiceHighlights = () => {
  return (
    <section className="bg-[#FAFAFB] px-6 md:px-24 py-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E2330] mb-4">
          What Sets Us Apart
        </h2>
        <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto">
          Not just services — we bring a creative edge and execution engine that turns ideas into scale.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#E6E8EC] rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#FF7F2E]/10 text-[#FF7F2E]">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#1E2330] mb-2">{item.title}</h3>
            <p className="text-sm text-[#5B5B5B] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
