// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TransA2PFaq() {
  const faqs = [
  {
    q: "What are Transactional A2P Messages?",
    a: "Messages sent from applications to people that include time-sensitive information like OTPs, alerts, and confirmations.",
  },
  {
    q: "Is this compliant with DLT regulations in India?",
    a: "Yes, all templates and headers are DLT-verified for compliant delivery.",
  },
  {
    q: "How fast is delivery for OTP or alerts?",
    a: "Most messages are delivered globally within 1–2 seconds, even under scale.",
  },
  {
    q: "Can I integrate this with my CRM or marketing stack?",
    a: "Absolutely. We support APIs, Zapier, Make, and custom webhook integrations.",
  },
  {
    q: "Is there a setup fee or monthly minimum?",
    a: "No setup fee. Flexible plans available based on message volume.",
  },
  {
    q: "What’s the difference between promotional and transactional SMS?",
    a: "Promotional SMS are for marketing; transactional SMS are time-sensitive and informative, like OTPs and alerts.",
  },
  {
    q: "Do you offer analytics and reporting?",
    a: "Yes—real-time delivery status, engagement metrics, and log exports.",
  },
  {
    q: "What kind of support do you offer?",
    a: "24/7 expert human support with real-time escalation for delivery issues.",
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
