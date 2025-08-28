// @ts-nocheck

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function PromoFaq() {
  const faqs = [
  {
    q: "What is Promotional A2P messaging?",
    a: "It’s business-to-user SMS meant for offers, ads, and alerts — not OTPs or transactions.",
  },
  {
    q: "Can I target specific regions or audiences?",
    a: "Yes, Swipe Messaging offers geo-targeting, device filters, and behavioral segmentation.",
  },
  {
    q: "Is this DLT compliant?",
    a: "Absolutely. We ensure all promotional routes follow TRAI’s DLT regulations.",
  },
  {
    q: "Can I integrate it with my CRM?",
    a: "Yes, we support plug-and-play integration with all major CRMs and marketing tools.",
  },
  {
    q: "What’s the delivery speed?",
    a: "Most messages are delivered within 5–15 seconds, optimized for scale.",
  },
  {
    q: "How do I track campaign performance?",
    a: "Get real-time dashboards with delivery, open, CTR, and CTA conversion metrics.",
  },
  {
    q: "Are there message templates available?",
    a: "Yes. Choose from dozens of pre-approved templates or create your own dynamically.",
  },
  {
    q: "Do you offer support for regional languages?",
    a: "Yes. You can send messages in Hindi, Tamil, Marathi, Telugu, and more.",
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
