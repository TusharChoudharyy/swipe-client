// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ---------- Message Components ----------
const RichMessage = ({ title, subtitle, image, actions }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-indigo-50 border border-indigo-100 rounded-2xl p-3 max-w-[92%]"
  >
    <img src={image} alt={title} className="rounded-lg w-full mb-2 object-cover" />
    <div className="font-semibold text-slate-900">{title}</div>
    <div className="text-sm text-slate-500 mt-1">{subtitle}</div>
    <div className="mt-3 flex gap-2 flex-wrap">
      {actions.map((a, idx) => (
        <button
          key={idx}
          className="px-3 py-1 rounded-md text-sm bg-blue-600 text-white hover:scale-[1.03] transition"
        >
          {a}
        </button>
      ))}
    </div>
  </motion.div>
);

const UserMessage = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    className="ml-auto max-w-[75%] bg-slate-200 text-slate-900 p-3 rounded-2xl"
  >
    {text}
  </motion.div>
);

const InfoMessage = ({ text }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-[78%] bg-slate-50 border border-slate-100 p-3 rounded-2xl"
  >
    {text}
  </motion.div>
);

const CarouselMessage = ({ items }) => {
  const scrollRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-full"
    >
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 scrollbar-none"
      >
        {items.map((it, idx) => (
          <div
            key={idx}
            className="min-w-[220px] snap-center bg-white border rounded-2xl p-3 shadow-sm flex-shrink-0"
          >
            <img src={it.img} className="rounded-md mb-2 object-cover" />
            <div className="font-medium text-sm">{it.title}</div>
            <div className="text-xs text-slate-400">{it.price}</div>
            <div className="mt-3">
              <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:scale-[1.03] transition">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ---------- Main Component ----------
export default function RCSDemoHero() {
  const chatAreaRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sequence = [
    {
      kind: "rich",
      title: "🎉 Limited Time: 20% OFF",
      subtitle: "Smartwatch Series 9 — new colors available",
      image: "https://via.placeholder.com/520x280.png?text=Smartwatch+Series+9",
      actions: ["Buy Now", "Details"],
    },
    { kind: "user", text: "Show me red variants" },
    {
      kind: "carousel",
      items: [
        { title: "Leather Wallet", price: "₹899", img: "https://via.placeholder.com/320x180?text=Wallet" },
        { title: "Canvas Bag", price: "₹1,199", img: "https://via.placeholder.com/320x180?text=Bag" },
        { title: "Classic Watch", price: "₹2,499", img: "https://via.placeholder.com/320x180?text=Watch" },
      ],
    },
    { kind: "info", text: "Your OTP is 348201 (valid 10 min)" },
  ];

  useEffect(() => {
    let i = 0;
    function runSequence() {
      if (i >= sequence.length) return;
      const item = sequence[i];
      setMessages((prev) => [...prev, item]);
      i++;
      setTimeout(runSequence, 1400 + Math.random() * 1200);
    }
    setTimeout(runSequence, 700);
  }, []);

  useEffect(() => {
    if (chatAreaRef.current) chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { kind: "user", text: inputValue }]);
    setInputValue("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { kind: "info", text: "Nice choice — check the carousel for red variants." }]);
    }, 900);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-10 items-center">
      {/* LEFT */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Upgrade SMS to <span className="text-blue-600">RCS — Rich, Branded & Actionable</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Deliver interactive conversations — images, carousels, quick actions and verified business profiles — directly inside the user's native messaging app.
        </p>

        {/* Mini demo cards
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-sm font-medium text-slate-900">Order Update</div>
            <div className="text-xs text-slate-500 mt-1">Your package is on the way! Track instantly.</div>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-sm font-medium text-slate-900">Promotional Offer</div>
            <div className="text-xs text-slate-500 mt-1">Get 20% off your next order 🎁</div>
          </div>
        </div> */}

        {/* feature chips */}
        <div className="flex gap-3 mt-4 flex-wrap">
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Rich Media</div>
          <div className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm">Actions</div>
          <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm">Verified Brand</div>
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Secure Delivery</div>
        </div>

        {/* CTA button */}
        <button className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-[1.02] transform transition">
          Start Your First RCS Campaign
        </button>

        {/* badge strip */}
        <div className="flex items-center gap-3 mt-4 bg-slate-50 px-4 py-2 rounded-xl text-sm text-slate-700">
          <svg className="w-4 h-4 text-cyan-500" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Trusted by 100+ brands for rich messaging
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative w-full max-w-[340px] mx-auto">
        <div className="phone-shadow relative rounded-3xl border border-slate-100 overflow-hidden" style={{ height: "640px" }}>
          {/* top bar */}
          <div className="h-16 flex items-center px-4 glass">
            <div className="w-11 h-11 rounded-lg bg-slate-800 text-white flex items-center justify-center font-semibold">R</div>
            <div className="ml-3">
              <div className="text-sm font-semibold text-slate-900">RCS Business</div>
              <div className="text-xs text-slate-400">Verified · SB Tech</div>
            </div>
            <div className="ml-auto text-xs text-slate-400">Online</div>
          </div>

          {/* chat area */}
          <div ref={chatAreaRef} className="p-4 h-[480px] overflow-y-hidden thin-scroll space-y-4 bg-white">
            {messages.map((msg, idx) => {
              if (msg.kind === "rich") return <RichMessage key={idx} {...msg} />;
              if (msg.kind === "user") return <UserMessage key={idx} text={msg.text} />;
              if (msg.kind === "info") return <InfoMessage key={idx} text={msg.text} />;
              if (msg.kind === "carousel") return <CarouselMessage key={idx} items={msg.items} />;
              return null;
            })}
          </div>

          {/* input */}
          <div className="h-16 border-t border-slate-100 flex items-center gap-3 px-4 bg-white">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-sm border border-slate-100 focus:outline-none"
              placeholder="Type a message..."
            />
            <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:scale-[1.03] transition">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind custom dots */}
      <style jsx>{`
        .phone-shadow { box-shadow: 0 30px 60px rgba(15,23,42,0.08), 0 8px 20px rgba(2,6,23,0.04); }
        .glass { background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.82)); backdrop-filter: blur(8px) saturate(120%); -webkit-backdrop-filter: blur(8px) saturate(120%); }
      `}</style>
    </div>
  );
}
