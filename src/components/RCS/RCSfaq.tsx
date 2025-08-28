// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RCSfaq() {
  const faqs = [
    {
      q: "What is performance marketing for advertisers?",
      a: "It’s a results-driven model where you only pay for actions—like leads, installs, or sales.",
    },
    {
      q: "How do you source affiliates?",
      a: "We onboard only vetted, high-performing affiliates across verticals and geos.",
    },
    {
      q: "Can I track conversions in real-time?",
      a: "Yes, our dashboard gives live access to every metric that matters.",
    },
    {
      q: "Do you offer campaign customization?",
      a: "Absolutely. From creative to funnels to targeting, everything is tailored to your goals.",
    },
    {
      q: "What types of offers do you support?",
      a: "CPL, CPA, CPI, RevShare, trial-to-subscription—across niches like eCom, iGaming, SaaS, and Fintech.",
    },
    {
      q: "What’s your fraud protection approach?",
      a: "Advanced bot detection, manual reviews, and affiliate scoring keep your campaigns clean.",
    },
    {
      q: "Do I need existing creatives to start?",
      a: "No—our team can build high-performing creatives for your campaign type.",
    },
    {
      q: "Is there a minimum ad spend?",
      a: "We tailor plans to your scale—reach out to explore what fits your budget.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-[#f5f8ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#183ec2] to-[#001e80] bg-clip-text text-transparent">
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
