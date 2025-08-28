// @ts-nocheck
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, Settings, BarChart3, FileText, Send } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Sign Up + Verify",
    description:
      "📝 Register your business and verify DLT (for India) or global ID.",
    icon: <Lock className="w-6 h-6" />,
  },
  {
    title: "Choose Your API/Platform",
    description: "⚙️ Use REST APIs, Zapier, or direct CRM integrations.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Upload Templates",
    description:
      "📂 Create or import DLT-approved or custom message templates.",
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: "Start Messaging",
    description:
      "📲 Push transactional messages instantly via API or dashboard.",
    icon: <Send className="w-6 h-6" />,
  },
  {
    title: "Monitor & Optimize",
    description: "📊 Track delivery, open rates, and performance in real-time.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
];

const TransA2PHow = () => {
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
        <h2 className="text-4xl font-extrabold bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mb-4">
          Launch. Optimize. Scale. Repeat.
        </h2>
        <p className="text-lg text-[#183ec2] font-medium">
          We simplify performance marketing for publishers so you focus on
          revenue—not operations.
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

export default TransA2PHow;
