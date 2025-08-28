// @ts-nocheck
// src/components/ContactFAQ.jsx

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "We work on everything from branding and websites to full-scale marketing campaigns and product launches. Whether you're building from scratch or scaling, we’re your creative execution partner.",
  },
  {
    question: "How soon can we start working together?",
    answer:
      "Once we understand your goals, timelines, and scope, we typically kick off projects within 5–7 business days. Urgent timelines? Let us know — we’re flexible.",
  },
  {
    question: "Do you work with startups, or only large brands?",
    answer:
      "Both. We love working with emerging startups as much as established enterprises. If you’re driven and purpose-led, we’re in.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer project-based pricing with clear deliverables and timelines. For ongoing needs, monthly retainers are available. No hidden fees — ever.",
  },
  {
    question: "Can I book a free consultation call?",
    answer:
      "Absolutely. We offer a no-strings-attached 30-minute discovery call to understand your goals and suggest the best way forward.",
  },
  {
    question: "Do you sign NDAs or work with confidential ideas?",
    answer:
      "Yes. We treat every conversation as confidential, and we’re happy to sign an NDA before discussing any sensitive details.",
  },
  {
    question: "What if I don’t have a clear brief yet?",
    answer:
      "That’s totally fine. We’ll guide you through a strategic discovery process to help shape your vision into a concrete plan.",
  },
  {
    question: "What’s the usual turnaround time for a project?",
    answer:
      "It depends on the scope, but most projects take between 2–6 weeks. We’ll give you a detailed timeline during kickoff.",
  },
];

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Frequently Asked</h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Got questions? We've answered the ones we hear most. Still unsure? Reach out.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="font-medium text-base md:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-6 pb-5 pt-0 text-white/70 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/60">
            Didn’t find your answer?{" "}
            <a href="#contact" className="text-indigo-400 hover:underline">
              Drop us a message →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
