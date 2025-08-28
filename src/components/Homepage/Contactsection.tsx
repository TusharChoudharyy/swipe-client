// @ts-nocheck
import { motion } from "framer-motion";
import { MapPin, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contactsection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
<section className="relative bg-[radial-gradient(ellipse_150%_80%_at_bottom_left,rgba(24,62,194,0.02)_0%,#eaeefe_100%)] text-gray-900 py-24 px-6 md:px-20 overflow-hidden">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3
            bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
            Let’s Work Together
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-3">
            With 15+ years of experience, serving clients across 20+ countries,
            we deliver professional solutions trusted by global businesses.
          </p>
          <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">
            15+ Years • 20+ Countries • 200+ Projects
          </span>
        </motion.div>

        {/* Contact Container */}
        <div className="bg-white rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-10 space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold">Head Office</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                We’ve partnered with international clients for over 15 years to
                deliver solutions that scale globally.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#183ec2] w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Mumbai, India</p>
                  <p className="text-gray-500">Global Delivery Center</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="text-[#183ec2] w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">contact@swipemedia.net</p>
                  <p className="text-gray-500">Response within 1 business day</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-[#183ec2] w-5 h-5 mt-1" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-gray-500">Mon – Fri: 9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>

            <p className="pt-4 text-sm text-gray-500 border-t border-gray-200">
              Serving enterprises across North America, Europe & Asia-Pacific
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-100 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#183ec2]"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-100 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#183ec2]"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#183ec2]"
              required
            />

            <textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full bg-gray-100 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#183ec2]"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#183ec2] hover:bg-[#001e80] transition px-6 py-3 rounded-md text-white font-semibold shadow-sm"
            >
              Send Message
            </button>

            {submitted && (
              <div className="mt-4 p-3 rounded-md bg-[#eaeefe] border border-[#183ec2]/30 text-[#183ec2] text-sm">
                ✅ Thank you. We’ll get back within 24 hours.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contactsection;
