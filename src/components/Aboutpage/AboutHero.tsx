// @ts-nocheck
// src/components/AboutHero.jsx
import { useState, useEffect } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip"; // <- same component jaha pehle use kiya tha

const typingPhrases = [
  "Driving Measurable Growth for Industry Leaders.",
  "Powering Performance Marketing at Global Scale.",
  "Trusted Partner for Sustainable Business Growth.",
];

// Dummy data for tooltip (replace with logos or team later)
const people = [
  {
    id: 1,
    name: "The Body Shop",
    designation: "Global Client",
    image: "/logos/bodyshop.png",
  },
  {
    id: 2,
    name: "Cloudways",
    designation: "Cloud Solutions",
    image: "/logos/cloudways.png",
  },
  {
    id: 3,
    name: "Ajio",
    designation: "Fashion Retail",
    image: "/logos/ajio.jpg",
  },
  {
    id: 4,
    name: "AirAsia",
    designation: "Aviation",
    image: "/logos/airaisa.png",
  },
];

const AboutHero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    if (charIndex < currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentPhrase[charIndex]);
        setCharIndex(charIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setPhraseIndex((phraseIndex + 1) % typingPhrases.length);
      }, 2000);
    }
  }, [charIndex, phraseIndex]);

  return (
    <section className="bg-gradient-to-r from-white via-blue-50 to-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight min-h-[120px] mb-6 text-gray-900">
            {text}
            <span className="animate-pulse text-blue-600">|</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            For over a decade, we’ve partnered with global enterprises and 
            fast-growing startups to unlock measurable growth. Our expertise in 
            performance marketing and data-driven strategies ensures that every 
            campaign drives real ROI and long-term impact.
          </p>

          <div className="flex gap-4 mb-6">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-medium text-sm transition"
            >
              Let’s Work Together →
            </a>
            <a
              href="#story"
              className="border border-gray-300 hover:border-blue-500 hover:text-blue-600 px-6 py-3 rounded-full font-medium text-sm transition"
            >
              Know Our Story
            </a>
          </div>

          {/* Animated Tooltip (replacing stats box) */}
          <div className="flex items-center gap-4 mt-8">
            <AnimatedTooltip items={people} />
            <span className="text-gray-500 text-base font-medium whitespace-nowrap">
              ...and many more
            </span>
          </div>
        </div>

        {/* Right Illustration / Lottie */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/about-illustration.png"
            alt="About Us"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
