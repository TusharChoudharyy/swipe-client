// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SMMFaq() {
  const faqs = [
    {
      q: "What platforms do you run campaigns on?",
      a: "Meta (Facebook & Instagram), TikTok, Snap, LinkedIn, Twitter, and more.",
    },
    {
      q: "How does Swipe’s affiliate network work?",
      a: "We onboard vetted affiliates tailored to your niche and campaign goals, tracking performance via secure attribution layers.",
    },
    {
      q: "Is media buying included in the service?",
      a: "Yes. We handle end-to-end media buying, optimization, and spend management.",
    },
    {
      q: "How are results measured?",
      a: "Using first-party and third-party tools, we track conversions, ROI, LTV, and more.",
    },
    {
      q: "What is your pricing model?",
      a: "Custom, based on campaign size—CPA, CPL, or hybrid. We focus on performance alignment.",
    },
    {
      q: "Can you run UGC/influencer campaigns too?",
      a: "Absolutely. Our affiliate stack includes vetted UGC creators and micro/macro influencers.",
    },
    {
      q: "Do you offer creatives as well?",
      a: "Yes. We design, test, and iterate creatives optimized for click-throughs and conversions.",
    },
    {
      q: "How fast can we go live?",
      a: "Onboarding to launch typically takes 3–7 days, depending on campaign complexity.",
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
