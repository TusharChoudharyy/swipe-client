// @ts-nocheck
// src/components/ContactCTA.jsx

const ContactCTA = () => {
  return (
    <section className="bg-[#0B0B0B] py-28 px-6 md:px-20 relative overflow-hidden text-white">
      {/* Glow Backgrounds */}
      <div className="absolute -top-40 -left-32 w-[300px] h-[300px] bg-indigo-500/20 blur-[150px] rounded-full z-0" />
      <div className="absolute -bottom-40 -right-32 w-[300px] h-[300px] bg-pink-500/20 blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to build something extraordinary?
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-10">
          We partner with ambitious brands and founders to turn ideas into impact. Let’s make yours real.
        </p>

        <a
          href="#contact"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-sm md:text-base font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-indigo-400/40"
        >
          ✉️ Start the Conversation
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
