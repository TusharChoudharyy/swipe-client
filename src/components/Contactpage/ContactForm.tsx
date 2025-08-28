// @ts-nocheck
// src/components/ContactForm.jsx

import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message was sent successfully! 🚀");
    setForm({ name: "", email: "", company: "", message: "", budget: "" });
  };

  return (
    <section className="relative bg-white text-gray-900 py-32 px-6 md:px-20 overflow-hidden z-0">
      {/* Soft Indigo Glow */}
      <div className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-indigo-200 blur-[160px] opacity-40 rounded-full -z-10" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[260px] h-[260px] bg-indigo-300 blur-[160px] opacity-30 rounded-full -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-gray-200 rounded-3xl shadow-xl p-10 md:p-16">
        {/* Left Side: Copy */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Let’s <span className="text-indigo-600">Talk</span>
            <br />
            About What’s Next 🚀
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Tell us your vision, goals or even wildest ideas — we’re here to
            help brands scale with clarity and creativity.
          </p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>✅ 24-48hr response time</li>
            <li>✅ No spam, no fluff — just strategy</li>
            <li>✅ Startups, founders, and brands welcome</li>
          </ul>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Founder"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@brand.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Brand Inc."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Budget (Optional)
            </label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Budget Range</option>
              <option value="under_1l">Under ₹1L</option>
              <option value="1l-5l">₹1L – ₹5L</option>
              <option value="5l-10l">₹5L – ₹10L</option>
              <option value="10l+">₹10L+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Your Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="We’re launching a new product in 6 weeks. Can Swipe help us go viral?"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-indigo-500/30 transition-all"
            >
              ✉️ Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
