// @ts-nocheck
// src/components/Aboutpage/Clients.tsx

const clients = [
  { name: "The Body Shop", logo: "/logos/bodyshop.png" },
  { name: "Cloudways", logo: "/logos/cloudways.png" },
  { name: "Ajio", logo: "/logos/ajio.png" },
  { name: "AirAsia", logo: "/logos/airasia.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Flipkart", logo: "/logos/flipkart.png" },
];

export default function AboutClients() {
  return (
    <section className="relative bg-white dark:bg-[#0B0B0B] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Trusted by <span className="text-indigo-600">Global Brands</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From high-growth startups to enterprise leaders — our clients rely on us 
          for performance marketing and secure messaging at scale.
        </p>
      </div>

      {/* Logos Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
