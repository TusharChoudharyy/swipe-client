// @ts-nocheck
import { useEffect, useRef, useState } from "react";

export default function App() {
  /* ----------------------------
     Helper: Get current HH:MM
  ---------------------------- */
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  /* ----------------------------
     Vertical SMS Feed with enhancements
  ---------------------------- */
  const VerticalSMS = ({ items = [], interval = 3000 }) => {
    const containerRef = useRef(null);
    const [messages, setMessages] = useState(items);
    const [times, setTimes] = useState(items.map(() => getCurrentTime()));

    // Update live timestamps every minute
    useEffect(() => {
      const timer = setInterval(() => {
        setTimes(messages.map(() => getCurrentTime()));
      }, 60000);
      return () => clearInterval(timer);
    }, [messages]);

    // Continuous scroll with requestAnimationFrame
    useEffect(() => {
      if (!containerRef.current) return;
      const slider = containerRef.current;
      let yOffset = 0;
      let lastTimestamp = null;
      const itemHeight = slider.children[0].offsetHeight + 16;

      const animate = (timestamp) => {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        yOffset += (delta / interval) * itemHeight; // speed proportional to interval
        if (yOffset >= itemHeight * messages.length) yOffset = 0;

        slider.style.transform = `translateY(-${yOffset}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [messages, interval]);

    // Swipe / drag support for mobile
    useEffect(() => {
      const slider = containerRef.current;
      if (!slider) return;
      let startY = 0;
      let currentY = 0;
      let dragging = false;

      const onTouchStart = (e) => {
        dragging = true;
        startY = e.touches[0].clientY;
      };

      const onTouchMove = (e) => {
        if (!dragging) return;
        currentY = e.touches[0].clientY;
        const dy = startY - currentY;
        slider.style.transition = "none";
        slider.style.transform = `translateY(-${dy}px)`;
      };

      const onTouchEnd = () => {
        dragging = false;
        slider.style.transition = "transform 0.3s ease";
      };

      slider.addEventListener("touchstart", onTouchStart);
      slider.addEventListener("touchmove", onTouchMove);
      slider.addEventListener("touchend", onTouchEnd);

      return () => {
        slider.removeEventListener("touchstart", onTouchStart);
        slider.removeEventListener("touchmove", onTouchMove);
        slider.removeEventListener("touchend", onTouchEnd);
      };
    }, []);

    // Gradients for cards
    const gradients = [
      "from-blue-50 via-white to-blue-50",
      "from-green-50 via-white to-green-50",
      "from-amber-50 via-white to-amber-50",
      "from-rose-50 via-white to-rose-50",
    ];

    return (
      <div className="relative overflow-hidden h-[400px] sm:h-[500px] lg:h-[560px] w-full" aria-live="polite">
        <div ref={containerRef} className="flex flex-col gap-4 absolute w-full">
          {messages.map((item, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${gradients[i % gradients.length]} shadow-md rounded-xl p-4 relative border border-gray-200 flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
            >
              {/* Sender Header */}
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-gray-800 text-sm">{item.sender}</span>
                <span className="text-gray-400 text-xs">{times[i]}</span>
              </div>

              {/* Message Body */}
              <p className="text-gray-700 text-sm mb-2">{item.text}</p>

              {/* Inline CTA pill */}
              {item.cta && (
                <span className="self-start inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full hover:scale-105 hover:bg-blue-200 transition-transform duration-300">
                  {item.cta}
                </span>
              )}

              {/* Tail for bubble */}
              <span className="absolute -left-2 top-4 w-2 h-2 bg-white rounded-tr-xl shadow-sm"></span>
            </div>
          ))}

          {/* Typing placeholder */}
          <div className="h-10 flex items-center justify-start px-4 text-gray-400 animate-pulse text-sm">
            ...
          </div>
        </div>
      </div>
    );
  };

  /* ----------------------------
     Sample 10 Promotional A2P SMS messages
  ---------------------------- */
  const messages = [
    { sender: "Promotions", text: "📢 Send 1M SMS instantly with our high-speed A2P platform.", cta: "Learn More" },
    { sender: "Alerts", text: "✅ 99.9% delivery rate ensures your message reaches every user.", cta: "Get Started" },
    { sender: "DLT Compliance", text: "✔ Fully compliant with India DLT regulations.", cta: "Verify Now" },
    { sender: "Campaigns", text: "💡 Bulk SMS campaigns made easy and efficient.", cta: "Create Campaign" },
    { sender: "Transactional", text: "📲 OTPs, alerts, notifications – delivered instantly.", cta: "Integrate API" },
    { sender: "Personalization", text: "✨ Dynamic content tailored for each recipient.", cta: "Personalize" },
    { sender: "Analytics", text: "📊 Real-time analytics: delivery, clicks, engagement.", cta: "View Dashboard" },
    { sender: "Global Reach", text: "🌍 Send SMS worldwide without hassle.", cta: "Check Coverage" },
    { sender: "Integration", text: "🔗 SMS APIs for seamless integration into your apps.", cta: "Get API Key" },
    { sender: "Support", text: "💬 24/7 support to ensure smooth messaging.", cta: "Contact Support" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Heading + CTA */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#183ec2]">
            Scale Your Business with <br className="hidden sm:block" /> Promotional A2P SMS
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
            Reach millions instantly, ensure delivery, and monitor performance with our
            end-to-end messaging platform.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#183ec2] text-white font-semibold shadow-lg hover:bg-[#001e80] transition-all">
              Request Demo
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border-2 border-[#183ec2]/40 text-[#183ec2] hover:bg-[#183ec2]/5 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT: Enhanced Vertical SMS Slider */}
        <VerticalSMS items={messages} interval={3000} />
      </div>
    </div>
  );
}
