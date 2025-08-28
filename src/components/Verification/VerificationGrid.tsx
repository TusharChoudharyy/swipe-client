// @ts-nocheck
import { motion } from "framer-motion";

const features = [
  {
    title: "Carrier-Grade Routing",
    desc: "Dynamically selects best SMS path for max reliability.",
  },
  {
    title: "Real-Time Delivery Reports",
    desc: "Instant feedback on message delivery status and latency.",
  },
  {
    title: "OTP Auto-Handling",
    desc: "Supports one-time passwords and user verification logic.",
  },
  {
    title: "Global Compliance Ready",
    desc: "GDPR, DLT, TRAI, and industry-specific frameworks covered.",
  },
  {
    title: "Latency <1s Globally",
    desc: "Lightning-fast message push, anywhere on the planet.",
  },
  {
    title: "Failover Mechanisms",
    desc: "Smart retries ensure message success even in flaky regions.",
  },
  {
    title: "Multi-Channel Backup",
    desc: "Email, WhatsApp, RCS fallback routing on demand.",
  },
  {
    title: "Enterprise-Grade Analytics",
    desc: "Track CTRs, bounce rates, device type, and more in real time.",
  },
];


export default function VerificationGrid() {
  return (
    <div className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#183ec2]">
          Engineered for Performance Marketing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(120px,1fr)]">
          {features.map((f, i) => {
            let customClass = "";
            if (i === 0) customClass = "md:col-span-2 md:row-span-2";
            if (i === 2) customClass = "md:row-span-2";
            if (i === 5 || i === 7) customClass = "md:col-span-2";

            return (
              <motion.div
                key={i}
                className={`bg-white border border-[#183ec2] rounded-xl p-6 shadow-sm hover:shadow-md transition transform hover:scale-[1.015] hover:-translate-y-1 ${customClass}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <h3 className="text-xl font-semibold text-[#183ec2] mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
