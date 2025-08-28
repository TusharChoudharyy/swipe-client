// @ts-nocheck
// src/components/RetargetingWhy.jsx
const features = [
  {
    title: "Performance Tracking",
    desc: "We closely monitor and analyze the performance of retargeting campaigns, adjusting strategies based on key metrics such as click-through rates (CTRs) and conversion rates.",
  },
  {
    title: "Continuous Optimization",
    desc: "We regularly refine tactics to maximize the effectiveness of each campaign, ensuring the best possible return on investment.",
  },
  {
    title: "Targeted Approach",
    desc: "We focus on users who have already shown interest, increasing the likelihood of conversion by engaging with a warm audience.",
  },
  {
    title: "Increased Conversion Rates",
    desc: "By nurturing users who are more likely to convert, we enhance the chances of turning them into valuable, long-term prospects.",
  },
];

const RetargetingIntro = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] text-center mb-16">
          Why Choose Swipe Media for Retargeting?
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-10 space-y-12 md:space-y-0 overflow-x-auto snap-x scroll-smooth pb-6 md:pb-0">
          {features.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-0 md:flex-1 snap-start"
            >
              <div className="flex flex-col items-start md:items-center md:text-center">
                <div className="text-[#FF7F2E] text-2xl font-bold mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-[#0B0B0F] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4A4A4A] text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetargetingIntro;
