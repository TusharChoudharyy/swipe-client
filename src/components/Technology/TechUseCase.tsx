// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const TechUseCase = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const decorRef = useRef<HTMLDivElement>(null);
  const raycastRef = useRef<HTMLDivElement>(null);

  const featureTabs = [
    {
      heading: "SaaS & Cloud",
      icon: "💻",
      items: [
        {
          title: "CRM Tools",
          icon: "🧩",
          stats: [
            "📈 Lead Gen Ads",
            "🔁 Retargeting Journeys",
            "📊 In-App Referrals",
            "📨 Email Nurture Funnels",
          ],
          color: "from-blue-600 to-indigo-500",
          gradient: "rgba(37, 99, 235, 0.3)",
          accent: "#2563eb",
        },
        {
          title: "DevOps Platforms",
          icon: "🛠",
          stats: [
            "🧠 Thought Leadership",
            "🔍 Search-Based Ads",
            "👥 Partnered Webinars",
            "💾 Tool Comparison Pages",
          ],
          color: "from-blue-500 to-cyan-500",
          gradient: "rgba(6, 182, 212, 0.3)",
          accent: "#06b6d4",
        },
        {
          title: "Cloud Storage",
          icon: "☁️",
          stats: [
            "📦 Free Trial Promos",
            "🧪 Use-Case Landing Pages",
            "📱 Mobile Onboarding Flows",
            "💬 Affiliate Reviews",
          ],
          color: "from-indigo-500 to-sky-500",
          gradient: "rgba(59, 130, 246, 0.3)",
          accent: "#3b82f6",
        },
        {
          title: "AI SaaS",
          icon: "🧠",
          stats: [
            "🎯 Behavior-Based Targeting",
            "🎥 Explainer Campaigns",
            "🖱 Free Tool CTAs",
            "🧪 A/B Tests for Features",
          ],
          color: "from-purple-500 to-pink-500",
          gradient: "rgba(168, 85, 247, 0.3)",
          accent: "#a855f7",
        },
      ],
    },
    {
      heading: "Tech Products",
      icon: "📱",
      items: [
        {
          title: "Software Downloads",
          icon: "🖥️",
          stats: [
            "🎯 Tier 1 Geo Targeting",
            "🚀 Time-Based Push Offers",
            "💬 Referral Widgets",
            "📊 Keyword Syndication",
          ],
          color: "from-green-500 to-teal-400",
          gradient: "rgba(20, 184, 166, 0.3)",
          accent: "#14b8a6",
        },
        {
          title: "IoT Devices",
          icon: "📡",
          stats: [
            "🌍 Regional Retail Partners",
            "📦 Performance Deal Bundles",
            "🧭 Geofencing Ads",
            "📱 App Install CTAs",
          ],
          color: "from-orange-500 to-amber-400",
          gradient: "rgba(251, 191, 36, 0.3)",
          accent: "#f59e0b",
        },
        {
          title: "Cybersecurity",
          icon: "🔒",
          stats: [
            "🛡 Influencer Affiliates",
            "📩 Whitepaper CTAs",
            "🧠 Compliance Campaigns",
            "🌐 Secure Trials",
          ],
          color: "from-red-600 to-rose-500",
          gradient: "rgba(220, 38, 38, 0.3)",
          accent: "#ef4444",
        },
        {
          title: "Martech Tools",
          icon: "🔊",
          stats: [
            "🎙 Podcast Ads",
            "✉️ Email Lead Magnets",
            "🧪 Demo-Driven Funnels",
            "📚 Comparison Blogs",
          ],
          color: "from-fuchsia-500 to-pink-500",
          gradient: "rgba(232, 121, 249, 0.3)",
          accent: "#d946ef",
        },
      ],
    },
    {
      heading: "B2B Solutions",
      icon: "🏢",
      items: [
        {
          title: "VoIP Services",
          icon: "📞",
          stats: [
            "☎️ Click-to-Call Ads",
            "🖱 Conversion Landing Pages",
            "📈 Retargeting Explainers",
            "🧰 Resource Centers",
          ],
          color: "from-emerald-500 to-green-400",
          gradient: "rgba(16, 185, 129, 0.3)",
          accent: "#10b981",
        },
        {
          title: "Enterprise SaaS",
          icon: "🏢",
          stats: [
            "🧠 Lead Scoring Engines",
            "📘 Solution eBooks",
            "🎥 Testimonial Videos",
            "💰 ROI Calculators",
          ],
          color: "from-blue-700 to-indigo-600",
          gradient: "rgba(29, 78, 216, 0.3)",
          accent: "#1d4ed8",
        },
        {
          title: "Invoice/Billing Tools",
          icon: "🧾",
          stats: [
            "⏳ Trial Countdown Promos",
            "🧮 Cost-Benefit Case Studies",
            "📥 Downloadable Templates",
            "💼 Partner Referrals",
          ],
          color: "from-purple-600 to-violet-500",
          gradient: "rgba(124, 58, 237, 0.3)",
          accent: "#7c3aed",
        },
        {
          title: "BI & Analytics",
          icon: "📊",
          stats: [
            "🧪 Sandbox Campaigns",
            "📂 Real-Time Dashboards",
            "👓 Data Storytelling Content",
            "📡 Custom Attribution Models",
          ],
          color: "from-cyan-500 to-sky-400",
          gradient: "rgba(6, 182, 212, 0.3)",
          accent: "#06b6d4",
        },
      ],
    },
    {
      heading: "Fintech & Payments",
      icon: "📈",
      items: [
        {
          title: "Digital Wallets",
          icon: "💳",
          stats: [
            "💸 Incentive Loops",
            "🔁 Referral-Loyalty Systems",
            "🧠 Behavioral Segments",
            "📊 Financial Calculator CTAs",
          ],
          color: "from-green-600 to-blue-500",
          gradient: "rgba(34, 197, 94, 0.3)",
          accent: "#10b981",
        },
        {
          title: "Accounting Software",
          icon: "🧾",
          stats: [
            "💬 Niche Affiliates",
            "🧮 Budgeting Toolkits",
            "🔎 Use Case Clusters",
            "🏷 Free vs Premium Funnels",
          ],
          color: "from-teal-500 to-emerald-400",
          gradient: "rgba(20, 184, 166, 0.3)",
          accent: "#14b8a6",
        },
        {
          title: "Lending Platforms",
          icon: "🏦",
          stats: [
            "📱 Mobile-Centric Funnels",
            "📧 Credit Check Lead Forms",
            "💡 Solution Discovery Content",
            "💬 AI Chat CTAs",
          ],
          color: "from-indigo-500 to-blue-500",
          gradient: "rgba(59, 130, 246, 0.3)",
          accent: "#3b82f6",
        },
        {
          title: "B2B Payments",
          icon: "💼",
          stats: [
            "📑 Case-Study Lead Magnets",
            "🔒 Trust-Building Flows",
            "🧮 Savings Comparison Ads",
            "📈 Performance-Based Retargeting",
          ],
          color: "from-yellow-500 to-orange-400",
          gradient: "rgba(234, 179, 8, 0.3)",
          accent: "#f59e0b",
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
    const handleMouseMove = (e: MouseEvent) => {
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
            Powered Smart
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 px-4 max-w-4xl mx-auto">
            Next-gen tracking and analytics fueling performance marketing
          </h2>
          <p className="text-m  mx-auto max-w-3xl">
            Harness AI, automation, and real-time insights to optimize campaigns, detect fraud, and improve advertiser-publisher relationships.
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
                ref={(el) => {
                  tabsRef.current[i] = el;
                }}
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
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="feature-card border border-[#183ec2] rounded-xl  relative group  overflow-hidden p-px"
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
      <style>{`
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

export default TechUseCase;
