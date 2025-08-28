// @ts-nocheck
"use client";
import { motion } from "framer-motion";
import { Users, Globe2, Award } from "lucide-react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import HomeAbout from '../../assets/images/home-about.png';

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
];

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <img
              src={HomeAbout}
              alt="About Us"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -z-10 -top-8 -left-8 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-60" />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug bg-gradient-to-r from-[#183ec2] to-[#5a8dee] bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
            For over a decade, we’ve partnered with global enterprises and 
            fast-growing startups to unlock measurable growth. Our expertise in 
            performance marketing and data-driven strategies ensures that every 
            campaign drives real ROI and long-term impact.
          </p>

          {/* Highlights */}
          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
              <Users className="text-blue-600 w-7 h-7 mb-3" />
              <h4 className="text-2xl font-bold text-gray-800">850+</h4>
              <p className="text-gray-500 text-sm">Global Clients</p>
            </div>
            <div className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
              <Globe2 className="text-blue-600 w-7 h-7 mb-3" />
              <h4 className="text-2xl font-bold text-gray-800">50+</h4>
              <p className="text-gray-500 text-sm">Countries Reached</p>
            </div>
            <div className="p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition bg-white">
              <Award className="text-blue-600 w-7 h-7 mb-3" />
              <h4 className="text-2xl font-bold text-gray-800">42%</h4>
              <p className="text-gray-500 text-sm">Avg. ROI Growth</p>
            </div>
          </div>

         {/* Animated Tooltip */}
<div className="mt-12 flex items-center gap-4">
  <div className="inline-flex">
    <AnimatedTooltip items={people} />
  </div>
  <span className="text-gray-500 text-base font-medium whitespace-nowrap">
    ...and many more
  </span>
</div>


          {/* Trusted By Logos + CTA */}
          <p className="mt-6 text-gray-500 text-sm text-center md:text-left">
  Empowering businesses with <span className="text-blue-600 font-semibold">innovation</span> and <span className="text-blue-600 font-semibold">trust</span>.
</p>

        </motion.div>
      </div>
    </section>
  );
}
