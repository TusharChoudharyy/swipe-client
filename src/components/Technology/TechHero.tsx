// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function TechnologyHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || !clusterRef.current) return;

    const ctx = gsap.context(() => {
      // Left content entrance
      gsap.from("[data-hero-left]", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      // Core glow pulse
      gsap.to("[data-core-glow]", {
        boxShadow: "0 0 90px 18px rgba(24,62,194,0.25)",
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        ease: "sine.inOut",
      });

      // Panels orbit in to circular positions
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");
      panels.forEach((el, i) => {
        const angle = (i / panels.length) * Math.PI * 2;
        const radius = 160; // distance from center
        const finalX = Math.cos(angle) * radius;
        const finalY = Math.sin(angle) * radius;

        gsap.fromTo(
          el,
          { x: finalX * 1.8, y: finalY * 1.8, opacity: 0, scale: 0.8, filter: "blur(6px)" },
          {
            x: finalX,
            y: finalY,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
            delay: 0.2 + i * 0.08,
            ease: "power3.out",
            scrollTrigger: { trigger: clusterRef.current, start: "top 70%", once: true },
          }
        );
      });

      // Parallax tilt
      const onMove = (e: MouseEvent) => {
        const r = clusterRef.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(clusterRef.current, {
          rotateX: y * 4,
          rotateY: x * -4,
          transformPerspective: 800,
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const onLeave = () =>
        gsap.to(clusterRef.current, { rotateX: 0, rotateY: 0, duration: 0.4, ease: "power2.out" });

      if (clusterRef.current) {
        clusterRef.current.addEventListener("mousemove", onMove);
        clusterRef.current.addEventListener("mouseleave", onLeave);
      }

      return () => {
        clusterRef.current?.removeEventListener("mousemove", onMove);
        clusterRef.current?.removeEventListener("mouseleave", onLeave);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div data-hero-left>
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">
            Technology
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold ">
            Build on a Solid <span className="whitespace-nowrap">Tech Core.</span>
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            A clean foundation that scales: unified data, dependable APIs, privacy-first security,
            and AI where it actually helps. Modern stack, no drama.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#stack"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.03] hover:bg-[#001e80] transition-all"
            >
              View the Stack
            </a>
            <a
              href="#approach"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2]/30 text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              Our Approach
            </a>
            <div className="flex items-center gap-2 text-[12px] text-[#0b153a] ml-1">
              <Chip>Privacy-First</Chip>
              <Chip>Composable</Chip>
              <Chip>Future-Ready</Chip>
            </div>
          </div>
        </div>

        {/* RIGHT: Core & Panels */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={clusterRef}
            className="relative w-[560px] max-w-full aspect-square rounded-[32px] border border-[#183ec2]/15 bg-white shadow-xl"
          >
            {/* CORE */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <HexCore />
            </div>

            {/* PANELS evenly spaced */}
            <Panel title="Data Layer" hint="Unified events, clean schemas, CDP-ready." />
            <Panel title="APIs" hint="Stable contracts, versioned, well-documented." />
            <Panel title="Security" hint="RBAC, audit trails, secrets rotation." />
            <Panel title="AI Assist" hint="Targeting, QA, ops—assistive, not magical." />
            <Panel title="Integrations" hint="Adtech, analytics, CRM—plug & play." />
            <Panel title="Scale" hint="Queueing, caching, autoscaling, observability." />
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========
   Bits
========= */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-[#183ec2]/20 bg-white/90 shadow-sm">
      {children}
    </span>
  );
}

function HexCore() {
  return (
    <div
      data-core-glow
      className="relative w-40 h-40"
      style={{
        clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#183ec2,#001e80)] rounded-[18px]" />
      <div className="absolute inset-[10%] bg-white/10 rounded-[14px] mix-blend-overlay" />
      <div className="absolute inset-0 ring-2 ring-white/30 rounded-[18px]" />
      <div className="absolute -inset-2 rounded-[22px] blur-xl bg-[#183ec2]/20" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-white font-semibold tracking-wide">TECH CORE</span>
      </div>
    </div>
  );
}

function Panel({ title, hint }: { title: string; hint: string }) {
  return (
    <div data-panel className="absolute left-1/2 top-1/2">
      <div className="group relative -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl bg-white border border-[#183ec2]/15 shadow-md px-4 py-3 hover:-translate-y-0.5 hover:shadow-lg transition-all">
          <div className="flex items-center gap-2">
            <Dot />
            <div className="text-sm font-semibold text-[#0b153a]">{title}</div>
          </div>
        </div>
        {/* Tooltip */}
        <div className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="whitespace-nowrap rounded-md bg-[#0b153a] text-white text-[11px] px-2 py-1 shadow">
            {hint}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#183ec2]" />;
}
