// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const MediaBuyingUseCase = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const tabsRef = useRef([]);
  const cardsRef = useRef([]);
  const decorRef = useRef(null);
  const raycastRef = useRef(null);

 const featureTabs = [
  {
    heading: "Finance",
    icon: "💼",
    items: [
      {
        title: "Credit Cards",
        icon: "💳",
        stats: [
          "💡 Lead Gen Funnels",
          "🚀 CPL Campaigns",
          "🔍 High-Intent Traffic",
          "🔗 Cross-Sell Offers",
        ],
        color: "from-green-600 to-blue-500",
        gradient: "rgba(34, 197, 94, 0.3)",
        accent: "#10B981",
      },
      {
        title: "Loans",
        icon: "🏦",
        stats: [
          "📈 Installment Loan Leads",
          "🤝 Partner Syndication",
          "💵 Tiered Commission Flows",
          "🌍 Geotargeted Segments",
        ],
        color: "from-green-600 to-blue-500",
        gradient: "rgba(34, 197, 94, 0.3)",
        accent: "#10B981",
      },
      {
        title: "Investment Platforms",
        icon: "📈",
        stats: [
          "📲 App Installs",
          "🎯 Webinar Signups",
          "📝 Affiliate Reviews",
          "📧 Email Conversions",
        ],
        color: "from-green-600 to-blue-500",
        gradient: "rgba(34, 197, 94, 0.3)",
        accent: "#10B981",
      },
      {
        title: "Crypto & Web3",
        icon: "🪙",
        stats: [
          "🪙 Wallet Signups",
          "🎁 Token Offers",
          "🌐 Publisher Campaigns",
          "📊 CPC Campaigns",
        ],
        color: "from-green-600 to-blue-500",
        gradient: "rgba(34, 197, 94, 0.3)",
        accent: "#10B981",
      },
    ],
  },
  {
    heading: "Health & Wellness",
    icon: "🧬",
    items: [
      {
        title: "Fitness Apps",
        icon: "🏋️‍♀️",
        stats: [
          "📲 App Downloads",
          "📣 Influencer Push",
          "💥 Native Ads",
          "💌 Email Funnels",
        ],
        color: "from-fuchsia-500 to-pink-500",
        gradient: "rgba(232, 121, 249, 0.3)",
        accent: "#d946ef",
      },
      {
        title: "Supplements",
        icon: "💊",
        stats: [
          "🎁 Trial Offers",
          "📈 Upsell Paths",
          "🔗 Direct Publisher Deals",
          "🎯 Retargeting Blasts",
        ],
        color: "from-fuchsia-500 to-pink-500",
        gradient: "rgba(232, 121, 249, 0.3)",
        accent: "#d946ef",
      },
      {
        title: "Mental Wellness",
        icon: "🧘",
        stats: [
          "💳 Subscription Campaigns",
          "📚 Blog Monetization",
          "🎥 TikTok Creators",
          "🔍 PPC Lead Funnels",
        ],
        color: "from-fuchsia-500 to-pink-500",
        gradient: "rgba(232, 121, 249, 0.3)",
        accent: "#d946ef",
      },
      {
        title: "Diagnostics",
        icon: "🧪",
        stats: [
          "🧫 Kit Orders",
          "🧑‍⚕️ Doctor Signup",
          "📞 Call-Driven Leads",
          "📦 Marketplace Listings",
        ],
        color: "from-fuchsia-500 to-pink-500",
        gradient: "rgba(232, 121, 249, 0.3)",
        accent: "#d946ef",
      },
    ],
  },
  {
    heading: "E-commerce",
    icon: "🛒",
    items: [
      {
        title: "Fashion",
        icon: "👚",
        stats: [
          "⚡ Flash Sale Campaigns",
          "🎯 Influencer Seeding",
          "🧩 Bundle Offers",
          "📸 UGC Funnels",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#ec4899",
      },
      {
        title: "Food & Beverage",
        icon: "🍽️",
        stats: [
          "📦 Meal Kits",
          "🛒 Grocery Subscriptions",
          "✍️ Affiliate Reviews",
          "🎬 Video Ads",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#ec4899",
      },
      {
        title: "Beauty",
        icon: "🧴",
        stats: [
          "💧 Skincare Trials",
          "🎁 Influencer Gifting",
          "🎥 TikTok Virality",
          "💡 Post-Purchase Upsells",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#ec4899",
      },
      {
        title: "Electronics",
        icon: "🎧",
        stats: [
          "📲 Smart Device Launches",
          "🔢 Promo Code Tracking",
          "🚀 D2C Brand Push",
          "📱 Paid Social Shoppers",
        ],
        color: "from-pink-500 to-rose-400",
        gradient: "rgba(244, 114, 182, 0.3)",
        accent: "#ec4899",
      },
    ],
  },
  {
    heading: "EdTech & SaaS",
    icon: "🧠",
    items: [
      {
        title: "Online Courses",
        icon: "📘",
        stats: [
          "✍️ Enrollment Campaigns",
          "🎤 Webinar Funnels",
          "🤝 Affiliate Collabs",
          "🔁 Reengagement Emails",
        ],
        color: "from-blue-600 to-cyan-500",
        gradient: "rgba(37, 99, 235, 0.3)",
        accent: "#3B82F6",
      },
      {
        title: "Analytics Tools",
        icon: "📊",
        stats: [
          "🧪 Free Trial Funnels",
          "🏢 B2B Lead Gen",
          "📉 ROI Attribution",
          "🖥️ Programmatic Ads",
        ],
        color: "from-blue-600 to-cyan-500",
        gradient: "rgba(37, 99, 235, 0.3)",
        accent: "#3B82F6",
      },
      {
        title: "Coaching & Mentoring",
        icon: "🧑‍🏫",
        stats: [
          "📅 1:1 Booking Funnels",
          "📨 LinkedIn DM Push",
          "🎥 YouTube Creators",
          "♻️ Retargeting Flows",
        ],
        color: "from-blue-600 to-cyan-500",
        gradient: "rgba(37, 99, 235, 0.3)",
        accent: "#3B82F6",
      },
      {
        title: "B2B SaaS",
        icon: "🛠️",
        stats: [
          "🎬 Product Demos",
          "📄 Whitepaper Downloads",
          "✉️ Email Prospecting",
          "🎯 Account-Based Targeting",
        ],
        color: "from-blue-600 to-cyan-500",
        gradient: "rgba(37, 99, 235, 0.3)",
        accent: "#3B82F6",
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
            Scale Fast
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 px-4 max-w-4xl mx-auto">
            Optimize ad spend with precision-driven media buying tactics
          </h2>
          <p className="text-m  mx-auto max-w-3xl">
            Access premium traffic sources, manage bids smartly, and ensure maximum conversions with data-driven ad placement strategies.
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

export default MediaBuyingUseCase;
