// @ts-nocheck
// src/components/HowWeWork.jsx
import { Lightbulb, PencilRuler, Code2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Deep Discovery",
    icon: <Lightbulb className="w-6 h-6 text-[#FF7F2E]" />,
    desc: "We immerse ourselves in your business to understand your users, gaps, and future goals.",
  },
  {
    id: "02",
    title: "Design Sprint",
    icon: <PencilRuler className="w-6 h-6 text-[#FF7F2E]" />,
    desc: "Wireframes to UI, we shape clear journeys with conversion at every interaction point.",
  },
  {
    id: "03",
    title: "Engineering Build",
    icon: <Code2 className="w-6 h-6 text-[#FF7F2E]" />,
    desc: "Frontend. Backend. Integrations. Built fast, clean and production ready from Day 1.",
  },
  {
    id: "04",
    title: "Launch & Iterate",
    icon: <Rocket className="w-6 h-6 text-[#FF7F2E]" />,
    desc: "Testing. Data. Growth loops. Your product ships strong and improves like a machine.",
  },
];

const HowWeWork = () => {
  return (
    <section className="relative bg-[#FAFAFB] px-6 md:px-24 py-32">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2330] mb-4">
          Our Execution Engine
        </h2>
        <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto">
          Structured for speed, precision, and impact — our process delivers real growth, not fluff.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-12 min-w-[1200px] px-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl border border-[#E6E8EC] shadow-md p-8 min-w-[280px] group hover:shadow-xl transition-all relative"
            >
              <div className="absolute -top-6 -left-6 text-7xl font-bold text-[#FF7F2E]/10 pointer-events-none select-none">
                {step.id}
              </div>

              <div className="mb-4 w-11 h-11 flex items-center justify-center rounded-xl bg-[#FF7F2E]/10">
                {step.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#1E2330] mb-2">{step.title}</h3>
              <p className="text-sm text-[#5B5B5B] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
