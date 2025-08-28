// @ts-nocheck
import { BentoGrid, BentoGridItem } from "../ui/bento-grid.jsx";
import { PiCpuThin, PiUsersThreeThin, PiLockThin, PiCloudThin } from "react-icons/pi";

const TechFeatures = () => {
  return (
    <section className="w-full py-28 px-6 md:px-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold ">
          Swipe Media’s Technological Edge
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg">
          Our advanced systems and innovative infrastructure ensure maximum performance, scalability,
          and data integrity for all your digital campaigns.
        </p>
      </div>

      <BentoGrid className="max-w-7xl mx-auto">
        <BentoGridItem
          title="Scalable Cloud Architecture"
          description="Our infrastructure dynamically scales with your campaign demands."
          icon={<PiCloudThin className="h-8 w-8 text-blue-600" />}
        />
        <BentoGridItem
          title="AI-Powered Analytics"
          description="Real-time insights and predictive modeling driven by machine learning."
          icon={<PiCpuThin className="h-8 w-8 text-pink-600" />}
        />
        <BentoGridItem
          title="End-to-End Encryption"
          description="We use top-tier encryption protocols to ensure data privacy and compliance."
          icon={<PiLockThin className="h-8 w-8 text-green-600" />}
        />
        <BentoGridItem
          title="Multi-Channel Integration"
          description="Easily deploy campaigns across web, mobile, OTT, and social platforms."
          icon={<PiUsersThreeThin className="h-8 w-8 text-purple-600" />}
        />
      </BentoGrid>
    </section>
  );
};

export default TechFeatures;
