// @ts-nocheck
// src/components/ServiceWeServe.jsx
import { Briefcase, ShoppingBag, Stethoscope, GraduationCap, Globe, PlaneTakeoff } from 'lucide-react';

const industries = [
  {
    icon: <Briefcase size={24} />, 
    title: "Corporate & SaaS",
    desc: "Enterprise solutions, dashboards, automation systems, and B2B tech built for scale."
  },
  {
    icon: <ShoppingBag size={24} />,
    title: "E-commerce",
    desc: "From storefront to checkout — optimized, mobile-first shopping experiences that convert."
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Healthcare",
    desc: "HIPAA-compliant platforms for hospitals, clinics, and digital wellness tools."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "EdTech",
    desc: "eLearning platforms, LMS systems, and gamified courses with real-time analytics."
  },
  {
    icon: <Globe size={24} />,
    title: "Media & Content",
    desc: "Content-heavy experiences, publishing CMSs, and branded storytelling sites."
  },
  {
    icon: <PlaneTakeoff size={24} />,
    title: "Travel & Hospitality",
    desc: "Booking engines, itinerary tools, and luxury hotel websites that inspire."
  },
];

const ServiceWeServe = () => {
  return (
    <section className="bg-[#FFFDFB] py-28 px-6 md:px-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E2330] mb-4">
          Industries We Power
        </h2>
        <p className="text-[#5B5B5B] text-lg max-w-2xl mx-auto">
          Our solutions span across sectors — solving real-world problems at scale with design + tech.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {industries.map((item, index) => (
          <div
            key={index}
            className="group bg-white border border-[#E6E8EC] rounded-3xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-[#FF7F2E]/10 text-[#FF7F2E]">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-[#1E2330] mb-2">{item.title}</h3>
            <p className="text-sm text-[#5B5B5B] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceWeServe;
