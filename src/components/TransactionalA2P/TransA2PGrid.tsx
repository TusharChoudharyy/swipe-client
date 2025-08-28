// @ts-nocheck
import { motion } from "framer-motion";

const features = [
  {
    title: "OTP & Verification SMS",
    desc: "Send instant codes for secure logins and user validation.",
  },
  {
    title: "Order & Payment Alerts",
    desc: "Keep users updated with transactional flows post-purchase.",
  },
  {
    title: "Affiliate Performance Triggers",
    desc: "Alert affiliates about milestones, sales, and payouts in real time.",
  },
  {
    title: "Login & Session Notifications",
    desc: "Notify users of account access, session limits, or suspicious logins.",
  },
  {
    title: "CRM Integration Ready",
    desc: "Plug into HubSpot, Zoho, or custom stacks in minutes.",
  },
  {
    title: "Global Carrier Routing",
    desc: "Optimized SMS paths with dynamic fallback routing.",
  },
  {
    title: "DLT Compliance Built-In",
    desc: "Registered templates, headers, and full compliance with India’s TRAI norms.",
  },
  {
    title: "Performance-Grade Scalability",
    desc: "Send thousands of messages per second—without fail.",
  },
];


export default function TransA2PGrid() {
  return (
    <div className="w-full px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#183ec2]">
          Why Advertisers Choose Us
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
