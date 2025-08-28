// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Verificationfaq() {
  const faqs = [
    {
      q: "What is A2P messaging?",
      a: "A2P (Application-to-Person) messaging allows businesses to send messages like OTPs, alerts, and updates to users.",
    },
    {
      q: "Can I send messages internationally?",
      a: "Yes, we support global message routing with compliance for 190+ countries.",
    },
    {
      q: "Is this suitable for high-volume campaigns?",
      a: "Absolutely. Our infrastructure is built for scale, supporting millions of messages daily.",
    },
    {
      q: "What happens if a message fails?",
      a: "We use auto-fallbacks via alternative carriers or channels like voice, email, or WhatsApp.",
    },
    {
      q: "Is this compliant with Indian DLT and global laws?",
      a: "Yes. Swipe Messaging is DLT-registered and compliant with global SMS laws.",
    },
    {
      q: "How fast is the delivery?",
      a: "Average latency is under 1 second globally, optimized per region.",
    },
    {
      q: "Do you support custom sender IDs?",
      a: "Yes, you can register custom sender IDs based on your brand or industry.",
    },
    {
      q: "What analytics do I get access to?",
      a: "Delivery status, latency reports, failed message logs, device breakdown, and conversion stats.",
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
