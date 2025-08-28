// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const PublisherUseCase = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(null);
  const tabsRef = useRef([]);
  const cardsRef = useRef([]);
  const decorRef = useRef(null);
  const raycastRef = useRef(null);

  const featureTabs = [
    {
      heading: "iGaming",
      icon: "🎰",
      items: [
        {
          title: "Casino Offers",
          icon: "🎲",
          stats: [
            "🎯 CPL & CPA offers",
            "📈 FTD goals met",
            "🔄 Retargeting logic",
            "💥 App + web flows",
          ],
          color: "from-purple-600 to-indigo-500",
          gradient: "rgba(124, 58, 237, 0.3)",
          accent: "#8B5CF6",
        },
        {
          title: "Sports Betting",
          icon: "🏈",
          stats: [
            "⚽ Pre-match bets",
            "🔁 Live odds funnels",
            "⏱️ Push & SMS triggers",
            "📥 Email + API sync",
          ],
          color: "from-purple-600 to-indigo-500",
          gradient: "rgba(124, 58, 237, 0.3)",
          accent: "#8B5CF6",
        },
        {
          title: "Fantasy Leagues",
          icon: "🎯",
          stats: [
            "🧠 Predictive quiz ads",
            "🔐 Free-to-play conversion",
            "🎁 Loyalty ladders",
            "📈 Upsell journeys",
          ],
          color: "from-purple-600 to-indigo-500",
          gradient: "rgba(124, 58, 237, 0.3)",
          accent: "#8B5CF6",
        },
        {
          title: "Rummy & Poker",
          icon: "🀄",
          stats: [
            "🃏 Deposit triggers",
            "🎰 Spin-to-win CTAs",
            "🛠️ Gamified banners",
            "🔁 Re-engagement flows",
          ],
          color: "from-purple-600 to-indigo-500",
          gradient: "rgba(124, 58, 237, 0.3)",
          accent: "#8B5CF6",
        },
      ],
    },
    {
      heading: "E-Commerce",
      icon: "🛒",
      items: [
        {
          title: "Apparel & Fashion",
          icon: "👗",
          stats: [
            "🧵 Creator affiliate drops",
            "🛍️ Cart recovery triggers",
            "💃 Trend-based campaigns",
            "📥 Coupon lead forms",
          ],
          color: "from-pink-500 to-rose-400",
          gradient: "rgba(244, 114, 182, 0.3)",
          accent: "#ec4899",
        },
        {
          title: "Electronics & Tech",
          icon: "📦",
          stats: [
            "🧠 Review-style landers",
            "🎯 Comparison widgets",
            "🎥 Unbox influencer hooks",
            "🛠️ Add-to-cart incentives",
          ],
          color: "from-blue-500 to-indigo-500",
          gradient: "rgba(99, 102, 241, 0.3)",
          accent: "#3b82f6",
        },
        {
          title: "Beauty & Wellness",
          icon: "💅",
          stats: [
            "📸 UGC content ads",
            "🧴 Ingredient storytelling",
            "📧 Email collection flows",
            "🎯 Referral tracking",
          ],
          color: "from-fuchsia-500 to-pink-500",
          gradient: "rgba(232, 121, 249, 0.3)",
          accent: "#d946ef",
        },
        {
          title: "Health & Nutrition",
          icon: "🥤",
          stats: [
            "🔁 Trial-to-sub models",
            "🧪 Ingredient proof ads",
            "📊 Before/after journeys",
            "💌 Drip conversion flows",
          ],
          color: "from-green-500 to-teal-400",
          gradient: "rgba(34, 197, 94, 0.3)",
          accent: "#10b981",
        },
      ],
    },
    {
      heading: "Finance",
      icon: "🏦",
      items: [
        {
          title: "Credit Cards",
          icon: "💳",
          stats: [
            "📥 Apply-now flows",
            "📈 Score-based targeting",
            "🏷️ Cashback angle LPs",
            "📲 SMS CTAs",
          ],
          color: "from-green-600 to-blue-500",
          gradient: "rgba(34, 197, 94, 0.3)",
          accent: "#10B981",
        },
        {
          title: "Loans & EMI",
          icon: "🧾",
          stats: [
            "🏠 Housing loan forms",
            "🧠 Personal loan funnels",
            "📊 Comparison tools",
            "🕐 Urgency campaigns",
          ],
          color: "from-green-600 to-blue-500",
          gradient: "rgba(34, 197, 94, 0.3)",
          accent: "#10B981",
        },
        {
          title: "Insurance",
          icon: "🛡️",
          stats: [
            "📍 Location-based offers",
            "💡 Benefit-led LPs",
            "🛠️ Quote engine forms",
            "🔄 Renewals re-engagement",
          ],
          color: "from-green-600 to-blue-500",
          gradient: "rgba(34, 197, 94, 0.3)",
          accent: "#10B981",
        },
        {
          title: "Investments",
          icon: "📉",
          stats: [
            "📊 Trading webinars",
            "📈 Stock tips promos",
            "📥 Signup-to-funding",
            "🧠 Education hooks",
          ],
          color: "from-green-600 to-blue-500",
          gradient: "rgba(34, 197, 94, 0.3)",
          accent: "#10B981",
        },
      ],
    },
    {
      heading: "SaaS & Tools",
      icon: "🧪",
      items: [
        {
          title: "Productivity Apps",
          icon: "📥",
          stats: [
            "🧩 Feature demos",
            "💬 Chatbot onboarding",
            "🔁 Trial extension flows",
            "📈 Case-study landers",
          ],
          color: "from-blue-600 to-cyan-500",
          gradient: "rgba(37, 99, 235, 0.3)",
          accent: "#3B82F6",
        },
        {
          title: "Security Tools",
          icon: "🔐",
          stats: [
            "🔍 Scan offer funnels",
            "📊 Data safety LPs",
            "💡 Compliance checklists",
            "🛡️ Backup plan upsells",
          ],
          color: "from-red-600 to-rose-500",
          gradient: "rgba(220, 38, 38, 0.3)",
          accent: "#EF4444",
        },
        {
          title: "AI Products",
          icon: "🤖",
          stats: [
            "🧠 Use-case lead forms",
            "🎥 Explainer video ads",
            "💡 ROI scenario landers",
            "🔁 Retarget by segment",
          ],
          color: "from-yellow-500 to-orange-400",
          gradient: "rgba(234, 179, 8, 0.3)",
          accent: "#F59E0B",
        },
        {
          title: "Analytics Platforms",
          icon: "💻",
          stats: [
            "📊 Dashboard previews",
            "💼 Multi-user signup hooks",
            "💬 In-app referral triggers",
            "📩 CRM integrations",
          ],
          color: "from-green-600 to-emerald-500",
          gradient: "rgba(5, 150, 105, 0.3)",
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
            Monetize Smart
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 px-4 max-w-4xl mx-auto">
            Maximize ad revenue with trusted Affiliate Partnerships
          </h2>
          <p className="text-m  mx-auto max-w-3xl">
            Leverage premium offers, advanced tracking, and exclusive deals to generate sustainable income streams with reliable advertiser connections.
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

export default PublisherUseCase;
