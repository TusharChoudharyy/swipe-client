// @ts-nocheck
import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Connect Your App",
    description: "🔗 Integrate with our SMS API or SDK in under 10 minutes.",
  },
  {
    title: "Push Verification",
    description: "📥 Trigger OTPs, 2FA, or custom messages from any platform.",
  },
  {
    title: "Smart Delivery",
    description: "📤 We auto-route using carrier intelligence and fallbacks.",
  },
  {
    title: "Real-Time Feedback",
    description: "🔄 Delivery receipts, read status, and retries visible instantly.",
  },
  {
    title: "Optimize Results",
    description: "📈 Access message logs, geo latency, and conversion metrics.",
  },
];

const VerificationHow = () => {
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
          From API to Delivery – In Seconds
        </h2>
        <p className="text-lg text-[#183ec2] font-medium">
          Your OTP workflow simplified, secured, and scaled.
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

            <div className="flex items-center gap-3 mb-3">
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

export default VerificationHow;
