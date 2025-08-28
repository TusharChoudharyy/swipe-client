// @ts-nocheck
"use client";
// @ts-nocheck

import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MODELS = {
  CPA: {
    title: "Cost Per Acquisition (CPA)",
    tagline: "Pay only for confirmed actions like purchases or installs. Clean ROI, ideal for scale.",
    bullets: [
      "Performance-driven payouts",
      "Chargeback-safe tracking",
      "Best for revenue-focused goals",
    ],
    kpis: { avgPayout: "$18–$45", avgROI: "+72%", topGeos: ["US", "DE", "IN"] },
  },
  CPL: {
    title: "Cost Per Lead (CPL)",
    tagline: "Pay for qualified leads via forms, trials, or sign-ups. Great for pipeline growth.",
    bullets: [
      "Quality scoring & validation",
      "Geo + funnel stage targeting",
      "Best for B2B/B2C acquisition",
    ],
    kpis: { avgPayout: "$2–$12", avgROI: "+48%", topGeos: ["UK", "AE", "SG"] },
  },
  Hybrid: {
    title: "Hybrid (CPL + CPA)",
    tagline: "Blend lead + acquisition payouts to capture the full funnel while protecting ROI.",
    bullets: ["Balanced risk & reward", "Multi-event attribution", "Best for longer funnels"],
    kpis: { avgPayout: "$8–$25 + bonus", avgROI: "+61%", topGeos: ["US", "CA", "AU"] },
  },
} as const;

const nf = new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 });

export default function AffiliateModelsRefactored() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);

  const [tab, setTab] = useState<keyof typeof MODELS>("CPA");
  const [flowVisible, setFlowVisible] = useState(false);
  const [snapshot, setSnapshot] = useState({ topModel: "CPA", payout: 240000, affiliates: 1340 });

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-left]", { y: 24, opacity: 0, duration: 0.7, ease: "power2.out", scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true } });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => { if (!flowVisible) setFlowVisible(true); }, [tab]);
  useEffect(() => {
    if (!flowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-flow-wrap]", { y: 20, opacity: 0, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: flowRef.current, start: "top 80%", once: true } });
    }, flowRef);
    return () => ctx.revert();
  }, [flowVisible]);

  useEffect(() => {
    const id = setInterval(() => {
      setSnapshot((p) => ({
        topModel: ["CPA", "CPL", "Hybrid"][Math.floor(Math.random() * 3)],
        payout: p.payout + Math.round(Math.random() * 4000 + 1200),
        affiliates: p.affiliates + Math.round(Math.random() * 9),
      }));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const m = MODELS[tab];
  const topGeos = useMemo(() => m.kpis.topGeos.join(" • "), [m]);

  return (
    <section ref={rootRef} className="relative bg-[radial-gradient(circle_at_10%_0%,#f8fbff,60%,#e6f0ff)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div data-hero-left>
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">Affiliate Models</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold ">Flexible Models Built for Growth</h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">Choose CPA, CPL or Hybrid structures aligned to your KPIs. Track results in real time and scale across global markets with full transparency.</p>
          <div className="mt-8 inline-flex flex-wrap gap-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg" data-hero-cta>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.05] hover:bg-[#001e80] transition-all"
            >
              Book Strategy Call
            </a>
            <a
              href="#solutions"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2] text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              Explore Solutions
            </a>
          </div>
          </div>
          

          {/* SWITCHER MOVED TOP-RIGHT */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6 lg:p-8">
            <div className="inline-flex rounded-xl p-1 bg-white shadow border border-[#183ec2]/15">
              {Object.keys(MODELS).map((k) => (
                <button key={k} onClick={() => setTab(k as any)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${tab === (k as any) ? "bg-[#183ec2] text-white shadow" : "text-[#0b153a] hover:bg-[#183ec2]/10"}`}>{k}</button>
              ))}
            </div>

            <div ref={cardRef} className="mt-6">
              <h3 className="text-xl font-bold text-[#0b153a]">{m.title}</h3>
              <p className="mt-2 text-gray-700">{m.tagline}</p>
              <ul className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
                {m.bullets.map((b, i) => (<li key={i} className="flex items-center gap-2 bg-[#f6f9ff] rounded-lg px-3 py-2"><span className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" /> {b}</li>))}
              </ul>
              <div className="mt-5 grid sm:grid-cols-3 gap-4 text-center">
                <Kpi label="Avg Payout" value={m.kpis.avgPayout} />
                <Kpi label="Avg ROI" value={m.kpis.avgROI} />
                <Kpi label="Top Geos" value={topGeos} />
              </div>
            </div>
          </div>
        </div>

        {/* FLOW SECTION */}
        {flowVisible && (
          <div ref={flowRef} className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
            <div data-flow-wrap className="bg-white rounded-2xl shadow-xl border border-[#183ec2]/10 p-6">
              <h3 className="text-lg font-semibold text-[#0b153a]">How {tab} Flows</h3>
              <div className="mt-6">
                <div className="grid grid-cols-4 items-center gap-3">
                  <FlowNode title="Advertiser" subtitle="Budget & Goals" />
                  <FlowArrows />
                  <FlowNode title="Affiliate Network" subtitle="Tracking & Model" />
                  <FlowArrows />
                </div>
                <div className="grid grid-cols-4 items-center gap-3 mt-4">
                  <FlowNode title="Conversion" subtitle="Qualified Action" />
                  <FlowArrows />
                  <FlowNode title="Payout" subtitle={`${tab} settlement`} highlight />
                  <div />
                </div>
              </div>
            </div>

            {/* WHAT YOU GET + SNAPSHOT SIDE */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
                <div className="text-sm text-gray-500">What you get</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" /> Transparent payouts & settlement</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" /> Fraud protection & QA checks</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" /> Global geo coverage & tracking</li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
                <div className="text-sm text-gray-500">Live Snapshot</div>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <SnapTile label="Top Model" value={snapshot.topModel} />
                  <SnapTile label="Total Payout (MTD)" value={`$${nf.format(snapshot.payout)}`} />
                  <SnapTile label="Active Affiliates" value={nf.format(snapshot.affiliates)} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#f6f9ff] py-3">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-base font-bold text-[#0b153a]">{value}</div>
    </div>
  );
}

function FlowNode({ title, subtitle, highlight }: { title: string; subtitle: string; highlight?: boolean }) {
  return (
    <div data-node className={`rounded-2xl border p-4 text-center ${highlight ? "border-green-400/40 bg-green-50" : "border-[#183ec2]/15 bg-[#f8fbff]"}`}>
      <div className="text-sm font-semibold text-[#0b153a]">{title}</div>
      <div className="text-xs text-gray-600">{subtitle}</div>
    </div>
  );
}

function FlowArrows() {
  return (
    <div className="flex items-center justify-center gap-1">
      <span data-arrow className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" />
      <span data-arrow className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" />
      <span data-arrow className="w-1.5 h-1.5 rounded-full bg-[#183ec2]" />
    </div>
  );
}

function SnapTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-[#f6f9ff] px-3 py-2 text-center">
      <div className="text-[10px] text-gray-500">{label}</div>
      <div className="font-bold text-[#0b153a] text-sm mt-0.5">{value}</div>
    </div>
  );
}
