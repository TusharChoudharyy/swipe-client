// @ts-nocheck
import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Settings,
  BarChart3,
  MessageSquare,
  Search,
  Activity
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discover & Define",
    description: "📈 We align on goals, audience segments, and ideal KPIs.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Strategy & Setup",
    description: "🛠 We design campaign architecture and onboard partners.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Launch & Optimize",
    description: "📊 Real-time adjustments, A/B tests, and budget scaling.",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    title: "Monitor & Attribute",
    description: "🔍 Live dashboards, granular reports, and insights at every stage.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "Feedback Loop",
    description: "💬 Iterative optimization backed by conversion data and partner performance.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
];

const TechHow = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-white relative">
      <div className="absolute inset-0 top-40 bg-[radial-gradient(ellipse_150%_100%_at_top_left,#eaeefe,#ffffff)] -z-10"></div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold  mb-4">
          Launch. Optimize. Scale. Repeat.
        </h2>
        <p className="text-lg font-medium">
          We simplify performance marketing for publishers so you focus on revenue—not operations.
        </p>
      </div>

      {/* Steps */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="relative bg-white rounded-2xl shadow-md p-6 border border-[#dbe3ff] hover:shadow-xl transition-all duration-300 group"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#183ec2] to-[#001e80] rounded-l-xl transition-transform duration-300 group-hover:scale-y-110"></div>

            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#183ec2]">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#183ec2]">
                {index + 1}. {step.title}
              </h3>
            </div>
            <p className="text-sm text-[#4c5472]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechHow;
