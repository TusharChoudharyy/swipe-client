// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import {
  PlayCircle,
  ShoppingBag,
  RefreshCcw,
  Maximize2,
  Gamepad2,
  Zap,
  Globe2,
  Bot,
} from "lucide-react";

const features = [
  {
    icon: <PlayCircle size={28} />,
    title: "Playable Ads",
    description: "Let users interact with your product before they buy.",
    animation: { scale: [1, 1.2, 1] },
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "Shoppable Videos",
    description: "Seamlessly link content to conversions with clickable in-video CTAs.",
    animation: { rotate: [0, -10, 10, 0] },
  },
  {
    icon: <RefreshCcw size={28} />,
    title: "Carousel Units",
    description: "Highlight multiple offers or products in a swipeable format.",
    animation: { rotate: [0, 15, -15, 0] },
  },
  {
    icon: <Maximize2 size={28} />,
    title: "Expandable Banners",
    description: "Start compact, expand on engagement—perfect for performance-driven funnels.",
    animation: { scale: [1, 1.1, 1] },
  },
  {
    icon: <Gamepad2 size={28} />,
    title: "Gamified Experiences",
    description: "Add quizzes, polls, or spin-to-win to boost engagement metrics.",
    animation: { y: [0, -6, 0] },
  },
  {
    icon: <Zap size={28} />,
    title: "Dynamic Retargeting Creatives",
    description: "Serve hyper-personalized rich media ads via your affiliate network.",
    animation: { scale: [1, 1.3, 1], opacity: [1, 0.6, 1] },
  },
  {
    icon: <Globe2 size={28} />,
    title: "Native Rich Media Integration",
    description: "Blend seamlessly into content across high-intent publishers.",
    animation: { rotate: [0, 360] },
  },
  {
    icon: <Bot size={28} />,
    title: "Auto-Optimizing Formats",
    description: "AI-driven format switching based on performance trends.",
    animation: { rotate: [0, -10, 10, 0], y: [0, -4, 0] },
  },
];

export default function RichMediaInteractive() {
  return (
    <section className="bg-white py-24 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold  mb-12">
          Rich Media That Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-xl"
            >
              <motion.div
                whileHover={feature.animation}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-16 h-16 mx-auto mb-5 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center"
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-lg font-semibold text-[#0B0B0F]">{feature.title}</h4>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Line */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent opacity-10 rounded-full pointer-events-none" /> */}
    </section>
  );
}
