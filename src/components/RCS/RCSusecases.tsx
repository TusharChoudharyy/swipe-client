// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const RCSusecases = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const tabsRef = useRef([]);
  const cardsRef = useRef([]);
  const decorRef = useRef(null);
  const raycastRef = useRef(null);

  const featureTabs = [
  {
    heading: "Performance Marketing",
    icon: "🎯",
    items: [
      {
        title: "Lead Gen Campaigns",
        icon: "📦",
        stats: [
          "🎁 Personalized product drops",
          "⚡ Instant lead capture",
          "🏷️ Discount triggers",
          "📝 One-tap signups",
        ],
        color: "from-purple-600 to-pink-500",
        gradient: "rgba(168, 85, 247, 0.3)",
        accent: "#A855F7",
      },
      {
        title: "Affiliate Programs",
        icon: "🧲",
        stats: [
          "🔄 Offer rotation updates",
          "📈 New FTD alerts",
          "🎯 Retargeting nudges",
          "🎁 Incentive reminders",
        ],
        color: "from-purple-600 to-pink-500",
        gradient: "rgba(168, 85, 247, 0.3)",
        accent: "#A855F7",
      },
      {
        title: "Media Buying",
        icon: "💬",
        stats: [
          "🧪 Channel testing prompts",
          "🔀 Cross-promotion flows",
          "💸 Budget-optimized bursts",
          "🅰️🅱️ A/B message trials",
        ],
        color: "from-purple-600 to-pink-500",
        gradient: "rgba(168, 85, 247, 0.3)",
        accent: "#A855F7",
      },
      {
        title: "Tracking & Attribution",
        icon: "📈",
        stats: [
          "🎯 Conversion pixel triggers",
          "📊 Source-based flows",
          "⚡ Funnel optimizations",
          "🎯 Goal-based segmenting",
        ],
        color: "from-purple-600 to-pink-500",
        gradient: "rgba(168, 85, 247, 0.3)",
        accent: "#A855F7",
      },
    ],
  },
  {
    heading: "Telecom & Messaging",
    icon: "📱",
    items: [
      {
        title: "A2P Messaging",
        icon: "☎️",
        stats: [
          "✅ Verified OTPs",
          "🔔 Service alerts",
          "📊 Usage notifications",
          "💬 Feedback requests",
        ],
        color: "from-blue-500 to-cyan-400",
        gradient: "rgba(59, 130, 246, 0.3)",
        accent: "#3B82F6",
      },
      {
        title: "CPaaS Providers",
        icon: "📡",
        stats: [
          "💬 RCS white-labeling",
          "🤝 Reseller support",
          "⚙️ API-level customization",
          "📊 Dashboard sync",
        ],
        color: "from-blue-500 to-cyan-400",
        gradient: "rgba(59, 130, 246, 0.3)",
        accent: "#3B82F6",
      },
      {
        title: "Push Alternatives",
        icon: "📬",
        stats: [
          "📩 Push fallback flows",
          "🔁 Re-engagement use",
          "📱 Cross-device continuity",
          "💡 Platform-native delivery",
        ],
        color: "from-blue-500 to-cyan-400",
        gradient: "rgba(59, 130, 246, 0.3)",
        accent: "#3B82F6",
      },
      {
        title: "Contact Centers",
        icon: "📞",
        stats: [
          "💬 Interactive customer chat",
          "📋 Visual menus",
          "🔀 Call-to-chat flows",
          "👨‍💼 Agent transfers",
        ],
        color: "from-blue-500 to-cyan-400",
        gradient: "rgba(59, 130, 246, 0.3)",
        accent: "#3B82F6",
      },
    ],
  },
  {
    heading: "Ecommerce & D2C",
    icon: "🛍️",
    items: [
      {
        title: "Abandoned Carts",
        icon: "🛒",
        stats: [
          "🖼️ Rich product cards",
          "🎯 Promo drop triggers",
          "🛒 Buy-now CTAs",
          "⏰ Reminder automation",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#EC4899",
      },
      {
        title: "Order Updates",
        icon: "🧾",
        stats: [
          "📄 Visual invoices",
          "📍 ETA cards",
          "📞 Support buttons",
          "🚚 Delivery tracking",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#EC4899",
      },
      {
        title: "Loyalty Programs",
        icon: "🎁",
        stats: [
          "📊 Tier status nudges",
          "📩 Rewards summaries",
          "⭐ Exclusive drops",
          "🎂 Birthday promos",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#EC4899",
      },
      {
        title: "Re-Engagement",
        icon: "🤝",
        stats: [
          "💸 Win-back deals",
          "📝 Survey incentives",
          "💬 Feedback prompts",
          "🔁 Refill reminders",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#EC4899",
      },
    ],
  },
  {
    heading: "Tech & SaaS",
    icon: "🧠",
    items: [
      {
        title: "Product Onboarding",
        icon: "🛠️",
        stats: [
          "✨ Feature highlight cards",
          "📋 Setup checklists",
          "⬆️ Upgrade prompts",
          "📊 Usage tracking",
        ],
        color: "from-green-500 to-emerald-400",
        gradient: "rgba(16, 185, 129, 0.3)",
        accent: "#10B981",
      },
      {
        title: "App Engagement",
        icon: "🧩",
        stats: [
          "📩 Push fallback",
          "⚡ Dynamic content",
          "🤝 Referral CTAs",
          "🎯 Usage-based triggers",
        ],
        color: "from-green-500 to-emerald-400",
        gradient: "rgba(16, 185, 129, 0.3)",
        accent: "#10B981",
      },
      {
        title: "Data & Analytics",
        icon: "📈",
        stats: [
          "📊 Insights summary",
          "📉 Funnel breakdowns",
          "🔔 Performance alerts",
          "📊 Automated dashboards",
        ],
        color: "from-green-500 to-emerald-400",
        gradient: "rgba(16, 185, 129, 0.3)",
        accent: "#10B981",
      },
      {
        title: "Integrations",
        icon: "🔄",
        stats: [
          "🔗 CRM connection flows",
          "⚡ Webhook triggers",
          "📘 API docs prompt",
          "🎯 Support routing",
        ],
        color: "from-green-500 to-emerald-400",
        gradient: "rgba(16, 185, 129, 0.3)",
        accent: "#10B981",
      },
    ],
  },
];


  useEffect(() => {
    // Section entrance animation
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power4.out",
    });

    // Tab animations
    gsap.from(".feature-tab", {
      scrollTrigger: {
        trigger: ".tabs-container",
        start: "top 60%",
      },
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(2)",
    });

    // Card animations
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 60%",
      },
      opacity: 0,
      y: 60,
      scale: 0.95,
      stagger: {
        amount: 0.4,
        from: "center",
      },
      duration: 0.8,
      ease: "back.out(1.7)",
    });

    // Light ray animation
    if (decorRef.current) {
      const rays = decorRef.current.querySelectorAll(".light-ray");
      rays.forEach((ray, i) => {
        gsap.to(ray, {
          rotation: 360,
          duration: 20 + i * 5,
          repeat: -1,
          ease: "none",
        });
      });
    }

    // Mouse follower effect
    const handleMouseMove = (e) => {
      if (!raycastRef.current) return;

      const { left, width } = raycastRef.current.getBoundingClientRect();
      const xPos = ((e.clientX - left) / width) * 100;

      gsap.to(raycastRef.current, {
        background: `linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.15) ${xPos}%, rgba(255,255,255,0.05) 100%)`,
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Active tab indicator
    if (tabsRef.current[activeTab]) {
      gsap.to(".active-indicator", {
        x: tabsRef.current[activeTab].offsetLeft,
        width: tabsRef.current[activeTab].offsetWidth,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-40 px-6 md:px-16 overflow-hidden "
      id="services"
    >
      {/* Raycast effect layer */}
      <div
        ref={raycastRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-30"
      />

      {/* Animated decor particles */}
      <div ref={decorRef} className="absolute inset-0 overflow-hidden z-[1]">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute light-ray w-px h-32 bg-gradient-to-t from-transparent via-[#183ec2]/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full border border-[#183ec2]/20 text-sm text-[#183ec2]">
            Globally Compliant Messaging Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-[#001e80] mb-6">
            Enterprise Messaging Infrastructure for{" "}
            <span className="text-[#183ec2]">Global Compliance</span> & Scale
          </h2>
          <p className="text-xl text-[#183ec2]/80 mx-auto max-w-3xl">
            Built for high-throughput delivery, geo-optimized routes, and
            region-specific compliance—engineered for iGaming success across
            borders.
          </p>
        </div>

        {/* Tabbed Navigation */}
        <div className="tabs-container relative mb-20 max-w-6xl mx-auto">
          <div className="relative border-b border-[#183ec2]/20 flex justify-center flex-wrap gap-5">
            <div
              className="absolute bottom-0 h-0.5 bg-[#183ec2] rounded-full transition-all duration-300"
              style={{
                left: tabsRef.current[activeTab]?.offsetLeft ?? 0,
                width: tabsRef.current[activeTab]?.offsetWidth ?? 0,
              }}
            />

            {featureTabs.map((tab, i) => (
              <button
                key={i}
                ref={(el) => (tabsRef.current[i] = el)}
                onClick={() => setActiveTab(i)}
                onMouseEnter={() => setIsHovering(i)}
                onMouseLeave={() => setIsHovering(null)}
                className={`relative px-6 py-3 text-base font-medium transition-colors ${
                  activeTab === i
                    ? "text-[#183ec2]"
                    : "text-[#183ec2] hover:text-[#183ec2]"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.heading}
                </span>

                {isHovering === i && (
                  <div className="absolute inset-0 bg-[#eaeefe]/50 rounded-lg backdrop-blur-sm z-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {featureTabs[activeTab].items.map((feature, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="feature-card border border-[#183ec2] rounded-xl  relative group rounded-xl overflow-hidden p-px"
              style={{
                background: `linear-gradient(to bottom right, ${feature.color})`,
              }}
            >
              <div
                className="h-full bg-white rounded-xl p-8 transition-all duration-500"
                onMouseEnter={() => setIsHovering(i)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className="text-5xl mb-6 text-[#183ec2]">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[#183ec2]">
                  {feature.title}
                </h3>
                <ul className="space-y-3 !list-none">
                  {feature.stats.map((stat, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-[#183ec2]/80">{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {isHovering === i && (
                <>
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      background: `radial-gradient(400px at center, ${feature.gradient}, transparent 70%)`,
                    }}
                  />
                  <div className="absolute -inset-px rounded-xl border border-[#183ec2]/20 pointer-events-none" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        .active-indicator {
          filter: drop-shadow(0 0 8px currentColor);
          transition: filter 0.3s ease;
        }
        .feature-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        .feature-card:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default RCSusecases;
