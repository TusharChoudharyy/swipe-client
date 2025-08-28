// @ts-nocheck
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function TransactionalA2PHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current || !phoneRef.current) return;

    const ctx = gsap.context(() => {
      // Left copy entrance
      gsap.from("[data-hero-left]", {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 75%", once: true },
      });

      // Phone entrance + subtle float loop
      gsap.from(phoneRef.current, {
        y: 26,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 70%", once: true },
      });
      gsap.to(phoneRef.current, {
        y: "+=6",
        duration: 2.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });

      // Messages slide in one by one
      const tl = gsap.timeline({
        scrollTrigger: { trigger: phoneRef.current, start: "top 70%", once: true },
      });

      const msgs = gsap.utils.toArray<HTMLElement>("[data-msg]");
      msgs.forEach((el, i) => {
        tl.from(el, { y: 20, opacity: 0, duration: 0.45, ease: "power2.out" }, i === 0 ? 0 : "+=0.25");
        tl.add(() => driveStatus(el), "<0.05");
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT COPY */}
        <div data-hero-left>
          <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#183ec2] bg-[#183ec2]/10 px-3 py-1 rounded-full">
            Transactional A2P
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-[#0b153a] leading-tight">
            Messages Users <span className="whitespace-nowrap">Depend On.</span>
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            OTPs, payment updates, and service alerts—delivered fast, reliably, and at scale. Quiet
            when it should be, instant when it must be.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="px-7 py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow hover:scale-[1.03] hover:bg-[#001e80] transition-all"
            >
              Start Sending
            </a>
            <a
              href="#docs"
              className="px-7 py-3.5 rounded-xl border-2 border-[#183ec2]/30 text-[#183ec2] font-semibold hover:bg-[#183ec2]/5 transition-all"
            >
              API Docs
            </a>
            <div className="flex items-center gap-2 text-[12px] text-[#0b153a] ml-1">
              <Chip>Global Routes</Chip>
              <Chip>DND Safe</Chip>
              <Chip>99.9% Uptime</Chip>
            </div>
          </div>
        </div>

        {/* RIGHT: PHONE MOCKUP */}
        <div className="flex justify-center lg:justify-end">
          <div
            ref={phoneRef}
            className="relative w-[310px] h-[640px] rounded-[3rem] bg-white border border-[#183ec2]/20 shadow-[0_40px_80px_-20px_rgba(24,62,194,0.20)]"
          >
            {/* iOS notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-black/80 rounded-b-2xl" />

            {/* Screen */}
            <div className="absolute inset-4 rounded-[2rem] overflow-hidden bg-[#0b153a]">
              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-3 text-[11px] text-white/80">
                <span className="font-semibold tracking-wide">Messages</span>
                <span className="opacity-70">Now</span>
              </div>

              {/* Conversation area */}
              <div className="relative h-[calc(100%-44px)] bg-[linear-gradient(180deg,#0b153a,45%,#132055)]">
                <div className="absolute inset-0 overflow-hidden p-3 space-y-3">
                  {/* Brand header bubble */}
                  <SystemPill icon="🔒" text="Secure channel established" />

                  {/* Message 1: OTP */}
                  <Incoming
                    dataMsg
                    brand="YourApp"
                    title="Your OTP is 482913"
                    meta="Valid for 10 minutes. Do not share."
                    id="msg-otp"
                  />

                  {/* Message 2: Payment confirmation */}
                  <Incoming
                    dataMsg
                    brand="Acme Bank"
                    title="Payment of ₹2,499 succeeded"
                    meta="Txn ID: 9F3X2 • UPI"
                    id="msg-pay"
                  />

                  {/* Message 3: Service alert */}
                  <Incoming
                    dataMsg
                    brand="RideGo"
                    title="Your driver is arriving"
                    meta="ETA ~ 2 mins • Track link"
                    id="msg-alert"
                  />
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

/* ========== helpers & subcomponents ========== */

function driveStatus(container: HTMLElement) {
  const status = container.querySelector<HTMLElement>("[data-status]");
  if (!status) return;

  // Reset
  status.dataset.state = "sending";
  status.textContent = "Sending…";

  gsap.delayedCall(0.6, () => {
    status.dataset.state = "sent";
    status.textContent = "Sent";
  });
  gsap.delayedCall(1.2, () => {
    status.dataset.state = "delivered";
    status.textContent = "Delivered";
  });
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-full border border-[#183ec2]/20 bg-white/90 shadow-sm">
      {children}
    </span>
  );
}

function SystemPill({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="mx-auto w-fit px-3 py-1 rounded-full bg-white/10 text-white/80 text-[11px] flex items-center gap-1">
      <span className="opacity-90">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Incoming({
  brand,
  title,
  meta,
  id,
  dataMsg,
}: {
  brand: string;
  title: string;
  meta: string;
  id?: string;
  dataMsg?: boolean;
}) {
  return (
    <div id={id} data-msg={dataMsg ? "" : undefined} className="flex items-start gap-2">
      <Avatar text={brand.slice(0, 2).toUpperCase()} />
      <div className="max-w-[78%]">
        <div className="rounded-2xl rounded-tl-sm bg-white text-[#0b153a] px-3 py-2 shadow-sm">
          <div className="text-[12px] font-semibold">{brand}</div>
          <div className="text-[13px] mt-0.5">{title}</div>
          <div className="text-[11px] text-gray-500 mt-1">{meta}</div>
          <Status />
        </div>
      </div>
    </div>
  );
}

function Avatar({ text }: { text: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-[#183ec2] text-white grid place-items-center text-[11px] font-bold mt-1 shrink-0">
      {text}
    </div>
  );
}

function Status() {
  return (
    <div className="mt-1.5 flex items-center gap-1 text-[10px]">
      <Tick />
      <span
        data-status
        data-state="sending"
        className="text-gray-500 [transition:color_.2s]"
      >
        Sending…
      </span>
    </div>
  );
}

function Tick() {
  // Single SVG whose fill changes with data-state on the sibling span
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="w-3 h-3 mr-0.5"
      style={{ minWidth: 12, minHeight: 12 }}
    >
      <path
        d="M9.5 16.2 5.8 12.5l-1.3 1.3 5 5 10-10-1.3-1.3z"
        className="fill-gray-400"
      />
    </svg>
  );
}
