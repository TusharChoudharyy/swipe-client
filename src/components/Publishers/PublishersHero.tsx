// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PublisherHero() {
  const engineRef = useRef<HTMLDivElement>(null);
  const [kpis, setKpis] = useState({ ecpm: 8.23, fill: 97, revenue: 1230, requests: 120000 });

  useEffect(() => {
    if (!engineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-engine-core]", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "power1.inOut",
      });

      gsap.to("[data-engine-ring]", {
        rotate: 360,
        repeat: -1,
        duration: 15,
        ease: "linear",
        transformOrigin: "center center",
      });

      gsap.fromTo(
        "[data-arrow-in]",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, repeat: -1, yoyo: true, duration: 0.8, ease: "sine.inOut" }
      );

      gsap.fromTo(
        "[data-arrow-out]",
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, repeat: -1, yoyo: true, duration: 0.8, ease: "sine.inOut" }
      );
    }, engineRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setKpis((p) => ({
        ecpm: +(p.ecpm + Math.random() * 0.3 - 0.15).toFixed(2),
        fill: Math.min(100, Math.max(90, p.fill + Math.random() * 2 - 1)),
        revenue: p.revenue + Math.round(Math.random() * 20),
        requests: p.requests + Math.round(Math.random() * 500),
      }));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#f8fbff] to-[#e6f0ff] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold ">
            Your Revenue Engine, Fully Automated
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Optimize every impression, access premium demand, and get predictable earnings—without guesswork.
          </p>
          <div className="mt-8 flex gap-4">
            <a className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.05] transition-all">
              Start Monetizing
            </a>
            <a className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2] text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all">
              View Case Studies
            </a>
          </div>
        </div>

        {/* RIGHT — BOXED ENGINE */}
        <div ref={engineRef} className="relative w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
          {/* Engine */}
          <div className="relative flex justify-center items-center h-[300px]">
            <div data-arrow-in className="absolute left-0 top-1/2 -translate-y-1/2 text-xs text-[#183ec2]">
              ➡ Ad Requests
            </div>
            <div data-arrow-out className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-green-600">
              Revenue ➡
            </div>

            <div className="relative w-48 h-48">
              <div data-engine-ring className="absolute inset-0 rounded-full border-[6px] border-[#183ec2]/30" />
              <div data-engine-core className="absolute inset-8 rounded-full bg-[#183ec2] shadow-[0_0_25px_rgba(24,62,194,0.7)]" />

              {/* KPIs Around */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-center">
                <div className="text-xs text-gray-500">eCPM</div>
                <div className="font-semibold">${kpis.ecpm}</div>
              </div>
              <div className="absolute top-1/2 right-[-70px] -translate-y-1/2 text-center">
                <div className="text-xs text-gray-500">Fill Rate</div>
                <div className="font-semibold">{kpis.fill.toFixed(0)}%</div>
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center">
                <div className="text-xs text-gray-500">Today</div>
                <div className="font-semibold">${kpis.revenue}</div>
              </div>
            </div>
          </div>

          {/* Bottom KPIs */}
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div className="p-3 rounded-lg bg-[#f8fbff]">
              <div className="text-sm text-gray-500">Fill Rate</div>
              <div className="text-lg font-semibold">{kpis.fill.toFixed(1)}%</div>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fbff]">
              <div className="text-sm text-gray-500">eCPM (avg)</div>
              <div className="text-lg font-semibold">${kpis.ecpm}</div>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fbff]">
              <div className="text-sm text-gray-500">Requests</div>
              <div className="text-lg font-semibold">{(kpis.requests / 1000).toFixed(1)}k</div>
            </div>
          </div>

          {/* Earnings Highlight */}
          <div className="mt-4 text-center text-xl font-bold text-[#183ec2]">
            ${kpis.revenue} earned today
          </div>
        </div>
      </div>
    </section>
  );
}
