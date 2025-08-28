// @ts-nocheck
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ---- DATA ----
const FEATURES = [
  { emoji: "🌐", title: "Global Offer Marketplace", desc: "Run campaigns across iGaming, eCom, Finance, SaaS & more." },
  { emoji: "🔗", title: "Custom Smartlinks", desc: "Auto-optimize traffic based on geo, device, and vertical." },
  { emoji: "💰", title: "Top Payouts. Always.", desc: "We negotiate the best CPA/CPL rates—so you earn more." },
  { emoji: "🎨", title: "Clean Creatives, Ready to Use", desc: "Banners, videos, landing pages—everything approved and compliant." },
  { emoji: "🛡️", title: "Fraud Protection, You’re Covered", desc: "We protect your traffic with real-time filters and anti-bot logic." },
  { emoji: "🤝", title: "Dedicated Publisher Managers", desc: "Strategic guidance from media buying experts, not ticket bots." },
  { emoji: "⚡", title: "Fast API/Pixel Integrations", desc: "Seamless data sync with your tracker or BI tool." },
  { emoji: "🔄", title: "Multi-Model Campaigns", desc: "Run RevShare, CPI, CPA, CPL, hybrid—your choice, your control." },
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
        <div ref={headingRef} className="max-w-2xl text-center mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why Publishers Choose Us
          </h2>
          <p className="mt-4  text-lg leading-relaxed">
            High-performance campaigns, fraud protection, smartlinks, and full-funnel optimization — everything an publisher needs to scale effectively.
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
