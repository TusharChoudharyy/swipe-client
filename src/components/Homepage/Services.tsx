// @ts-nocheck
"use client";

import { TrendingUp, BarChart3, Globe2, Target, LineChart, Rocket } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

const services = [
  {
    title: "Performance Marketing",
    description: "ROI-driven campaigns leveraging affiliate networks and advanced media buying to maximize performance.",
    icon: <TrendingUp className="h-5 w-5 text-black dark:text-neutral-400" />,
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
  },
  {
    title: "Data & Analytics",
    description: "AI-powered insights and real-time dashboards that transform raw data into decisions.",
    icon: <BarChart3 className="h-5 w-5 text-black dark:text-neutral-400" />,
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
  },
  {
    title: "Global Reach",
    description: "Seamlessly launch and scale campaigns across multiple markets with worldwide expertise.",
    icon: <Globe2 className="h-5 w-5 text-black dark:text-neutral-400" />,
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/2/9]",
  },
  {
    title: "Targeted Growth",
    description: "Expand market presence with precision targeting strategies driving measurable growth.",
    icon: <Target className="h-5 w-5 text-black dark:text-neutral-400" />,
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]",
  },
  {
    title: "Sustainable Scaling",
    description: "Long-term strategies ensuring stability, scalability, and consistent ROI.",
    icon: <LineChart className="h-5 w-5 text-black dark:text-neutral-400" />,
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/5/3/9]",
  },
  {
    title: "Brand Growth Solutions",
    description: "From positioning to performance, we design campaigns that prioritize measurable outcomes.",
    icon: <Rocket className="h-5 w-5 text-black dark:text-neutral-400" />,
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/9/3/13]",
  },
];

export default function ServicesGlowingGrid() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#183ec2] to-[#5a8dee] bg-clip-text text-transparent">
          Our Services
        </h2>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2">
          {services.map((service, i) => (
            <GridItem
              key={i}
              area={service.area}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 bg-white shadow-sm dark:bg-neutral-900">
          <div className="flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-300 p-2 bg-gray-50">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 md:text-base dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
