// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TechFaq() {
 const faqs = [
  {
    q: "What is performance marketing for tech products?",
    a: "A data-driven strategy that pays only for results like leads, sign-ups, or installs.",
  },
  {
    q: "How does Swipe vet its affiliate network?",
    a: "We onboard only trusted affiliates with proven track records in tech verticals.",
  },
  {
    q: "Can I track campaigns in real-time?",
    a: "Absolutely. You’ll get full access to transparent dashboards and live reports.",
  },
  {
    q: "Is media buying included in your service?",
    a: "Yes, we offer cross-channel media buying as part of our performance strategy.",
  },
  {
    q: "What KPIs can I track?",
    a: "You can monitor CPL, CPA, ROAS, CTR, and custom metrics tied to your funnel.",
  },
  {
    q: "How fast can campaigns go live?",
    a: "Depending on the complexity, setup takes 5–10 business days after onboarding.",
  },
  {
    q: "Is this suitable for early-stage tech startups?",
    a: "Yes — we scale campaigns based on your maturity and budget flexibility.",
  },
  {
    q: "What’s the minimum budget requirement?",
    a: "We typically onboard clients with a monthly spend of $5,000 and above.",
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
