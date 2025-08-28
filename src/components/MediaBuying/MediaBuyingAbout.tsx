// @ts-nocheck
import aboutImage from "../../assets/images/hero2.png"; // ensure the image exists

const benefits = [
    { icon: "⚡", text: "High-Intent Traffic Only", desc: "Targeted clicks that convert, not fluff." },
    { icon: "📈", text: "ROI-Focused Campaigns", desc: "Every dollar is tracked, tested, and scaled." },
    { icon: "🌎", text: "Global Affiliate Network", desc: "Top publishers. All verticals. No limits." },
    { icon: "🧠", text: "AI-Driven Optimization", desc: "Smart bidding, real-time adjustments." },
];

const MediaBuyingAbout = () => {
    return (
        <section className="w-full bg-white text-[#183ec2] px-6 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                
                {/* Left Image */}
                <div className="flex-1">
                    <img
                        src={aboutImage}
                        alt="Media Buying"
                        className="w-full max-w-lg mx-auto "
                    />
                </div>

                {/* Right Content */}
                <div className="flex-1">
                    <p className="text-lg mb-2 uppercase tracking-wide font-semibold text-[#001e80]">
                        Why Us
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold ">
                        Built for High-Performance Growth
                    </h2>
                    <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                        Swipe Media bridges affiliate power with precision media buying expertise.
                    </p>

                    {/* Benefit Boxes */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {benefits.map((benefit, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-1 bg-[#eaeefe] text-[#183ec2] px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="text-xl">{benefit.icon}</span>
                                    <p className="font-medium">{benefit.text}</p>
                                </div>
                                <p className="text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MediaBuyingAbout;
