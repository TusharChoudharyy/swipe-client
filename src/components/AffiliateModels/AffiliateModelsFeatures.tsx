// @ts-nocheck
"use client";
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ---- DATA ----
const FEATURES = [
  { emoji: "💰", title: "CPA & CPL Expertise", desc: "Performance-based payouts tied directly to conversions, not impressions." },
  { emoji: "📱", title: "CPI for Mobile Growth", desc: "Drive app installs and user activations through compliant, global mobile inventory." },
  { emoji: "🔗", title: "RevShare & Hybrid Models", desc: "Flexible commission structures with long-term monetization potential." },
  { emoji: "⚡", title: "End-to-End Funnel Optimization", desc: "From creatives to final sale—we optimize every step of the journey." },
  { emoji: "🌍", title: "Multi-Geo Traffic Enablement", desc: "Localize affiliate offers across tier-1 and emerging markets." },
  { emoji: "🤖", title: "Predictive Performance Scaling", desc: "Leverage AI signals to auto-optimize traffic sources and conversion paths." },
  { emoji: "🛡️", title: "Integrated Fraud Protection", desc: "Track leads with integrity using bot filters, click scoring, and postback verification." },
  { emoji: "🔌", title: "Plug-and-Play Integrations", desc: "Compatible with major trackers, CRMs, and affiliate platforms." },
];

export default function AffiliateModelsFeatures() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const bgPulseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power3.out" } });

    const T0 = 0.0; 
    const T1 = 1.6;
    const T2 = 3.2;
    const T3 = 4.8;
    const T4 = 6.4;
    const T5 = 7.9;

    const cards = cardsWrapRef.current?.querySelectorAll(".feature-card") ?? [];
    const rows = cardsWrapRef.current?.querySelectorAll(".feature-row") ?? [];

    gsap.set(bgPulseRef.current, { scale: 0.95, opacity: 0.35 });
    gsap.set(headingRef.current, { y: 24, opacity: 0 });
    gsap.set(cards, { y: 32, opacity: 0, rotate: -0.3, scale: 0.98, transformOrigin: "50% 60%" });
    gsap.set(ctaRef.current, { y: 16, opacity: 0, scale: 0.96 });

    tl.to(bgPulseRef.current, { scale: 1, opacity: 0.5, duration: 0.8, immediateRender: false }, T0);
    tl.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, immediateRender: false }, T0 + 0.15);

    rows.forEach((row, rIdx) => {
      const rowCards = row.querySelectorAll(".feature-card");
      tl.to(
        rowCards,
        { y: 0, opacity: 1, rotate: 0, scale: 1, duration: 0.8, stagger: 0.08, immediateRender: false },
        T1 + rIdx * 0.12
      );
    });

    cards.forEach((c, i) => {
      tl.to(
        c,
        { filter: "brightness(1.15) saturate(1.05)", scale: 1.015, boxShadow: "0 12px 28px rgba(24,62,194,0.12)", duration: 0.25, immediateRender: false },
        T2 + i * 0.08
      ).to(
        c,
        { filter: "brightness(1.0) saturate(1.0)", scale: 1, boxShadow: "0 8px 20px rgba(24,62,194,0.08)", duration: 0.25, immediateRender: false },
        T2 + i * 0.08 + 0.25
      );
    });

    tl.to(ctaRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.5, immediateRender: false }, T3);
    tl.to(ctaRef.current, { scale: 1.035, boxShadow: "0 10px 32px rgba(24,62,194,0.25)", duration: 0.35, yoyo: true, repeat: 1, immediateRender: false }, T3 + 0.05);

    tl.to(bgPulseRef.current, { scale: 1.02, opacity: 0.45, duration: T5 - T4, ease: "sine.inOut", yoyo: true, repeat: 1, immediateRender: false }, T4);
    tl.to(cards, { y: (i) => (i % 2 === 0 ? -3 : -1), duration: 1.6, ease: "sine.inOut", yoyo: true, repeat: 1, immediateRender: false }, T4 + 0.1);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white overflow-hidden" aria-label="Affiliate Models">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={bgPulseRef}
          className="absolute left-1/2 top-[-12rem] -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-50"
          style={{
            background: "radial-gradient(closest-side, rgba(24,62,194,0.16), rgba(160,196,255,0.08) 45%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,62,194,0.05),transparent_40%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(24,62,194,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,62,194,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Header */}
        <div ref={headingRef} className="max-w-2xl text-center mx-auto">
          <p className="uppercase tracking-[0.16em] text-sm text-[#183ec2]/70 mb-3">Why Advertisers Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-extrabold ">
            Affiliate Models Built to Perform
          </h2>
          <p className="mt-4  text-lg leading-relaxed">
            Smarter payouts, fraud protection, AI-driven scaling, and full-funnel optimization — all in one stack.
          </p>
          <button
            ref={ctaRef}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-[#183ec2] text-white font-semibold shadow-[0_8px_18px_rgba(24,62,194,0.25)] hover:bg-[#0f2f97] transition"
          >
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" className="-mr-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div ref={cardsWrapRef} className="mt-12 md:mt-16 grid gap-6 md:gap-7">
          <div className="feature-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {FEATURES.slice(0, 4).map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
          <div className="feature-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
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
