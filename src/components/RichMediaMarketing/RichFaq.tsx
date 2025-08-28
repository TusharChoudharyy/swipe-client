// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RichFaq() {
 const faqs = [
    {
      q: "What is Rich Media in performance marketing?",
      a: "Rich Media includes interactive ad formats like videos, playable demos, and animations designed to boost engagement and performance metrics.",
    },
    {
      q: "How does it improve affiliate marketing results?",
      a: "It increases CTR, lowers CPA, and enhances conversion funnels via immersive user experiences.",
    },
    {
      q: "Are these ads mobile-optimized?",
      a: "Yes, every rich media unit is built responsive-first and tested on all screen sizes.",
    },
    {
      q: "What platforms do you support?",
      a: "We support all major DSPs, affiliate networks, and media platforms including Google, Meta, and programmatic exchanges.",
    },
    {
      q: "Can I customize creatives for different campaigns?",
      a: "Absolutely. Creatives are modular and can be personalized by audience, geography, or funnel stage.",
    },
    {
      q: "How do you measure campaign success?",
      a: "Through real-time analytics, heatmaps, post-click engagement, and conversion metrics tied directly to your goals.",
    },
    {
      q: "Is there support for programmatic buying?",
      a: "Yes. Our rich media formats are compatible with programmatic platforms and RTB integrations.",
    },
    {
      q: "Do you offer retargeting capabilities?",
      a: "Yes. We design creatives optimized for dynamic retargeting with pixel tracking and personalized CTA modules.",
    },
];


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-[#f5f8ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 ">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
