// @ts-nocheck
"use client";
// @ts-nocheck


import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

gsap.registerPlugin(ScrollTrigger);

const nf = new Intl.NumberFormat(undefined, { notation: "compact", maximumFractionDigits: 1 });

function rand(min = 0, max = 1) { return Math.random() * (max - min) + min; }
function makeSeries(points = 30, base = 1200) {
  const data: { i: number; v: number }[] = [];
  let acc = base + rand(-80, 80);
  for (let i = 0; i < points; i++) {
    acc += rand(-40, 55);
    if (acc < 0) acc = Math.abs(acc) + 20;
    data.push({ i, v: Math.round(acc) });
  }
  return data;
}

export default function HeroAdvertisers() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [series, setSeries] = useState(() => makeSeries());
  const [kpi, setKpi] = useState({ clicks: 0, conv: 0, ctr: 0, roas: 0 });
  const [notif, setNotif] = useState<null | { msg: string; id: number }>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: { trigger: rootRef.current, start: "top 70%", once: true },
      });
      tl.from("[data-hero-left]", { y: 24, opacity: 0, duration: 0.6 })
        .from("[data-hero-cta]", { y: 10, opacity: 0, duration: 0.4, stagger: 0.1 }, "<0.2")
        .from("[data-dash]", { y: 30, opacity: 0, duration: 0.7 }, "<")
        .from("[data-dash-card]", { y: 20, opacity: 0, duration: 0.4, stagger: 0.06 }, "<0.1");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSeries((prev) => {
        const next = [...prev.slice(1), { i: prev[prev.length - 1].i + 1, v: Math.max(40, prev[prev.length - 1].v + Math.round(rand(-30, 60))) }];
        return next;
      });
      setKpi((p) => {
        const clicks = p.clicks + Math.round(rand(15, 60));
        const convAdd = Math.random() < 0.6 ? 1 : 2;
        const conv = p.conv + convAdd;
        const ctr = Math.min(14.8, Math.max(1.2, (conv / Math.max(1, clicks)) * 100 * rand(0.9, 1.15)));
        const roas = Math.min(7.5, Math.max(1.1, p.roas + rand(0.01, 0.15)));
        return { clicks, conv, ctr, roas };
      });
      if (Math.random() < 0.4) {
        const options = [
          "+9 Conversions in last 5 min",
          "New Top Geo: DE now #2",
          "Publisher QA Passed • Brand Safe",
          "Fraud Blocked: 37 invalid clicks",
          "Bid Optimized on US • +12% CTR",
        ];
        setNotif({ msg: options[Math.floor(rand(0, options.length))], id: Date.now() });
        setTimeout(() => setNotif(null), 3000);
      }
    }, 1400);
    return () => clearInterval(id);
  }, []);

  const chartColor = "#183ec2";
  const kpis = useMemo(() => [
    { label: "Clicks", value: nf.format(kpi.clicks) },
    { label: "Conversions", value: nf.format(kpi.conv) },
    { label: "CTR", value: `${kpi.ctr.toFixed(1)}%` },
    { label: "ROAS", value: `${kpi.roas.toFixed(1)}x` },
  ], [kpi]);

  const topGeos = [
    { code: "US", val: "32%" },
    { code: "DE", val: "18%" },
    { code: "AE", val: "14%" },
    { code: "SG", val: "12%" },
    { code: "IN", val: "9%", you: true },
  ];

  const topPublishers = [
    { name: "Atlas Media", cr: "3.2%" },
    { name: "Nova Partners", cr: "2.9%" },
    { name: "Orbital DSP", cr: "2.4%" },
  ];

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_0%,#f8fbff,60%,#e6f0ff)]"
    >
      {/* WORLD MAP */}
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1920px-World_map_-_low_resolution.svg.png')] bg-cover bg-center grayscale" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT */}
        <div data-hero-left className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold ">
            Performance Marketing for International Scale
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Precision media buying, elite affiliate network, real-time tracking & fraud protection.
          </p>

          {/* CTA — white card behind */}
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

        {/* RIGHT: DASHBOARD */}
        <div data-dash className="relative z-10">
          <div className="relative rounded-3xl border border-[#183ec2]/20 bg-white/90 backdrop-blur p-5 lg:p-6 shadow-xl">
            
            {/* KPI row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {kpis.map((k) => (
                <div key={k.label} data-dash-card className="rounded-2xl border border-gray-200 bg-white p-3 hover:shadow-md transition-transform">
                  <div className="text-xs text-gray-500">{k.label}</div>
                  <div className="mt-1 text-xl font-semibold text-[#0b153a]">{k.value}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div data-dash-card className="mt-5 rounded-2xl border border-gray-200 bg-white p-3 h-40">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={series}>
                  <Line type="monotone" dataKey="v" dot={false} strokeWidth={2.5} stroke={chartColor} />
                  <Tooltip content={({ active, payload }) => active && payload?.length ? <div className="bg-white p-2 rounded shadow text-xs">Conversions: {payload[0].value}</div> : null} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Top Geos */}
            <div data-dash-card className="mt-5">
              <h4 className="font-semibold text-sm mb-2">Top Geos</h4>
              {topGeos.map((g) => (
                <div key={g.code} className="flex justify-between text-sm py-1 border-b last:border-0">
                  <span>{g.code}{g.you && " (You)"}</span>
                  <span className="font-medium">{g.val}</span>
                </div>
              ))}
            </div>

            {/* Top Publishers */}
            <div data-dash-card className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Top Publishers</h4>
              {topPublishers.map((p) => (
                <div key={p.name} className="flex justify-between text-sm py-1 border-b last:border-0">
                  <span>{p.name}</span>
                  <span className="font-medium">{p.cr}</span>
                </div>
              ))}
            </div>

            {/* Notification */}
            {notif && (
              <div key={notif.id} className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-full w-72 rounded-2xl border border-[#183ec2]/20 bg-white shadow-xl p-3 text-sm text-[#0b153a]">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#183ec2]" />
                  <span>{notif.msg}</span>
                </div>
              </div>
            )}

            {/* Floating Badges */}
            <div className="absolute -left-4 -top-4 animate-bounce"><Badge icon={<ShieldIcon />} text="Fraud Protection" /></div>
            <div className="absolute -right-4 top-1/3 animate-pulse"><Badge icon={<GlobeIcon />} text="Multi-Geo" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return <div className="select-none rounded-2xl border border-[#183ec2]/20 bg-white/90 backdrop-blur shadow-md px-3 py-2 text-xs font-medium text-[#0b153a] flex items-center gap-2"><span className="text-[#183ec2]">{icon}</span>{text}</div>;
}
function ShieldIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" stroke="currentColor" strokeWidth="1.6" /><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" /></svg>;
}
function GlobeIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" /><path d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-6-3.8-9S9.5 5.8 12 3z" stroke="currentColor" strokeWidth="1.6" /></svg>;
}
