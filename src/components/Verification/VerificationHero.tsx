// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function VerificationHero() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Secure channel established", from: "system" },
    { id: 2, text: "Your OTP is 482913", from: "otp" },
    { id: 3, text: "Payment of ₹2,499 succeeded", from: "transaction" },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Trigger confetti on success
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(true);
      confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left: Headline & CTA */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-slate-900">
            Verify Millions of Users Instantly
          </h1>
          <p className="text-lg text-slate-700">
            99.9% delivery rate. End-to-end secure A2P messaging for OTPs, 2FA, and transactional
            verification across any platform or device.
          </p>
          <div className="flex gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium shadow"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-6 py-3 border border-slate-300 text-slate-700 rounded-full font-medium"
            >
              Request Demo
            </motion.button>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <span className="text-sm text-slate-500">Trusted by:</span>
            <img src="https://via.placeholder.com/60x20?text=Brand+1" alt="Brand 1" />
            <img src="https://via.placeholder.com/60x20?text=Brand+2" alt="Brand 2" />
            <img src="https://via.placeholder.com/60x20?text=Brand+3" alt="Brand 3" />
          </div>
        </div>

        {/* Right: Animated Phone Mockup */}
        <div className="lg:w-1/2 relative flex justify-center items-center">
          {/* Network lines background */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
          >
            <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </motion.div>

          <div className="w-[300px] sm:w-[340px] bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            {/* Top bar */}
            <div className="px-4 py-3 border-b border-slate-100 flex justify-between text-xs text-slate-400">
              <span>Simulated SMS</span>
              <span>Now</span>
            </div>

            {/* Messages area */}
            <div className="p-4 min-h-[200px] flex flex-col gap-3 relative">
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, x: msg.from === "otp" ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.5, type: "spring", stiffness: 100 }}
                    className={`max-w-[85%] px-3 py-2 rounded-xl ${
                      msg.from === "otp"
                        ? "bg-blue-50 text-blue-800 self-start font-mono font-semibold tracking-widest"
                        : msg.from === "transaction"
                        ? "bg-emerald-50 text-emerald-800 self-end"
                        : "bg-slate-100 text-slate-800 self-start"
                    }`}
                  >
                    {msg.text}
                    {msg.from === "otp" && !showSuccess && (
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="inline-block w-2 h-2 bg-blue-400 rounded-full ml-2"
                      />
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Success overlay */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white/90 flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-3xl font-bold text-emerald-600 animate-pulse">
                    ✓
                  </div>
                  <div className="mt-3 text-slate-900 font-semibold text-lg">Verified</div>
                  <div className="text-sm text-slate-500 mt-1">
                    Your transaction/code is secure
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
