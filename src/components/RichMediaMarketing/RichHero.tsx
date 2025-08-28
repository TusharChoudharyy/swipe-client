// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * RichMediaHero
 * - No external assets. No Lottie. No numbers.
 * - Animated gradient canvas + floating "rich media" cards (video, interactive banner, carousel, story)
 * - Subtle parallax tilt on the cluster
 * - Tailwind-only styles
 */

export default function RichMediaHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from("[data-hero-left]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      gsap.from(clusterRef.current, {
        y: 30,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%", once: true },
      });

      // Floating loops per card
      gsap.to("[data-float='a']", {
        y: -10,
        rotate: -2,
        repeat: -1,
        yoyo: true,
        duration: 2.6,
        ease: "sine.inOut",
      });
      gsap.to("[data-float='b']", {
        y: -12,
        rotate: 2,
        repeat: -1,
        yoyo: true,
        duration: 3.1,
        ease: "sine.inOut",
      });
      gsap.to("[data-float='c']", {
        y: -8,
        rotate: -1.6,
        repeat: -1,
        yoyo: true,
        duration: 2.2,
        ease: "sine.inOut",
      });
      gsap.to("[data-float='d']", {
        y: -14,
        rotate: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 3.4,
        ease: "sine.inOut",
      });

      // Slow hue shift on the gradient backdrop
      gsap.to("[data-hero-bg]", {
        filter: "hue-rotate(360deg)",
        repeat: -1,
        duration: 18,
        ease: "none",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Parallax tilt for card cluster
  useEffect(() => {
    if (!clusterRef.current) return;
    const el = clusterRef.current;

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, { rotateX: y * 6, rotateY: x * -6, transformPerspective: 700, duration: 0.3 });
    };
    const reset = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.5 });

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden"
    >
      {/* Animated gradient canvas */}
      <div
        data-hero-bg
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 10% 0%, #eaf2ff 0%, #f6f9ff 42%, #e6f0ff 70%)",
        }}
      />
      <div
        data-hero-bg
        className="pointer-events-none absolute -top-1/3 -left-1/3 w-[90vw] h-[90vh] opacity-50 blur-2xl"
        style={{
          background:
            "conic-gradient(from 120deg at 50% 50%, #7aa2ff, #8dd6ff, #b2f7ef, #ffd1a1, #7aa2ff)",
          maskImage: "radial-gradient(closest-side, black 70%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 70%, transparent 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: Copy */}
        <div data-hero-left>
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">
            Rich Media Marketing
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold ">
            Make Ads People Feel

            —Not Skip.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Interactive formats that move, react and invite action—without needing heavy assets.
            We handle motion, micro-interactions and polish so every placement turns into an
            experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#showcase"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.03] hover:bg-[#001e80] transition-all"
            >
              See It In Action
            </a>
            <a
              href="#brief"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2]/40 text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              Drop a Brief
            </a>
          </div>
        </div>

        {/* RIGHT: Floating rich-media cluster (no real assets) */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={clusterRef}
            className="relative w-[520px] h-[420px] perspective-1000"
          >
            {/* Video Card */}
            <Card className="absolute left-2 top-4 w-64 h-40 rotate-[-4deg]" float="a">
              <CardHeader label="Video" />
              <div className="flex-1 grid place-items-center">
                <div className="w-14 h-14 rounded-full bg-white/80 grid place-items-center shadow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#183ec2">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <ProgressBar />
            </Card>

            {/* Interactive Banner */}
            <Card className="absolute right-2 top-16 w-72 h-36 rotate-[3deg]" float="b">
              <CardHeader label="Interactive Banner" />
              <div className="px-3 pt-2">
                <Tag>Drag</Tag> <Tag>Hover</Tag> <Tag>Tap</Tag>
              </div>
              <div className="mx-3 mt-2 h-14 rounded-xl bg-gradient-to-r from-[#b1c6ff] to-[#8bd6ff] shadow-inner relative overflow-hidden">
                <div className="absolute inset-0 opacity-40"
                  style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,.2) 0 8px, transparent 8px 16px)" }} />
                <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 h-1.5 rounded-full bg-white/60" />
                <div className="absolute top-1/2 -translate-y-1/2 left-2 h-4 w-4 rounded-full bg-white shadow" />
              </div>
            </Card>

            {/* Carousel Ad */}
            <Card className="absolute left-10 bottom-6 w-[300px] h-44 rotate-[2deg]" float="c">
              <CardHeader label="Carousel" />
              <div className="flex gap-2 px-3 pt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex-1 h-24 rounded-xl bg-[linear-gradient(135deg,#e0e9ff,#c7d8ff)] relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-30"
                      style={{ background: "radial-gradient(600px 140px at -10% 0%, white, transparent)" }} />
                  </div>
                ))}
              </div>
              <Dots count={3} active={1} />
            </Card>

            {/* Story / Canvas */}
            <Card className="absolute right-6 bottom-2 w-40 h-64 rotate-[-3deg]" float="d">
              <CardHeader label="Story" />
              <div className="m-3 rounded-xl h-[180px] bg-[linear-gradient(135deg,#0b153a,#29408a)] relative overflow-hidden">
                <div className="absolute inset-0 opacity-40"
                  style={{ background: "radial-gradient(400px 200px at 80% 10%, #7aa2ff, transparent)" }} />
                <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/90 text-[10px] text-[#0b153a] font-semibold px-2 py-1 text-center shadow">
                  Swipe Up
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Divider hint for next section */}
      <div id="showcase" className="px-6 lg:px-12 pb-10">
        <div className="mx-auto max-w-7xl border-t border-[#183ec2]/15" />
      </div>
    </section>
  );
}

/* -------------------------
   Subcomponents
--------------------------*/

function Card({
  children,
  className = "",
  float,
}: {
  children: React.ReactNode;
  className?: string;
  float?: "a" | "b" | "c" | "d";
}) {
  return (
    <div
      data-float={float}
      className={`rounded-2xl border border-[#183ec2]/15 bg-white/90 backdrop-blur shadow-xl overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-b border-[#183ec2]/10 bg-[#f7faff]">
      <div className="text-[11px] font-semibold text-[#0b153a]">{label}</div>
      <div className="flex items-center gap-1">
        <Dot /> <Dot /> <Dot />
      </div>
    </div>
  );
}

function Dot() {
  return <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#c7d5ff]" />;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[10px] px-2 py-0.5 rounded-full border border-[#183ec2]/20 text-[#183ec2] bg-white/80">
      {children}
    </span>
  );
}

function ProgressBar() {
  return (
    <div className="px-3 pb-3">
      <div className="h-1.5 w-full rounded-full bg-[#eef2ff] overflow-hidden">
        <div className="h-full w-2/3 bg-[#183ec2]" />
      </div>
    </div>
  );
}

function Dots({ count, active }: { count: number; active: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`inline-block w-1.5 h-1.5 rounded-full ${i === active ? "bg-[#183ec2]" : "bg-[#c7d5ff]"
            }`}
        />
      ))}
    </div>
  );
}
