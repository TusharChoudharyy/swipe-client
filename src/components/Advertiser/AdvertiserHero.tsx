import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/images/hero2.png'

const AdvertiserHero = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#FFFFFFFF,#eaeefe_100%)] text-white px-6 py-12">
            <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                {/* Left Text Section */}
                <div className="flex-1">
                    <p className="text-lg text-[#183ec2] mb-2 uppercase tracking-wide font-semibold">
                        Scale
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-b from-black to-[#001e80] bg-clip-text text-transparent">
                        Performance Marketing That Converts Fast
                    </h1>
                    <p className="mt-6 text-lg text-[#183ec2]">
                        Swipe’s precision media buying and elite affiliate network drive measurable results—leads, clicks, and conversions—at scale.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button className="bg-[#183ec2] hover:bg-[#001e80] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg transition-all duration-300">
                            Book Strategy Call <ArrowRight className="text-sm" />
                        </button>
                        <button className="border border-[#183ec2] hover:bg-[#183ec2] text-[#183ec2] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                            Explore Solutions
                        </button>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={heroImage}
                        alt="Advertiser Hero"
                        className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default AdvertiserHero;
