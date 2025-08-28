// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ADS = [
  { brand: "Atlas", tag: "Sponsored", title: "New drop. Ships worldwide.", cta: "Learn more" },
  { brand: "Nova", tag: "Sponsored", title: "Upgrade your stack in minutes.", cta: "Try now" },
  { brand: "Orion", tag: "Sponsored", title: "Premium plans with free trial.", cta: "Start free" },
  { brand: "Aether", tag: "Sponsored", title: "Save 30% on annual billing.", cta: "Redeem" },
  { brand: "Pulse", tag: "Sponsored", title: "Health tracking that just works.", cta: "Explore" },
  { brand: "Lumen", tag: "Sponsored", title: "Lighting, reimagined for homes.", cta: "Shop" },
  { brand: "Kite", tag: "Sponsored", title: "Faster code suggestions on-device.", cta: "Install" },
  { brand: "Zephyr", tag: "Sponsored", title: "Travel smarter, not harder.", cta: "Discover" },
];

export default function MediaBuyingHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const feedTrackRef = useRef<HTMLDivElement>(null);

  /* -------- Entrance Animations -------- */
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      tl.from("[data-hero-left]", { y: 24, opacity: 0, duration: 0.7 })
        .from("[data-hero-ctas] > *", { y: 10, opacity: 0, duration: 0.35, stagger: 0.08 }, "<0.2")
        .from(phoneRef.current, { y: 30, opacity: 0, filter: "blur(6px)", duration: 0.7 }, "<");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  /* -------- Auto-scroll Feed -------- */
  useEffect(() => {
    if (!feedTrackRef.current) return;

    const track = feedTrackRef.current;

    // Clone feed for seamless loop
    if (track.children.length === 1) {
      const clone = (track.firstElementChild as HTMLElement).cloneNode(true);
      track.appendChild(clone);
    }

    const content = track.firstElementChild as HTMLElement;
    const contentHeight = content.scrollHeight;
    const duration = Math.max(14, contentHeight / 36);

    const tween = gsap.to(track, {
      y: -contentHeight,
      ease: "none",
      duration,
      repeat: -1,
      modifiers: { y: (val) => `${parseFloat(val) % -contentHeight}px` }, // seamless
    });

    // Pause on hover
    const onEnter = () => tween.pause();
    const onLeave = () => tween.play();
    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  /* -------- Parallax Tilt on Mouse -------- */
  useEffect(() => {
    if (!phoneRef.current) return;
    const phone = phoneRef.current;

    const handleMove = (e: MouseEvent) => {
      const rect = phone.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(phone, { rotateX: y * 6, rotateY: x * -6, transformPerspective: 600, duration: 0.3 });
    };

    const reset = () => gsap.to(phone, { rotateX: 0, rotateY: 0, duration: 0.4 });
    phone.addEventListener("mousemove", handleMove);
    phone.addEventListener("mouseleave", reset);

    return () => {
      phone.removeEventListener("mousemove", handleMove);
      phone.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_0%,#f8fbff,65%,#e6f0ff)]"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(120%_120%_at_100%_0%,#e6f0ff_0%,#f8fbff_45%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div data-hero-left>
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">
            Media Buying
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold ">
            The Right Ad, <br className="hidden md:block" />
            At the Right Moment.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Cross-channel buying with crisp creative and tight controls—planned for reach, paced for
            performance, delivered brand-safe.
          </p>

          <div data-hero-ctas className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#plans"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.03] hover:bg-[#001e80] transition-all"
            >
              Plan With Us
            </a>
            <a
              href="#work"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2]/40 text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              See the Work
            </a>
            <div className="flex items-center gap-2 text-[12px] text-[#0b153a] ml-1">
              <Chip>Brand-Safe</Chip>
              <Chip>Global Inventory</Chip>
              <Chip>No Guesswork</Chip>
            </div>
          </div>
        </div>

        {/* RIGHT — Phone */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={phoneRef}
            className="relative w-[280px] h-[560px] bg-white rounded-[3rem] border border-[#183ec2]/20 shadow-xl"
          >
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-black/80 rounded-b-2xl" />

            {/* Screen */}
            <div className="absolute inset-4 rounded-[2rem] overflow-hidden bg-[linear-gradient(135deg,#0b153a_0%,#1f2a5a_100%)]">
              <div className="flex items-center justify-between px-4 py-3 text-[11px] text-white/80">
                <span className="font-semibold tracking-wide">Sponsored Ads</span>
                <span className="opacity-70">Live</span>
              </div>

              <div className="absolute inset-x-0 top-10 bottom-0">
                <div className="relative h-full overflow-hidden">
                  <div ref={feedTrackRef} className="absolute left-0 right-0 will-change-transform">
                    <FeedList />
                  </div>
                </div>
              </div>
            </div>

            {/* Side buttons */}
            <div className="absolute right-[-3px] top-24 w-1.5 h-16 rounded-l bg-[#c7d5ff]" />
            <div className="absolute left-[-3px] top-36 w-1.5 h-10 rounded-r bg-[#c7d5ff]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-[#183ec2]/20 bg-white/90 backdrop-blur shadow-sm">
      {children}
    </span>
  );
}

function FeedList() {
  return (
    <div className="px-3 pb-8">
      {ADS.map((a, i) => (
        <AdCard key={i} {...a} />
      ))}
    </div>
  );
}

function AdCard({ brand, tag, title, cta }: { brand: string; tag: string; title: string; cta: string }) {
  const initials = brand.slice(0, 2).toUpperCase();
  return (
    <div className="mb-3 rounded-2xl bg-white/95 backdrop-blur border border-[#183ec2]/15 shadow-sm p-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[#183ec2] text-white grid place-items-center text-xs font-bold">
          {initials}
        </div>
        <div className="flex-1">
          <div className="text-[11px] text-gray-500">{tag}</div>
          <div className="text-[13px] font-semibold text-[#0b153a] leading-snug">{brand}</div>
        </div>
        <button className="text-[11px] px-2 py-1 rounded-md border border-[#183ec2]/30 text-[#183ec2] hover:bg-[#183ec2]/5">
          {cta}
        </button>
      </div>
      <div className="mt-2 text-[12px] text-gray-700">{title}</div>
    </div>
  );
}
