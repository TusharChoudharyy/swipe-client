// @ts-nocheck
"use client";
// @ts-nocheck

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// ---- DATA (replace with yours if needed) ----
const BENEFITS = [
  { emoji: "🌍", title: "Affiliate Network Access", desc: "Connect with top-performing global affiliates across niches." },
  { emoji: "🎯", title: "Real-Time Bidding Control", desc: "Leverage precision targeting across DSPs, SSPs, and native ad networks." },
  { emoji: "📡", title: "Multi-Channel Strategy", desc: "From social to native to programmatic — all synced and optimized." },
  { emoji: "🛡️", title: "Fraud Shield Technology", desc: "Cut through click fraud and invalid traffic with layered protection." },
  { emoji: "🔍", title: "Conversion Funnel Intelligence", desc: "Monitor full-funnel insights from click to conversion." },
  { emoji: "🏆", title: "Tier-1 Publisher Deals", desc: "Exclusive media placements with premium inventory access." },
  { emoji: "⏱️", title: "24/7 Campaign Surveillance", desc: "Round-the-clock optimization to reduce CPA and maximize LTV." },
  { emoji: "📊", title: "Integrated Attribution Stack", desc: "Unified analytics from first-click to last conversion." },
];

// ---- SECTION ----
export default function AdvertiserBenefits() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsWrapRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLButtonElement | null>(null);
  const bgPulseRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      repeat: -1, // loop forever (as in the video)
      defaults: { ease: "power3.out" },
    });

    // Video timing: total 7.9s @ 30fps ≈ 237 frames.
    // Cue points (you can fine-tune, but these are mapped to the 6 keyframes we’d sampled):
    const T0 = 0.0;  // 0.0s   - intro glow & heading rise
    const T1 = 1.6;  // 1.6s   - card grid slides in (stagger)
    const T2 = 3.2;  // 3.2s   - focus sweep across cards (spotlight)
    const T3 = 4.8;  // 4.8s   - CTA emphasis
    const T4 = 6.4;  // 6.4s   - idle float (micro-motion)
    const T5 = 7.9;  // 7.9s   - loop

    // ELEMENT QUERIES
    const cards = cardsWrapRef.current?.querySelectorAll(".benefit-card") ?? [];
    const rows = cardsWrapRef.current?.querySelectorAll(".benefit-row") ?? [];

    // Reset states
    gsap.set(bgPulseRef.current, { scale: 0.95, opacity: 0.35 });
    gsap.set(headingRef.current, { y: 24, opacity: 0 });
    gsap.set(cards, { y: 32, opacity: 0, rotate: -0.3, scale: 0.98, transformOrigin: "50% 60%" });
    gsap.set(ctaRef.current, { y: 16, opacity: 0, scale: 0.96 });

    // ---- T0: Intro glow + heading rise ----
   // ---- FIX: add immediateRender: false to looping tweens ----
tl.to(bgPulseRef.current, { scale: 1, opacity: 0.5, duration: 0.8, immediateRender: false }, T0);
tl.to(headingRef.current, { y: 0, opacity: 1, duration: 0.7, immediateRender: false }, T0 + 0.15);

rows.forEach((row, rIdx) => {
  const rowCards = row.querySelectorAll(".benefit-card");
  tl.to(
    rowCards,
    {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.08,
      immediateRender: false,
    },
    T1 + rIdx * 0.12
  );
});

cards.forEach((c, i) => {
  tl.to(
    c,
    {
      filter: "brightness(1.15) saturate(1.05)",
      scale: 1.015,
      boxShadow: "0 12px 28px rgba(24,62,194,0.12)",
      duration: 0.25,
      immediateRender: false,
    },
    T2 + i * 0.08
  ).to(
    c,
    {
      filter: "brightness(1.0) saturate(1.0)",
      scale: 1,
      boxShadow: "0 8px 20px rgba(24,62,194,0.08)",
      duration: 0.25,
      immediateRender: false,
    },
    T2 + i * 0.08 + 0.25
  );
});

tl.to(ctaRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.5, immediateRender: false }, T3);
tl.to(ctaRef.current, { scale: 1.035, boxShadow: "0 10px 32px rgba(24,62,194,0.25)", duration: 0.35, yoyo: true, repeat: 1, immediateRender: false }, T3 + 0.05);

tl.to(bgPulseRef.current, { scale: 1.02, opacity: 0.45, duration: T5 - T4, ease: "sine.inOut", yoyo: true, repeat: 1, immediateRender: false }, T4);
tl.to(
  cards,
  {
    y: (i) => (i % 2 === 0 ? -3 : -1),
    duration: 1.6,
    ease: "sine.inOut",
    yoyo: true,
    repeat: 1,
    immediateRender: false,
  },
  T4 + 0.1
);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      aria-label="Advertiser Benefits"
    >
      {/* BACKGROUND: soft gradient + grid + pulse */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={bgPulseRef}
          className="absolute left-1/2 top-[-12rem] -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(24,62,194,0.16), rgba(160,196,255,0.08) 45%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,62,194,0.05),transparent_40%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(24,62,194,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(24,62,194,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
      </div>

      <div className="relative z-[1] max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* HEADER SIDE */}
        <div ref={headingRef} className="max-w-2xl">
          <p className="uppercase tracking-[0.16em] text-sm text-[#183ec2]/70 mb-3">
            Advertiser Benefits
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold ">
            Performance Marketing, Engineered for Scale
          </h2>
          <p className="mt-4  text-lg leading-relaxed">
            Everything you need to scale smartly—precision targeting, fraud protection, and unified attribution—brought together in one high-performing stack.
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

        {/* GRID SIDE */}
        <div
          ref={cardsWrapRef}
          className="mt-12 md:mt-16 grid gap-6 md:gap-7"
        >
          {/* Two rows on desktop; will stack to 1 col on mobile */}
          <div className="benefit-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {BENEFITS.slice(0, 4).map((b, i) => (
              <BenefitCard key={b.title} {...b} index={i} />
            ))}
          </div>
          <div className="benefit-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {BENEFITS.slice(4, 8).map((b, i) => (
              <BenefitCard key={b.title} {...b} index={i + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- CARD ----
function BenefitCard({
  emoji,
  title,
  desc,
  index,
}: {
  emoji: string;
  title: string;
  desc: string;
  index: number;
}) {
  return (
    <div
      className="benefit-card group relative rounded-3xl border border-[#183ec2]/10 bg-white p-6 md:p-7 shadow-[0_6px_16px_rgba(24,62,194,0.06)] hover:shadow-[0_14px_34px_rgba(24,62,194,0.14)] transition-transform duration-400 will-change-transform"
      style={{
        // slight alternating tilt/offset to match polished “designed” look
        transform: index % 2 === 0 ? "translateY(4px) rotate(-0.25deg)" : "translateY(0px) rotate(0.15deg)",
      }}
    >
      <div className="text-4xl md:text-5xl mb-3 md:mb-4 select-none">{emoji}</div>
      <h3 className="text-lg md:text-xl font-bold text-[#0b1f7a]">{title}</h3>
      <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed text-[#183ec2]/80">{desc}</p>

      {/* subtle gradient line on hover */}
      <div className="absolute left-6 right-6 -bottom-[1px] h-[2px] bg-gradient-to-r from-[#a0c4ff] via-[#183ec2] to-[#a0c4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
}
