// @ts-nocheck
import aboutImage from "../../assets/images/hero2.png"; // ensure the image exists

const benefits = [
  { icon: "✅", text: "Tech-Savvy Affiliate Network" },
  { icon: "✅", text: "Optimized for High Conversions" },
  { icon: "✅", text: "Multi-Channel Media Buying" },
  { icon: "✅", text: "Transparent Real-Time Reporting" },
];

const TechAbout = () => {
  return (
    <section className="w-full bg-white text-[#183ec2] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="Affiliate Network"
            className="w-full max-w-lg mx-auto "
          />
        </div>

        {/* Right Text */}
        <div className="flex-1">
          <p className="text-lg mb-2 uppercase tracking-wide font-semibold text-[#001e80]">
            Precision
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold ">
            Performance-Driven Affiliate Marketing for Tech
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            We connect tech brands with premium affiliates to drive bottom-line growth.
          </p>

          {/* Benefit Boxes */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 bg-[#eaeefe] text-[#183ec2] px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-xl">{benefit.icon}</span>
                <p className="font-medium">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechAbout;
