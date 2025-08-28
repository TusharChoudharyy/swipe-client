// @ts-nocheck
"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------
   CONFIG
--------------------------------------------*/
const BUBBLES = [
  "Performance Marketing",
  "Affiliate Network",
  "Media Buying",
  "Influencer Ops",
  "Analytics & Attribution",
  "Creative Strategy",
  "CRO & Landing Pages",
  "Global Compliance",
];

const CHAT_MESSAGES = [
  { from: "them", text: "Hey! We want to scale campaigns globally." },
  { from: "us", text: "Awesome! We specialize in high-performance growth." },
  { from: "them", text: "Do you also handle influencer ops?" },
  { from: "us", text: "Yep — end-to-end ops with real attribution." },
  { from: "them", text: "Great. Let’s start this week." },
  { from: "us", text: "Perfect. Sending a tailored plan today." },
];

type Props = {
  videoUrl?: string;
  imageUrl?: string;
};

export default function HeroPhonePro({ videoUrl, imageUrl }: Props) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const bubblesWrapRef = useRef<HTMLDivElement>(null);
  const chatWrapRef = useRef<HTMLDivElement>(null);

  const [shownBubbles, setShownBubbles] = useState(0);
  const [chatIndex, setChatIndex] = useState(0);

  /* -------------------------------------------
     Scroll-in animation
  --------------------------------------------*/
  useEffect(() => {
    if (!phoneRef.current || !screenRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: phoneRef.current, start: "top 75%", once: true },
      });

      tl.fromTo(
        phoneRef.current,
        { y: 30, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0)", duration: 0.8, ease: "power2.out" }
      )
        .to(phoneRef.current, {
          keyframes: [
            { rotate: -2, x: -2, duration: 0.05 },
            { rotate: 2, x: 2, duration: 0.05 },
            { rotate: -2, x: -2, duration: 0.05 },
            { rotate: 0, x: 0, duration: 0.05 },
          ],
          repeat: 2,
          ease: "power1.inOut",
        })
        .to(screenRef.current, {
          background: "linear-gradient(135deg,#183ec2,#5a8dee)",
          duration: 0.45,
          yoyo: true,
          repeat: 1,
          ease: "power1.out",
        });
    });
    return () => ctx.revert();
  }, []);

  /* -------------------------------------------
     Chat loop
  --------------------------------------------*/
  useEffect(() => {
    if (videoUrl) return;
    const timer = window.setInterval(
      () => setChatIndex((prev) => (prev + 1) % CHAT_MESSAGES.length),
      2400
    );
    return () => clearInterval(timer);
  }, [videoUrl]);

  useEffect(() => {
    if (!chatWrapRef.current || videoUrl) return;
    const el = chatWrapRef.current.querySelectorAll(".chat-row");
    if (!el.length) return;
    const target = el[el.length - 1] as HTMLElement;
    gsap.fromTo(
      target,
      { y: 8, opacity: 0, filter: "blur(6px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }
    );
  }, [chatIndex, videoUrl]);

  /* -------------------------------------------
     Stagger bubbles
  --------------------------------------------*/
  useEffect(() => {
    for (let i = 0; i < BUBBLES.length; i++) {
      setTimeout(
        () => setShownBubbles((p) => Math.min(p + 1, BUBBLES.length)),
        250 + i * 180
      );
    }
  }, []);

  return (
    <section className="bg-[radial-gradient(circle_at_top_left,#f8fbff,#e6f0ff,#cfe0ff)] py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-12">
        {/* LEFT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Book a Call. <br className="hidden sm:block" /> Let the Results Ring.
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
            Tap the phone to see how our services pop into action—performance marketing
            that actually rings!
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow-lg hover:bg-[#001e80] transition-all">
              Request Demo
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 border-[#183ec2]/40 text-[#183ec2] hover:bg-[#183ec2]/5 transition-all">
              Explore Platform
            </button>
          </div>
        </div>

        {/* RIGHT — PHONE + BUBBLES */}
        <div className="relative flex justify-center items-center h-[420px] sm:h-[500px] lg:h-[560px]">
          <div ref={bubblesWrapRef} className="absolute inset-0 z-0 pointer-events-none">
            <ServiceBubbles shown={shownBubbles} />
          </div>

          <div
            ref={phoneRef}
            className="relative z-10 w-[220px] sm:w-[250px] lg:w-[280px] h-[420px] sm:h-[500px] lg:h-[560px] bg-white rounded-[2.5rem] lg:rounded-[3rem] border border-[#183ec2]/20 shadow-lg cursor-pointer will-change-transform"
          >
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 lg:w-32 h-5 sm:h-6 bg-black/80 rounded-b-2xl" />
            <div
              ref={screenRef}
              className="absolute inset-3 sm:inset-4 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0b153a] overflow-hidden"
            >
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : imageUrl ? (
                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <ChatUI chatIndex={chatIndex} refEl={chatWrapRef} />
              )}
            </div>
            <div className="absolute right-[-3px] top-20 sm:top-24 w-1.5 h-12 sm:h-16 rounded-l bg-[#c7d5ff]" />
            <div className="absolute left-[-3px] top-28 sm:top-36 w-1.5 h-8 sm:h-10 rounded-r bg-[#c7d5ff]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------
   Chat UI
--------------------------------------------*/
function ChatUI({
  refEl,
  chatIndex,
}: {
  refEl: React.MutableRefObject<HTMLDivElement | null>;
  chatIndex: number;
}) {
  const visible = CHAT_MESSAGES.slice(0, chatIndex + 1);
  return (
    <div
      ref={refEl as any}
      className="w-full h-full p-3 sm:p-4 flex flex-col gap-2 sm:gap-3 justify-end"
      style={{ backfaceVisibility: "hidden" }}
    >
      {visible.map((m, i) => (
        <div
          key={i}
          className={`chat-row max-w-[75%] sm:max-w-[80%] px-3 py-2 rounded-2xl text-xs sm:text-sm leading-snug ${
            m.from === "us"
              ? "self-end bg-[#183ec2] text-white rounded-br-sm"
              : "self-start bg-white/90 text-[#183ec2] rounded-bl-sm"
          }`}
        >
          {m.text}
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------
   Service Bubbles
--------------------------------------------*/
function ServiceBubbles({ shown }: { shown: number }) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      if (i < shown) {
        gsap.fromTo(
          el,
          { autoAlpha: 0, scale: 0.8, y: 20 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: i * 0.12,
          }
        );
      } else {
        gsap.to(el, { autoAlpha: 0, scale: 0.8, duration: 0.3, ease: "power2.inOut" });
      }
    });
  }, [shown]);

  return (
    <div className="absolute inset-0 hidden sm:flex flex-col justify-center gap-3 sm:gap-4 pointer-events-none">
      {BUBBLES.slice(0, shown).map((txt, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className={`relative max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg border border-[#183ec2]/30 bg-white text-[#183ec2] rounded-2xl ${
              isLeft ? "self-start ml-[-5%] sm:ml-[-10%]" : "self-end mr-[-2%]"
            }`}
          >
            <span
              className={`absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] sm:border-y-[6px] border-y-transparent ${
                isLeft
                  ? "right-[-6px] sm:right-[-8px] border-l-[6px] sm:border-l-[8px] border-l-white"
                  : "left-[-6px] sm:left-[-8px] border-r-[6px] sm:border-r-[8px] border-r-white"
              }`}
            ></span>
            {txt}
          </div>
        );
      })}
    </div>
  );
}

