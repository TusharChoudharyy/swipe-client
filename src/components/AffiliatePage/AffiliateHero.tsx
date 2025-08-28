// @ts-nocheck
// HeroAffiliateMarketing.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroAffiliateMarketing = () => {
  const titleRef = useRef([]);
  const descRef = useRef(null);

  useEffect(() => {
    gsap.set(titleRef.current, { y: 60, opacity: 0 });
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.fromTo(
      descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power2.out" }
    );
  }, []);

  const words = "Unlock the Power of Affiliate Marketing".split(" ");

  return (
    <section className="relative w-full min-h-[90vh] px-6 md:px-16 bg-[#FFE0C1] overflow-hidden flex items-center justify-between">
      {/* Left Content */}
      <div className="z-10 max-w-xl pt-24 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0B0B0F] leading-tight flex flex-wrap gap-x-2">
          {words.map((word, i) => (
            <span
              key={i}
              ref={(el) => (titleRef.current[i] = el)}
              className="inline-block"
            >
              {word}
            </span>
          ))}
        </h1>
        <p
          ref={descRef}
          className="mt-6 text-lg md:text-xl text-[#3A2C1B] max-w-md"
        >
          Build trusted partnerships, pay only for performance, and scale smarter with Swipe Media’s Affiliate strategies.
        </p>
      </div>

      {/* Right Side Image/Decor */}
      <div className="hidden md:flex absolute top-1/2 right-12 transform -translate-y-1/2 w-[360px] h-[360px]">
        <div className="w-full h-full bg-[#FF8C42] rounded-3xl shadow-2xl rotate-[8deg] scale-105" />
      </div>

      {/* Abstract blurred bento circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#FF6600]/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF914D]/30 rounded-full blur-[60px]" />
    </section>
  );
};

export default HeroAffiliateMarketing;
