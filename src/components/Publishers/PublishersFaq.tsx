// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PublishersFaq() {
  const faqs = [
    {
      q: "How do I join the Swipe publisher network?",
      a: "Just fill out our signup form—we’ll review and approve you quickly.",
    },
    {
      q: "What verticals can I promote?",
      a: "We offer campaigns in iGaming, eCom, Finance, SaaS, and more.",
    },
    {
      q: "What tracking methods do you support?",
      a: "Postbacks, pixels, APIs, and custom solutions are fully supported.",
    },
    {
      q: "How soon do I get paid?",
      a: "We offer weekly and even instant payouts based on performance.",
    },
    {
      q: "Is there a minimum traffic requirement?",
      a: "We prefer quality over quantity. Apply and let’s assess your traffic fit.",
    },
    {
      q: "What kind of creatives do you provide?",
      a: "Fully approved banners, LPs, videos, and even localized content.",
    },
    {
      q: "Can I use Smartlinks?",
      a: "Yes—use Smartlinks for auto-routing to top-performing offers by geo/device.",
    },
    {
      q: "Will I have a dedicated account manager?",
      a: "Absolutely. All publishers get a performance manager to help grow revenue.",
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
