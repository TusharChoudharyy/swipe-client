// @ts-nocheck
// src/components/ContactHero.jsx

const ContactHero = () => {
  return (
    <section className="relative bg-white py-32 px-6 md:px-20 text-gray-900 overflow-hidden z-0">
      {/* Soft Indigo Glow */}
      <div className="absolute -top-40 left-[-60px] w-[320px] h-[320px] bg-indigo-200 blur-[160px] opacity-30 rounded-full -z-10" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[260px] h-[260px] bg-indigo-300 blur-[140px] opacity-20 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Floating quote */}
        <p className="text-indigo-500 italic text-sm sm:text-base mb-4 tracking-wide">
          “A conversation can spark your next breakthrough.”
        </p>

        {/* Heading - Indigo only */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-indigo-600">
          Let's Talk Big Ideas.
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          No bots. No fluff. Just humans who get branding, storytelling, and strategy —
          and want to help you win.
        </p>

        {/* Simulated AI Chat Bubble
        <div className="relative max-w-xl mx-auto bg-white border border-gray-200 px-6 py-5 rounded-2xl shadow-md mb-14">
          <p className="text-sm text-gray-500 mb-1">🧠 You:</p>
          <div className="bg-gray-50 text-left text-gray-800 px-4 py-3 rounded-xl text-sm border border-gray-200">
            We're launching something new next month. Can SwipeMedia help us scale quickly?
          </div>
          <span className="absolute top-2 right-4 text-gray-400 text-xs">typing…</span>
        </div> */}

        {/* CTA Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: "📧",
              title: "Email Us",
              value: "hello@swipemedia.com",
            },
            {
              icon: "💬",
              title: "Chat on WhatsApp",
              value: "+91 98765 43210",
            },
            {
              icon: "📱",
              title: "Follow Us",
              value: "@swipemedia (IG & LinkedIn)",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="group bg-white border border-gray-200 hover:border-indigo-500 p-6 rounded-xl text-left shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-4">{card.icon}</div>
              <p className="text-sm uppercase text-gray-500 font-semibold mb-1">{card.title}</p>
              <p className="text-base font-medium text-gray-900">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
