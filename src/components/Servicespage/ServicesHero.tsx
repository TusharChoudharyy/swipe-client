// @ts-nocheck
const ServicesHero = () => {
  return (
    <section className="relative bg-[#FAFAFB] pt-36 pb-28 px-6 md:px-20 overflow-hidden">
      {/* Layered Background Curve */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#FF7F2E]/5 rounded-b-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#1E2330] mb-6">
            Strategy meets <br />
            <span className="text-[#FF7F2E]">scalable execution.</span>
          </h1>
          <p className="text-[#5B5B5B] text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Swipe delivers tailored digital strategies that accelerate brand performance across channels and platforms.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#services"
              className="bg-[#FF7F2E] text-white font-medium px-6 py-3 rounded-full hover:bg-[#e86d1e] transition-all shadow-md"
            >
              🚀 Explore Services
            </a>
            <a
              href="#contact"
              className="text-[#1E2330] hover:text-[#FF7F2E] font-medium underline underline-offset-4 transition"
            >
              Or Contact Us →
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 flex justify-center relative">
          <div className="relative w-full max-w-md">
            <img
              src="/src/assets/services-illustration.png"
              alt="Service Visual"
              className="rounded-3xl w-full shadow-xl border border-[#E6E8EC]"
            />
            {/* Glass card */}
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-lg rounded-xl px-6 py-4 shadow-lg border border-white/30 w-[90%] text-center">
              <p className="text-sm text-[#1E2330] font-semibold">50+ Projects Delivered</p>
              <p className="text-xs text-[#5B5B5B]">with top-tier clients across 7 industries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
