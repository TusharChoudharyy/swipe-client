// @ts-nocheck


import aboutImage from "../../assets/images/hero2.png"; // ensure the image exists

const benefits = [
    { icon: "🔄", text: "Multiple Payout Models Supported" },
    { icon: "📈", text: "Scale Campaigns With Media Buyers" },
    { icon: "🛠️", text: "Custom Funnel + Flow Setup" },
    { icon: "🔍", text: "Real-Time Conversion Intelligence" },
];

const AffiliateModelsAbout = () => {
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
                        Optimize
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold ">
                        Affiliate Network Built for Advertisers
                    </h2>
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                        Power performance campaigns across global markets with data-driven targeting and elite publisher partnerships.
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

export default AffiliateModelsAbout;
