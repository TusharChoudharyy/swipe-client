// @ts-nocheck
// src/components/MediaBuyingAtSwipe.jsx

const steps = [
  {
    step: "1️⃣",
    title: "Strategy Call",
    desc: "Understand your funnel, audience, and offer alignment.",
  },
  {
    step: "2️⃣",
    title: "Partner Matching",
    desc: "Get matched with vetted affiliates and publishers.",
  },
  {
    step: "3️⃣",
    title: "Creative Deployment",
    desc: "We launch assets across media platforms and track in real time.",
  },
  {
    step: "4️⃣",
    title: "Optimization Loop",
    desc: "AI + human feedback optimize creatives, placements, and bids.",
  },
  {
    step: "5️⃣",
    title: "Scale & Report",
    desc: "Transparent reporting with actionable data for continual growth.",
  },
];

const MediaBuyingAtSwipe = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Campaign. Our Engine.
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed mb-8">
            Launch smarter media buying in five steps.
          </p>

          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 items-start">
                <div className="text-2xl">{s.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2563EB] mb-1">{s.title}</h3>
                  <p className="text-[#4B5563]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="w-full h-full rounded-xl border border-[#E5E7EB] p-1 shadow-sm">
            <img
              src="https://www.obicreative.com/wp-content/uploads/2019/08/Media-Buying-Journey-Image-995x1024.png"
              alt="Media Buying Engine"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBuyingAtSwipe;
