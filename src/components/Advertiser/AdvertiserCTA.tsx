
const AdvertiserCTA = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#f0f4ff]">
      <div className="max-w-5xl mx-auto text-center bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text">
          Let’s build performance marketing that actually performs.
        </h2>
        <p className="text-[#4c5472] text-lg mb-10 max-w-2xl mx-auto">
          Our experts are ready to launch your next winning campaign.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-[#183ec2] hover:bg-[#001e80] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-300">
            Start Scaling Today
          </button>
          <button className="border border-[#183ec2] hover:bg-[#183ec2] text-[#183ec2] hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
            Connect with Our Experts
          </button>
        </div>
      </div>
    </section>
  )
}

export default AdvertiserCTA
