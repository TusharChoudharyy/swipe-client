// @ts-nocheck
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const AdvertiserUseCase = () => {
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
            icon: "🎯",
            items: [
                {
                    title: "Online Casinos",
                    icon: "🎰",
                    stats: [
                        "🎯 First-time deposits",
                        "💳 Payment funnel boost",
                        "📲 App install campaigns",
                        "🔁 Retargeting flows"
                    ],
                    color: "from-purple-600 to-indigo-500",
                    gradient: "rgba(124, 58, 237, 0.3)",
                    accent: "#8B5CF6"
                },
                {
                    title: "Sports Betting",
                    icon: "🏆",
                    stats: [
                        "⚽ In-play betting CTAs",
                        "⏱️ Real-time odds retarget",
                        "🧠 Gamified quiz ads",
                        "📢 Geo-specific promos"
                    ],
                    color: "from-purple-600 to-indigo-500",
                    gradient: "rgba(124, 58, 237, 0.3)",
                    accent: "#8B5CF6"
                },
                {
                    title: "Fantasy Sports",
                    icon: "🎲",
                    stats: [
                        "📅 Match reminder triggers",
                        "🎯 Predict & win campaigns",
                        "🛠️ Custom scoring funnels",
                        "📥 Email drip reactivation"
                    ],
                    color: "from-purple-600 to-indigo-500",
                    gradient: "rgba(124, 58, 237, 0.3)",
                    accent: "#8B5CF6"
                },
                {
                    title: "Poker / Rummy",
                    icon: "🃏",
                    stats: [
                        "🎁 Bonus unlock CTAs",
                        "🔄 Referral re-engagement",
                        "🎯 In-app retargeting",
                        "💰 Loyalty ladder flows"
                    ],
                    color: "from-purple-600 to-indigo-500",
                    gradient: "rgba(124, 58, 237, 0.3)",
                    accent: "#8B5CF6"
                }
            ]
        },

        {
            heading: "E-Commerce",
            icon: "🛒",
            items: [
                {
                    title: "Fashion & Apparel",
                    icon: "👜",
                    stats: [
                        "🧵 Creator-led hauls",
                        "🏷️ Promo code drops",
                        "👗 Seasonal offers",
                        "🎯 Abandoned cart retargeting"
                    ],
                    color: "from-pink-500 to-rose-400",
                    gradient: "rgba(244, 114, 182, 0.3)",
                    accent: "#ec4899",
                },
                {
                    title: "Electronics & Gadgets",
                    icon: "📱",
                    stats: [
                        "📦 Unboxing video ads",
                        "🎯 Comparison table LPs",
                        "💬 User reviews boost",
                        "🛍️ Bundle campaigns"
                    ],
                    color: "from-blue-500 to-indigo-500",
                    gradient: "rgba(99, 102, 241, 0.3)",
                    accent: "#3b82f6",
                },
                {
                    title: "Beauty & Wellness",
                    icon: "🧴",
                    stats: [
                        "🪞 Influencer tutorials",
                        "💌 Newsletter leads",
                        "🎥 Video storytelling",
                        "🌿 Ingredient-focused ads"
                    ],
                    color: "from-fuchsia-500 to-pink-500",
                    gradient: "rgba(232, 121, 249, 0.3)",
                    accent: "#d946ef",
                },
                {
                    title: "Nutrition & Supplements",
                    icon: "🥤",
                    stats: [
                        "📊 Before/after logic",
                        "🧪 Product test campaigns",
                        "🎯 UGC + reviews combo",
                        "🚀 Trial-to-subscription flows"
                    ],
                    color: "from-green-500 to-teal-400",
                    gradient: "rgba(34, 197, 94, 0.3)",
                    accent: "#10b981",
                }
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
                        "🎯 Instant approval flows",
                        "📥 App form triggers",
                        "🎁 Signup bonus nudges",
                        "💸 Cashback funnels"
                    ],
                    color: "from-green-600 to-blue-500",
                    gradient: "rgba(34, 197, 94, 0.3)",
                    accent: "#10B981"
                },
                {
                    title: "Banking & Loans",
                    icon: "🏦",
                    stats: [
                        "📝 Lead generation for EMI",
                        "🛒 Loan comparison ads",
                        "🎯 Interest rate hooks",
                        "💬 WhatsApp drip engagement"
                    ],
                    color: "from-green-600 to-blue-500",
                    gradient: "rgba(34, 197, 94, 0.3)",
                    accent: "#10B981"
                },
                {
                    title: "Insurance",
                    icon: "🛡️",
                    stats: [
                        "📈 ROI calculators",
                        "🧾 Policy picker guides",
                        "🕵️‍♂️ Claim process breakdowns",
                        "🔄 Renewal reminders"
                    ],
                    color: "from-green-600 to-blue-500",
                    gradient: "rgba(34, 197, 94, 0.3)",
                    accent: "#10B981"
                },
                {
                    title: "Trading & Investment",
                    icon: "📉",
                    stats: [
                        "📊 Demo account promos",
                        "🎓 Webinar lead gen",
                        "🎯 Stock tips retargeting",
                        "💸 Fund comparison flows"
                    ],
                    color: "from-green-600 to-blue-500",
                    gradient: "rgba(34, 197, 94, 0.3)",
                    accent: "#10B981"
                }
            ]
        },

        {
            heading: "Tech & SaaS",
            icon: "🧪",
            items: [
                {
                    title: "Productivity Tools",
                    icon: "💻",
                    stats: [
                        "🎯 Free trial conversions",
                        "📥 Onboarding email flows",
                        "🧩 Integration-based hooks",
                        "💡 ROI use-case content"
                    ],
                    color: "from-blue-600 to-cyan-500",
                    gradient: "rgba(37, 99, 235, 0.3)",
                    accent: "#3B82F6",
                },
                {
                    title: "Analytics Platforms",
                    icon: "📊",
                    stats: [
                        "📈 Data visualization tours",
                        "📝 Case study lead magnets",
                        "🔁 Retargeting based on usage",
                        "🧠 Feature-based ad sets"
                    ],
                    color: "from-green-600 to-emerald-500",
                    gradient: "rgba(5, 150, 105, 0.3)",
                    accent: "#10B981",
                },
                {
                    title: "AI & Automation",
                    icon: "🧠",
                    stats: [
                        "🤖 Smart workflow demos",
                        "🎥 Explainer video CTAs",
                        "💌 Use-case nurturing",
                        "🧪 A/B testing logic"
                    ],
                    color: "from-yellow-500 to-orange-400",
                    gradient: "rgba(234, 179, 8, 0.3)",
                    accent: "#F59E0B",
                },
                {
                    title: "🔐 Cybersecurity",
                    icon: "🔐",
                    stats: [
                        "🛡️ Risk score funnel",
                        "📥 Free scan campaign",
                        "💡 Compliance content ads",
                        "🔄 Retargeting: Threat alerts"
                    ],
                    color: "from-red-600 to-rose-500",
                    gradient: "rgba(220, 38, 38, 0.3)",
                    accent: "#EF4444",
                }
            ],
        }

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
            className="relative w-full py-40 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-[#eaeefe] to-[#d9e2fd]"
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
                        Enterprise-Ready <span className="text-[#183ec2]">Routing</span> & Scale
                    </h2>
                    <p className="text-xl text-[#183ec2]/80 mx-auto max-w-3xl">
                        Built for high-throughput delivery, geo-optimized routes, and region-specific compliance—engineered for iGaming success across borders.
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
                                className={`relative px-6 py-3 text-base font-medium transition-colors ${activeTab === i
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
                            className="feature-card relative group rounded-xl overflow-hidden p-px"
                            style={{
                                background: `linear-gradient(to bottom right, ${feature.color})`,
                            }}
                        >
                            <div
                                className="h-full bg-white rounded-xl p-8 transition-all duration-500"
                                onMouseEnter={() => setIsHovering(i)}
                                onMouseLeave={() => setIsHovering(null)}
                            >
                                <div className="text-5xl mb-6 text-[#183ec2]">{feature.icon}</div>
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

export default AdvertiserUseCase;
