// @ts-nocheck
// src/components/AboutCTA.jsx

const AboutCTA = () => {
  return (
    <section className="relative bg-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 text-sm rounded-full uppercase tracking-wider font-medium mb-4">
          Let’s Talk Growth
        </span>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-900">
          Ready to Scale Your Brand with{" "}
          <span className="text-indigo-600">Messaging + Performance</span>?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-base max-w-xl mx-auto mb-10">
          From secure enterprise messaging to ROI-driven performance marketing —
          we help global brands accelerate growth with speed, compliance, and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-full text-white text-sm font-semibold shadow transition-all"
          >
            Talk to Our Team →
          </a>
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 px-8 py-4 rounded-full text-sm font-semibold transition-all"
          >
            View Case Studies
          </a>
        </div>

        {/* Trust statement */}
        <p className="mt-8 text-sm text-gray-500">
          Trusted by global enterprises and fast-growing brands worldwide.
        </p>
      </div>
    </section>
  );
};

export default AboutCTA;
