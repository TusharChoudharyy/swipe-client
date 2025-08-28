// @ts-nocheck
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ---- DATA ----
const FEATURES = [
  { emoji: "🛍️", title: "Dynamic Product Feed Ads", desc: "Auto generate creatives based on user browse history." },
  { emoji: "📧", title: "Cross Channel Sequencing", desc: "Email, display, social & native in one cohesive flow." },
  { emoji: "⏱️", title: "Frequency Capping Controls", desc: "Prevent ad fatigue with smart delivery limits." },
  { emoji: "🌍", title: "Geo + Device Retargeting", desc: "Customize messaging by region, device, and time zone." },
  { emoji: "🛒", title: "Cart Abandonment Triggers", desc: "Instantly re engage users who left checkout." },
  { emoji: "👥", title: "Look alike Expansion", desc: "Find new prospects that mirror your highest value visitors." },
  { emoji: "🤖", title: "AI Powered Bid Management", desc: "Auto tune bids for maximum ROAS and CPA targets." },
  { emoji: "📊", title: "Attribution & Reporting", desc: "Unified dashboards track from review to repurchase." },
];

export default function PublishersFeatures() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = cardsWrapRef.current?.querySelectorAll(".feature-card") ?? [];

    gsap.set(headingRef.current, { y: 24, opacity: 0 });
    gsap.set(cards, { y: 32, opacity: 0, rotate: -0.3, scale: 0.98, transformOrigin: "50% 60%" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, immediateRender: false }, 0);

    cards.forEach((c, i) => {
      tl.to(
        c,
        { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 0.8, stagger: 0.08, immediateRender: false },
        0.2 + i * 0.08
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white overflow-hidden py-20 px-6" aria-label="Advertiser Features">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div ref={headingRef} className="max-w-4xl text-center mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
            Why Rich Media Marketing Works
          </h2>
          <p className="text-lg md:text-xl  leading-relaxed">
            Maximize conversions with personalized messaging, frequency capping, geo + device targeting, and cart abandonment triggers—everything your campaigns need to re-engage users effectively.
          </p>
        </div>

        {/* Grid */}
        <div ref={cardsWrapRef} className="grid gap-6 md:gap-7">
          <div className="feature-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {FEATURES.slice(0, 4).map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
          <div className="feature-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 mt-6">
            {FEATURES.slice(4, 8).map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ emoji, title, desc, index }: { emoji: string; title: string; desc: string; index: number }) {
  return (
    <div
      className="feature-card group relative rounded-3xl border border-[#183ec2]/10 bg-white p-6 md:p-7 shadow-[0_6px_16px_rgba(24,62,194,0.06)] hover:shadow-[0_14px_34px_rgba(24,62,194,0.14)] transition-transform duration-400 will-change-transform"
      style={{
        transform: index % 2 === 0 ? "translateY(4px) rotate(-0.25deg)" : "translateY(0px) rotate(0.15deg)",
      }}
    >
      <div className="text-4xl md:text-5xl mb-3 md:mb-4 select-none">{emoji}</div>
      <h3 className="text-lg md:text-xl font-bold text-[#0b1f7a]">{title}</h3>
      <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-[#183ec2]/80">{desc}</p>
      <div className="absolute left-6 right-6 -bottom-[1px] h-[2px] bg-gradient-to-r from-[#a0c4ff] via-[#183ec2] to-[#a0c4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
