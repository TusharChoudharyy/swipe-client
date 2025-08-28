// @ts-nocheck
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function WAfaq() {
const faqs = [
  {
    q: "What’s the difference between personal and WhatsApp Business API?",
    a: "The API allows bulk, automated messaging with compliance and verified sender profiles—ideal for brands.",
  },
  {
    q: "Can I integrate WhatsApp with my CRM or affiliate system?",
    a: "Yes. Swipe supports integrations via webhooks, APIs, and third-party tools like Zapier or custom connectors.",
  },
  {
    q: "How do I get opt-ins from users?",
    a: "You can use click-to-chat ads, embedded buttons, lead forms, or scan-based QR opt-in journeys.",
  },
  {
    q: "What kind of campaigns work best?",
    a: "High-conversion flows like welcome messages, cart reminders, lead qualification, and reactivation sequences.",
  },
  {
    q: "Is this solution GDPR and TCPA compliant?",
    a: "Yes, Swipe provides opt-in management tools and consent-tracking mechanisms to ensure compliance.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is based on conversation volume and region. Reach out for a custom quote.",
  },
  {
    q: "Can I send media (videos, images, PDFs)?",
    a: "Absolutely. Rich media enhances engagement and conversions within message flows.",
  },
  {
    q: "What if I need customer support or onboarding help?",
    a: "Every Swipe client gets a dedicated success manager for onboarding, training, and scaling strategy.",
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
