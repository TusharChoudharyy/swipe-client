// @ts-nocheck
// src/components/CustomerGrowthSection.jsx
import { TrendingUp, Megaphone, Users } from "lucide-react";

const customerPoints = [
  {
    title: "Ratings & Reviews",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    description: "Collect reviews & testimonials to build trust and showcase credibility.",
  },
  {
    title: "Social and Marketing",
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    description: "Use content generation to boost visibility and marketing.",
  },
  {
    title: "Customer Engagement",
    icon: <Users className="w-8 h-8 text-primary" />,
    description: "Automate & enhance your customer touchpoints across platforms.",
  },
];

const CustomerGrowthSection = () => {
  return (
    <section className="bg-white px-6 md:px-24 py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E2330]">
          Grow faster with help from your customers
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {customerPoints.map((item, i) => (
          <div key={i} className="text-center px-4">
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-[#1E2330] mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-[#5B5B5B] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerGrowthSection;
