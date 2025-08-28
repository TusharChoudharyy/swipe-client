// @ts-nocheck


const VerificationCTA = () => {
  return (
    <section className="w-full bg-[#183ec2] relative overflow-hidden">
      {/* Multi-layer Ripple Background */}
      <div className="absolute inset-0">
        <div className="ripple ripple1"></div>
        <div className="ripple ripple2"></div>
        <div className="ripple ripple3"></div>
      </div>

      {/* Ripple Animation Styles */}
      <style>
        {`
          .ripple {
            position: absolute;
            top: 50%;
            right: -20%;
            transform: translateY(-50%);
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
            animation: rippleAnim 6s infinite ease-in-out;
          }

          .ripple1 {
            width: 600px;
            height: 600px;
            animation-delay: 0s;
          }
          .ripple2 {
            width: 800px;
            height: 800px;
            animation-delay: 2s;
            opacity: 0.6;
          }
          .ripple3 {
            width: 1000px;
            height: 1000px;
            animation-delay: 4s;
            opacity: 0.4;
          }

          @keyframes rippleAnim {
            0% {
              transform: translateY(-50%) scale(1);
              opacity: 1;
            }
            50% {
              transform: translateY(-50%) scale(1.1);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-50%) scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Content */}
      <div className="relative z-10 py-20 px-6 flex flex-col items-start max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-white">
          Let’s Power Your Next Verification Flow
        </h2>
        <p className="text-white/80 mb-8 max-w-lg">
          Whether you're scaling a funnel or securing your platform—start now.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Start Scaling Today
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Connect with Our Experts
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerificationCTA;
