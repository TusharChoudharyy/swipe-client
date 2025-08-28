// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MediaBuyingFaq() {
  const faqs = [
    {
      q: "What industries do you specialize in?",
      a: "We work across Finance, Health, E-commerce, SaaS, and more—wherever performance matters.",
    },
    {
      q: "How are affiliates vetted?",
      a: "We manually verify publisher traffic sources, compliance history, and conversion quality.",
    },
    {
      q: "What’s your media buying strategy?",
      a: "We blend manual + programmatic buying across social, native, display, and search.",
    },
    {
      q: "Can I track campaign performance?",
      a: "Yes, through real-time dashboards, conversion attribution, and deep reporting.",
    },
    {
      q: "What’s the minimum ad spend?",
      a: "We typically onboard clients starting at $5K monthly budget and scale from there.",
    },
    {
      q: "Do you offer fraud protection?",
      a: "Absolutely. Every campaign is protected with advanced click and impression filters.",
    },
    {
      q: "How fast can I go live?",
      a: "Most campaigns launch within 72 hours post onboarding and creative handoff.",
    },
    {
      q: "Can I integrate my CRM?",
      a: "Yes, we support integration with most leading CRMs and tracking tools.",
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
