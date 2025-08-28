// @ts-nocheck
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaMarketing() {
  const rootRef = useRef<HTMLDivElement>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  /* -------- Entrance + Float Animations -------- */
  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-hero-left]", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      gsap.from("[data-stage]", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.1,
        scrollTrigger: { trigger: rootRef.current, start: "top 70%", once: true },
      });

      const items = gsap.utils.toArray<HTMLElement>("[data-float]");
      items.forEach((el, i) => {
        gsap.to(el, {
          x: `+=${gsap.utils.random(-14, 14)}`,
          y: `-=${gsap.utils.random(12, 18)}`,
          rotate: gsap.utils.random(-4, 4),
          duration: gsap.utils.random(3, 4.2),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.25,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  /* -------- Parallax Tilt -------- */
  useEffect(() => {
    if (!clusterRef.current) return;
    const el = clusterRef.current;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(el, { rotateX: y * 5, rotateY: x * -5, transformPerspective: 800, duration: 0.3 });
    };
    const onLeave = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.4 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section ref={rootRef} className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT COPY */}
        <div data-hero-left>
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">
            Social Media Marketing
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold ">
            Put Your Brand Center-Stage.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl leading-relaxed">
            Scroll-stopping campaigns that feel native, look premium, and deliver results.
            We design for attention, not just impressions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#concepts"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.03] hover:bg-[#001e80] transition-all"
            >
              See Concepts
            </a>
            <a
              href="#playbooks"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2]/30 text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              Our Playbooks
            </a>
            <div className="flex items-center gap-2 text-[12px] text-[#0b153a] ml-1">
              <Chip>Platform-Native</Chip>
              <Chip>Creative-Led</Chip>
              <Chip>Always-On</Chip>
            </div>
          </div>
        </div>

        {/* RIGHT CLUSTER */}
        <div data-stage className="flex justify-center lg:justify-end">
          <div
            ref={clusterRef}
            className="relative w-[520px] max-w-full aspect-[5/4] bg-white border border-[#183ec2]/15 rounded-3xl shadow-2xl p-6"
          >
            <MainPost />

            {/* Floating mini-posts */}
            <div data-float className="absolute -top-8 left-6 w-40 rotate-[-6deg]">
              <IgPost avatar="AN" name="Aether Now" imageTone="blue" caption="Drop goes live tonight." />
            </div>
            <div data-float className="absolute -bottom-6 left-12 w-44 rotate-[4deg]">
              <XPost handle="@orion_io" text="Giveaway loading… RT to enter." />
            </div>
            <div data-float className="absolute top-4 right-8 w-48 rotate-[6deg]">
              <LiPost name="Nova Systems" title="Launch recap & learnings" />
            </div>
            <div data-float className="absolute bottom-0 right-2 w-36 rotate-[-8deg]">
              <IgPost avatar="PL" name="Pulse Lab" imageTone="green" caption="POV: 6AM runners." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- SUBCOMPONENTS ----------------- */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-[#183ec2]/20 bg-white/90 shadow-sm">
      {children}
    </span>
  );
}

function MainPost() {
  return (
    <article className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-[#183ec2]/15 shadow-lg overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <Avatar text="AT" />
        <div className="flex-1">
          <div className="text-[13px] font-semibold text-[#0b153a]">Atlas Threads</div>
          <div className="text-[11px] text-gray-500">Sponsored • Now</div>
        </div>
        <span className="text-[11px] px-2 py-1 rounded-md bg-[#f6f9ff] text-[#183ec2]">New</span>
      </div>
      <div className="relative h-40 bg-gradient-to-br from-[#183ec2] to-[#001e80]">
        <svg viewBox="0 0 120 60" className="absolute inset-0 w-full h-full opacity-30">
          <circle cx="30" cy="30" r="18" fill="white" />
          <rect x="60" y="10" width="44" height="40" rx="8" fill="white" />
        </svg>
      </div>
      <div className="px-4 py-3">
        <div className="text-[14px] font-semibold text-[#0b153a]">
          Your moment, your move. Campaign goes live in 24h.
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Tag>#Announcement</Tag>
          <Tag>#Launch</Tag>
          <Tag>#MakeItCount</Tag>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="px-3 py-2 text-[12px] rounded-lg bg-[#183ec2] text-white font-semibold hover:opacity-95">
            Promote
          </button>
          <button className="px-3 py-2 text-[12px] rounded-lg border border-[#183ec2]/30 text-[#183ec2] hover:bg-[#183ec2]/5">
            Save Concept
          </button>
        </div>
      </div>
    </article>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2 py-1 text-[11px] rounded-md bg-[#f6f9ff] text-[#0b153a]">{children}</span>
  );
}

function Avatar({ text }: { text: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-[#183ec2] text-white grid place-items-center text-xs font-bold">
      {text}
    </div>
  );
}

function IgPost({ avatar, name, imageTone = "blue", caption }: { avatar: string; name: string; imageTone?: "blue" | "green"; caption: string }) {
  const tones: Record<string, string> = {
    blue: "from-[#8db3ff] to-[#dbe6ff]",
    green: "from-[#a7e3c2] to-[#e5f7ee]",
  };
  return (
    <div className="rounded-2xl bg-white border border-[#183ec2]/15 shadow-md overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2">
        <Avatar text={avatar} />
        <div className="text-[12px] font-semibold text-[#0b153a]">{name}</div>
      </div>
      <div className={`h-20 bg-gradient-to-br ${tones[imageTone]} relative`}>
        <div className="absolute inset-0 opacity-25">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            <circle cx="38" cy="40" r="16" fill="#0b153a" />
            <rect x="64" y="18" width="42" height="44" rx="8" fill="#0b153a" />
          </svg>
        </div>
      </div>
      <div className="px-3 py-2 text-[11px] text-[#0b153a]">{caption}</div>
    </div>
  );
}

function XPost({ handle, text }: { handle: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[#183ec2]/15 shadow-md p-3">
      <div className="text-[12px] font-semibold text-[#0b153a]">{handle}</div>
      <div className="mt-1 text-[12px] text-gray-700">{text}</div>
      <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-500">
        <span>❤</span>
        <span>↻</span>
        <span>💬</span>
      </div>
    </div>
  );
}

function LiPost({ name, title }: { name: string; title: string }) {
  return (
    <div className="rounded-2xl bg-white border border-[#183ec2]/15 shadow-md p-3">
      <div className="text-[12px] font-semibold text-[#0b153a]">{name}</div>
      <div className="mt-1 text-[12px] text-gray-700">{title}</div>
      <button className="mt-2 text-[11px] px-2 py-1 rounded-md border border-[#183ec2]/30 text-[#183ec2] hover:bg-[#183ec2]/5">
        Read
      </button>
    </div>
  );
}
