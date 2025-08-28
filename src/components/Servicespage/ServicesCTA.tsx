// @ts-nocheck
// src/components/ServiceCTA.jsx
import { ArrowRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="bg-[#FF7F2E] text-white py-28 px-6 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Let’s Build What Matters
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Whether it’s your next MVP or a product redesign — we’re your design + dev partner from day one.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-white text-[#FF7F2E] hover:text-[#E55A00] px-6 py-3 rounded-full font-semibold shadow-md transition-all"
        >
          Get in Touch <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default ServicesCTA;
