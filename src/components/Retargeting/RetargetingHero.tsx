// @ts-nocheck
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * Retargeting – Full Page
 * - Theme: clean white/blue (#183ec2), subtle gradients, light micro-interactions
 * - No chart libs; minimal inline SVG for sparkline and uplift bars
 */

const nf = new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 });

export default function RetargetingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroAnimRef = useRef<HTMLDivElement>(null);

  // Live snapshot state
  const [stats, setStats] = useState(() => ({
    visitors: 120000,
    engaged: 32000,
    clicked: 8200,
    converted: 2100,
    beforeCR: 1.2,  // % before retargeting
    afterCR: 2.1,   // % after retargeting
  }));

  // Sparkline (clicks trend)
  const [series, setSeries] = useState<number[]>(
    Array.from({ length: 28 }, (_, i) => 700 + i * 10 + Math.random() * 120)
  );

  /* -------------------------------------------
     Entrance & Scroll Animations
  --------------------------------------------*/
  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-left]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      gsap.from("[data-card]", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: { trigger: "[data-features]", start: "top 80%", once: true },
      });

      gsap.from("[data-live]", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-live]", start: "top 80%", once: true },
      });

      gsap.from("[data-proof]", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: "[data-proof]", start: "top 85%", once: true },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  /* -------------------------------------------
     Hero Loop Animation (visitor leaves → returns)
  --------------------------------------------*/
  useEffect(() => {
    if (!heroAnimRef.current) return;
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "power1.inOut" } });

    // Elements
    const person = heroAnimRef.current.querySelector("[data-person]");
    const ad = heroAnimRef.current.querySelector("[data-ad]");
    const site = heroAnimRef.current.querySelector("[data-site]");
    const check = heroAnimRef.current.querySelector("[data-check]");

    tl.set([ad, site, check], { opacity: 0, scale: 0.9 });

    tl.to(person, { x: 80, duration: 0.8 })
      .to(ad, { opacity: 1, scale: 1, duration: 0.4 }, "<")
      .to(person, { x: 0, duration: 0.9 })
      .to(site, { opacity: 1, scale: 1, duration: 0.4 }, "<0.2")
      .to(check, { opacity: 1, scale: 1, duration: 0.3 })
      .to({}, { duration: 0.8 }) // pause
      .to([ad, site, check], { opacity: 0, scale: 0.9, duration: 0.3 })
      .set(person, { x: -40 })
      .to(person, { x: 0, duration: 0.6 });

    return () => tl.kill();
  }, []);

  /* -------------------------------------------
     Live updates (every 2.2s)
  --------------------------------------------*/
  useEffect(() => {
    const id = setInterval(() => {
      setStats((p) => {
        const deltaVisitors = Math.round(2000 + Math.random() * 3500);
        const deltaEngaged = Math.round(0.25 * deltaVisitors);
        const deltaClicked = Math.round(0.24 * deltaEngaged);
        const deltaConverted = Math.round(0.25 * deltaClicked);

        // nudge conversion rates slightly
        const nextBefore = clamp(p.beforeCR + (Math.random() * 0.2 - 0.1), 0.8, 1.6);
        const nextAfter = clamp(p.afterCR + (Math.random() * 0.25 - 0.12), 1.8, 2.6);

        return {
          visitors: p.visitors + deltaVisitors,
          engaged: p.engaged + deltaEngaged,
          clicked: p.clicked + deltaClicked,
          converted: p.converted + deltaConverted,
          beforeCR: +nextBefore.toFixed(1),
          afterCR: +nextAfter.toFixed(1),
        };
      });

      setSeries((prev) => {
        const nextVal = (prev[prev.length - 1] || 900) + (Math.random() * 140 - 40);
        const clamped = Math.max(400, nextVal);
        return [...prev.slice(1), clamped];
      });
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const uplift = useMemo(
    () => Math.max(0, (stats.afterCR - stats.beforeCR)),
    [stats.beforeCR, stats.afterCR]
  );

  const sparkPath = useMemo(() => buildSparkPath(series, 240, 56), [series]);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_0%,#f8fbff,65%,#e6f0ff)]"
    >
      {/* Decorative background wash on right */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(120%_120%_at_100%_0%,#e6f0ff_0%,#f8fbff_45%,transparent_70%)]" />

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10 grid lg:grid-cols-2 gap-12 items-center">
        <div data-hero-left>
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">
            Retargeting
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold ">
            Turn Lost Visitors into Loyal Customers
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Re-engage high-intent audiences across channels with tailored creatives and precise timing.
            Bring them back when it matters most—then convert.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 max-w-xl">
            <HeroBullet>Cross-device & cross-channel reach</HeroBullet>
            <HeroBullet>Behavior & stage-based segments</HeroBullet>
            <HeroBullet>Dynamic creatives & sequencing</HeroBullet>
            <HeroBullet>Brand-safe, privacy-compliant</HeroBullet>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#live"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.03] hover:bg-[#001e80] transition-all"
            >
              See Live Impact
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2]/40 text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              Book Strategy Call
            </a>
          </div>
        </div>

        {/* Hero visual (loop) */}
        <div ref={heroAnimRef} className="relative h-[340px] flex items-center justify-center">
          <div className="relative w-[360px] h-[220px] rounded-2xl bg-white/90 backdrop-blur border border-[#183ec2]/15 shadow-xl p-5">
            {/* Site (return area) */}
            <div
              data-site
              className="absolute right-5 top-5 text-[11px] text-[#0b153a] bg-[#f6f9ff] border border-[#183ec2]/15 rounded-lg px-2 py-1 opacity-0"
            >
              Your Site
            </div>
            {/* Ad (reminder) */}
            <div
              data-ad
              className="absolute left-5 bottom-5 text-[11px] text-[#183ec2] bg-white border border-[#183ec2]/25 rounded-lg px-2 py-1 opacity-0"
            >
              Reminder Ad
            </div>
            {/* Person dot */}
            <div
              data-person
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#183ec2] shadow"
            />
            {/* Check (conversion) */}
            <div
              data-check
              className="absolute right-6 bottom-6 text-[12px] text-green-600 font-semibold opacity-0"
            >
              • Converted
            </div>

            {/* Caption row */}
            <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[11px] text-gray-500">
              <span>Leaves</span>
              <span>Gets Ad</span>
              <span>Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      {/* <div data-features className="max-w-7xl mx-auto px-6 lg:px-12 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard title="Cross-Channel Precision" desc="Retarget on display, social, search & native with unified frequency and pacing." />
          <FeatureCard title="Behavior-Based Audiences" desc="Segment by viewed pages, carts, time on site, and funnel stage for relevance." />
          <FeatureCard title="Dynamic Creatives" desc="Serve creatives mapped to journey stage: reminders, offers, urgency." />
          <FeatureCard title="Conversion Optimization" desc="Smart bids & caps to maximize ROI while protecting brand safety." />
        </div>
      </div> */}

      {/* LIVE SNAPSHOT */}
      <div id="live" data-live className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Funnel */}
          <div className="rounded-2xl bg-white/90 backdrop-blur border border-[#183ec2]/15 shadow-xl p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#0b153a]">Retargeting Funnel (Live)</h3>
              <span className="text-xs text-gray-500">Auto-updates</span>
            </div>

            <div className="mt-6 grid gap-4">
              <FunnelRow label="Visitors" value={stats.visitors} tone="base" />
              <FunnelRow label="Engaged" value={stats.engaged} tone="blue" />
              <FunnelRow label="Clicked" value={stats.clicked} tone="indigo" />
              <FunnelRow label="Converted" value={stats.converted} tone="green" terminal />
            </div>

            {/* Trend */}
            <div className="mt-6 rounded-xl border border-[#183ec2]/15 bg-[#f6f9ff] p-3">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Clicks Trend</span>
                <span>Last 28 updates</span>
              </div>
              <svg viewBox="0 0 240 56" className="w-full h-14">
                <path d={sparkPath} fill="none" stroke="#183ec2" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Right: Uplift + KPIs */}
          <div className="rounded-2xl bg-white/90 backdrop-blur border border-[#183ec2]/15 shadow-xl p-6">
            <h3 className="text-lg font-semibold text-[#0b153a]">Before vs After Retargeting</h3>

            <div className="mt-4 grid sm:grid-cols-2 gap-6">
              <UpliftBar label="Conversion Rate" before={stats.beforeCR} after={stats.afterCR} unit="%" />
              <KpiPanel
                items={[
                  { label: "Recovered Revenue (MTD)", value: `$${nf.format(stats.converted * 45)}` },
                  { label: "Audience Size (30d)", value: nf.format(stats.visitors * 1.3) },
                  { label: "Avg. Frequency", value: "3.2" },
                ]}
              />
            </div>

            <div className="mt-6 text-sm text-gray-600">
              Uplift: <span className="font-semibold text-[#0b153a]">+{uplift.toFixed(1)} pp</span> in conversion rate after applying retargeting sequences.
            </div>
          </div>
        </div>
      </div>

      {/* PROOF */}
      <div data-proof className="max-w-7xl mx-auto px-6 lg:px-12 pb-14">
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-[#183ec2]/15 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-[#0b153a]">
              <div className="text-sm text-gray-500">Why it works</div>
              <div className="text-xl font-bold">Avg. +41% more conversions vs. non-retargeted traffic</div>
            </div>
            <div className="flex items-center gap-6 opacity-70">
              <Logo name="Meta" />
              <Logo name="Google Ads" />
              <Logo name="The Trade Desk" />
              <Logo name="TikTok" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      {/* <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-20">
        <div className="text-center rounded-2xl bg-[#183ec2] text-white py-10 px-6 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold">Stop losing customers. Start winning them back.</h3>
          <p className="mt-2 text-white/80">
            We’ll map your audiences, creatives, and pacing to maximize return—fast.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block px-8 py-3.5 rounded-xl bg-white text-[#183ec2] font-semibold shadow hover:scale-[1.03] transition-all"
            >
              Schedule a Strategy Call
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}

/* =========================
   Small Components
========================= */

function HeroBullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 bg-white/90 border border-[#183ec2]/15 rounded-lg px-3 py-2">
      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-[#183ec2]" />
      <span className="text-sm text-[#0b153a]">{children}</span>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      data-card
      className="rounded-2xl bg-white border border-[#183ec2]/15 shadow-sm p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="text-base font-semibold text-[#0b153a]">{title}</div>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function FunnelRow({
  label,
  value,
  tone,
  terminal,
}: {
  label: string;
  value: number;
  tone: "base" | "blue" | "indigo" | "green";
  terminal?: boolean;
}) {
  const palette: Record<typeof tone, string> = {
    base: "#cfdaf8",
    blue: "#9fb3ff",
    indigo: "#7d95ff",
    green: "#8fd3a8",
  } as any;

  const widthPct = (() => {
    // normalize relative to visitors for a simple visualization
    // this function expects rows to be rendered in order
    // a conservative width range to stay readable
    // NOTE: caller should pass real values in descending order
    return Math.max(14, Math.min(100, Math.round((value / (value + 1)) * 100)));
  })();

  return (
    <div className="grid grid-cols-[120px_1fr_auto] gap-3 items-center">
      <div className="text-sm text-[#0b153a]">{label}</div>
      <div className="h-3 rounded-full bg-[#f1f5ff] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${widthPct}%`, backgroundColor: palette[tone] }}
        />
      </div>
      <div className={`text-sm ${terminal ? "text-green-700 font-semibold" : "text-gray-700"}`}>
        {nf.format(value)}
      </div>
    </div>
  );
}

function UpliftBar({
  label,
  before,
  after,
  unit = "%",
}: {
  label: string;
  before: number;
  after: number;
  unit?: string;
}) {
  const max = Math.max(3, after + 0.4);
  const toWidth = (v: number) => `${Math.max(6, Math.min(100, (v / max) * 100))}%`;
  return (
    <div className="rounded-xl border border-[#183ec2]/15 p-4">
      <div className="text-sm font-semibold text-[#0b153a]">{label}</div>
      <div className="mt-3 space-y-2">
        <BarRow label="Before" width={toWidth(before)} tone="#cfdaf8" value={before} unit={unit} />
        <BarRow label="After" width={toWidth(after)} tone="#7d95ff" value={after} unit={unit} bold />
      </div>
    </div>
  );
}

function BarRow({
  label,
  width,
  tone,
  value,
  unit,
  bold,
}: {
  label: string;
  width: string;
  tone: string;
  value: number;
  unit: string;
  bold?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
        <span>{label}</span>
        <span className={bold ? "text-[#0b153a] font-semibold" : ""}>
          {value.toFixed(1)}
          {unit}
        </span>
      </div>
      <div className="h-3 rounded-full bg-[#f1f5ff] overflow-hidden">
        <div className="h-full rounded-full" style={{ width, backgroundColor: tone }} />
      </div>
    </div>
  );
}

function KpiPanel({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="rounded-xl border border-[#183ec2]/15 p-4 grid gap-3">
      {items.map((it, i) => (
        <div key={i} className="grid grid-cols-[1fr_auto] gap-3 items-center">
          <div className="text-xs text-gray-500">{it.label}</div>
          <div className="text-sm font-semibold text-[#0b153a]">{it.value}</div>
        </div>
      ))}
    </div>
  );
}

function Logo({ name }: { name: string }) {
  return (
    <div className="px-3 py-1 rounded-md border border-[#183ec2]/15 bg-white/70 text-[11px] text-[#0b153a]">
      {name}
    </div>
  );
}

/* =========================
   Utils
========================= */

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function buildSparkPath(series: number[], w: number, h: number) {
  if (!series.length) return "";
  const min = Math.min(...series);
  const max = Math.max(...series);
  const span = Math.max(1, max - min);
  const step = w / Math.max(1, series.length - 1);
  const pts = series.map((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / span) * h;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return `M ${pts.join(" L ")}`;
}
