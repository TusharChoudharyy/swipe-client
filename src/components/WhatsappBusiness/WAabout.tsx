// @ts-nocheck

import aboutImage from "../../assets/images/hero2.png"; // ensure the image exists

const benefits = [
    { icon: "💬", text: "Instant Customer Access – Start conversations, not just campaigns" },
    { icon: "📈", text: "Trackable Message Flows – Full-funnel conversion visibility" },
    { icon: "⚙️", text: "Easy API Integration – Plug into your stack seamlessly" },
    { icon: "🎯", text: "Targeted & Personal – Segment, personalize, automate" },
];


const WAabout = () => {
    return (
        <section className="w-full bg-white text-[#183ec2] px-6 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Left Image */}
                <div className="flex-1">
                    <img
                        src={aboutImage}
                        alt="Affiliate Network"
                        className="w-full max-w-lg mx-auto rounded-xl shadow-xl"
                    />
                </div>

                {/* Right Text */}
                <div className="flex-1">
                    <p className="text-lg mb-2 uppercase tracking-wide font-semibold text-[#001e80]">
                        Connect
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold leading-snug bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
                        Why WhatsApp for Marketers?
                    </h2>
                    <p className="mt-6 text-base text-[#183ec2]">
                        High open rates. Global reach. Real-time conversion. WhatsApp drives ROI like nothing else.
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

export default WAabout;
