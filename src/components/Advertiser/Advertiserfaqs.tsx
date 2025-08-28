// @ts-nocheck
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'What is performance marketing for advertisers?',
    answer: 'It’s a results-driven model where you only pay for actions—like leads, installs, or sales.',
  },
  {
    question: 'How do you source affiliates?',
    answer: 'We onboard only vetted, high-performing affiliates across verticals and geos.',
  },
  {
    question: 'Can I track conversions in real-time?',
    answer: 'Yes, our dashboard gives live access to every metric that matters.',
  },
  {
    question: 'Do you offer campaign customization?',
    answer: 'Absolutely. From creative to funnels to targeting, everything is tailored to your goals.',
  },
  {
    question: 'What types of offers do you support?',
    answer: 'CPL, CPA, CPI, RevShare, trial-to-subscription—across niches like eCom, iGaming, SaaS, and Fintech.',
  },
  {
    question: 'What’s your fraud protection approach?',
    answer: 'Advanced bot detection, manual reviews, and affiliate scoring keep your campaigns clean.',
  },
  {
    question: 'Do I need existing creatives to start?',
    answer: 'No—our team can build high-performing creatives for your campaign type.',
  },
  {
    question: 'Is there a minimum ad spend?',
    answer: 'We tailor plans to your scale—reach out to explore what fits your budget.',
  },
]

const AdvertiserFaqs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full bg-[#f5f8ff] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
          FAQs
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border border-[#eaeefe] transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center text-[#183ec2] font-semibold text-lg"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-[#183ec2]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#183ec2]" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-6 pb-4 text-[#4c5472] text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdvertiserFaqs
