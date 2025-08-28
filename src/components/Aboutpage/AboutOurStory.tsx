// @ts-nocheck
// src/components/AboutOurStory.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const storyData = [
  {
    year: "2015",
    title: "Founded with a Vision",
    desc: "Started with one goal — to simplify brand communication through secure, scalable messaging solutions.",
  },
  {
    year: "2018",
    title: "Performance Joins the Game",
    desc: "Expanded into performance marketing — blending data, creativity, and media buying for measurable ROI.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    desc: "Delivered campaigns across 50+ countries, ensuring compliance-first delivery for enterprise clients.",
  },
  {
    year: "2023",
    title: "Engineering Impact",
    desc: "Today, we unite messaging + performance to drive growth for global brands at scale.",
  },
];

export default function AboutOurStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".story-step");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // ✅ FIX: total width ke hisaab se scroll end
        end: () => "+=" + container.offsetWidth * (sections.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden bg-gradient-to-r from-[#f9fafb] to-[#ffffff]"
    >
      {/* Section Heading */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Our Story
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
          From secure messaging to performance-driven marketing, here’s how we
          evolved into a global growth partner.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="flex w-[400%] h-full relative">
        {/* Center Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-blue-500 to-indigo-400 z-0" />

        {storyData.map((item, i) => (
          <div
            key={i}
            className="story-step relative w-screen h-full flex flex-col items-center justify-center p-10 text-center z-10"
          >
            {/* Dot on Timeline */}
            <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg mb-6" />

            <h2 className="text-5xl font-bold text-blue-600">{item.year}</h2>
            <h3 className="text-2xl mt-4 font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="max-w-2xl text-gray-600 text-lg mt-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
