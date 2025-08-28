// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RetargetingFaq() {
  const faqs = [
  {
    q: "What is retargeting in affiliate marketing?",
    a: "Re engaging users who previously interacted, driving them back to convert.",
  },
  {
    q: "Which channels do you use?",
    a: "Display, social, native, email, SMS—and any compatible affiliate network.",
  },
  {
    q: "How quickly can we launch?",
    a: "Setup and go live typically within 48–72 hours post kickoff.",
  },
  {
    q: "Can I control ad frequency?",
    a: "Yes—smart caps prevent over exposure and ad fatigue.",
  },
  {
    q: "Is dynamic creative supported?",
    a: "Absolutely—ads auto populate based on user behavior and product data.",
  },
  {
    q: "How do you measure success?",
    a: "We track CPA, ROAS, LTV uplift, and full funnel attribution.",
  },
  {
    q: "Do you handle GDPR/CCPA compliance?",
    a: "Yes—our tags and workflows are privacy first and compliant.",
  },
  {
    q: "Can you integrate with our ESP/CRM?",
    a: "Yes, we support pixel, API, and postback integrations with all major systems",
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
