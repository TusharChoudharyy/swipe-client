// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ShoppingBag, Tag, Truck, Star, MessageSquare } from "lucide-react";
import whatsappBg from "../../assets/images/whatsappbg.jpg"; // <-- src/assets/images ke andar

type ChatMessage = {
  text: string;
  type: "welcome" | "order" | "product" | "promo" | "query" | "feedback";
  icon?: React.ReactNode;
  image?: string;
};

const chatMessages: ChatMessage[] = [
  {
    text: "Hi Ram! 👋 Thanks for shopping with Trendify.",
    type: "welcome",
    icon: <MessageSquare className="w-5 h-5 text-cyan-600" />,
  },
  {
    text: "Your order #TRX123 is out for delivery 🚚",
    type: "order",
    icon: <Truck className="w-5 h-5 text-blue-600" />,
  },
  {
    text: "Check out this matching backpack for your new sneakers!",
    type: "product",
    icon: <ShoppingBag className="w-5 h-5 text-pink-600" />,
    image: "https://images.unsplash.com/photo-1600180758890-6c05be7d8b8e?w=300",
  },
  {
    text: "Limited Offer! Add it now & save 15% 🎉",
    type: "promo",
    icon: <Tag className="w-5 h-5 text-green-600" />,
  },
  {
    text: "Customer Support: Need help with sizing? Reply here anytime.",
    type: "query",
    icon: <MessageSquare className="w-5 h-5 text-gray-600" />,
  },
  {
    text: "How was your experience? Rate us ⭐⭐⭐⭐⭐",
    type: "feedback",
    icon: <Star className="w-5 h-5 text-yellow-500" />,
  },
];

export default function WhatsAppHeroWhite() {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleMessages((prev) => {
        if (i < chatMessages.length) {
          const updated = [...prev, chatMessages[i]];
          i++;
          return updated;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute top-10 left-20 w-5 h-5 bg-blue-100 rounded-full opacity-40 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-24 w-6 h-6 bg-cyan-100 rounded-full opacity-30 animate-bounce-slower"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 relative z-10">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            Engage Customers on WhatsApp
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-8">
            Deliver updates, showcase products, and build relationships – all in one chat.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start mb-8">
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transform transition">
              Get Started
            </button>
            <button className="bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-gray-800 font-medium">
            <div className="flex items-center gap-2">📦 Order Tracking</div>
            <div className="flex items-center gap-2">🛍️ Product Suggestions</div>
            <div className="flex items-center gap-2">⭐ Customer Feedback</div>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className="flex-1 flex justify-center">
          <div
            className="relative w-80 lg:w-96 h-[500px] rounded-3xl shadow-2xl p-4 flex flex-col border border-gray-200 overflow-hidden"
            style={{
              backgroundImage: `url(${whatsappBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Phone Header Box */}
           {/* Phone Header - Full width like real WhatsApp */}
<div className="flex items-center justify-between w-full mb-4 bg-green-500 p-3 rounded-t-3xl shadow-sm text-white">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 font-bold text-xl">
      W
    </div>
    <div>
      <p className="font-semibold text-white">WhatsApp</p>
      <p className="text-xs text-white/80">Business Chat</p>
    </div>
  </div>
  <div className="text-white text-xl">⋯</div>
</div>


            {/* Chat Area */}
            <div className="flex-1 overflow-y-hidden flex flex-col gap-4 pb-4 relative">
              {visibleMessages.map((msg, idx) => {
                if (!msg) return null; // Error fix
                return (
                  <div
                    key={idx}
                    className={`flex flex-col gap-2 max-w-[80%] ${
                      msg.type === "promo" ? "self-end" : "self-start"
                    }`}
                  >
                    <div
                      className={`flex items-start gap-2 p-3 rounded-xl shadow-sm ${
                        msg.type === "promo" ? "bg-green-100" : "bg-blue-50"
                      }`}
                    >
                      {msg.icon && <div className="mt-1">{msg.icon}</div>}
                      <p className="text-sm text-gray-900">{msg.text}</p>
                    </div>
                    {msg.image && (
                      <img
                        src={msg.image}
                        alt="Product"
                        className="rounded-xl border border-gray-200 w-32"
                      />
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator Box */}
              {visibleMessages.length < chatMessages.length && (
                <div className="self-start p-2 bg-gray-100 rounded-xl shadow-sm flex items-center gap-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="mt-2 flex gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button className="bg-cyan-500 p-3 rounded-full text-white hover:bg-cyan-600 transition">➤</button>
            </div>

            {/* Subtle shadow glow */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_rgba(0,200,255,0.15)] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
