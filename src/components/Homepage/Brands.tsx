// @ts-nocheck
import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";
import brand1 from "../../assets/Dummylogos/airaisa.png";
import brand2 from "../../assets/Dummylogos/ajio.jpg";
import brand3 from "../../assets/Dummylogos/baccabucci.jpg";
import brand4 from "../../assets/Dummylogos/bestbuy.png";
import brand5 from "../../assets/Dummylogos/biba.png";
import brand6 from "../../assets/Dummylogos/bodyshop.png";
import brand7 from "../../assets/Dummylogos/bombayshavingcompany.jpg";
import brand8 from "../../assets/Dummylogos/chegg.png";
import brand9 from "../../assets/Dummylogos/cleartrip.jpg";
import brand10 from "../../assets/Dummylogos/cloudways.png";

const logos = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  // brand10,
];

const Brands = () => {
  const globeRef = useRef<any>();

   useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false; // ❌ disable zoom
      controls.enablePan = false;  // (optional) disable dragging/panning
      controls.autoRotate = true;  // ✅ keep auto rotation
      controls.autoRotateSpeed = 2; // adjust speed
    }
  }, []);

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
       {/* 🌍 Left Globe */}
<div className="flex flex-col items-center">
 <div className="text-sm text-gray-800 bg-gray-100 px-3 py-1 rounded-md mb-6 border border-gray-300">
  Click and drag the globe to rotate
</div>


  <Globe
    ref={globeRef}
    height={600}   // bigger globe
    width={600}
    backgroundColor="rgba(255,255,255,0)"
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    labelsData={[
      { lat: 51.5, lng: -0.1, text: "The Body Shop" },
      { lat: 25.2, lng: 55.3, text: "Cloudways" },
      { lat: 19.1, lng: 72.8, text: "Ajio" },
      { lat: 3.1, lng: 101.7, text: "AirAsia" },
    ]}
    labelText="text"
    labelSize={1.3}
    labelColor={() => "white"}
    labelDotRadius={0.6}
    labelResolution={2}
  />
</div>


        {/* 🤝 Right Logos */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Trusted by Leading Brands Worldwide
          </h2>
          <p className="text-gray-600 mb-10">
            Partnering with enterprises across industries and regions.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition"
              >
                <img
                  src={logo}
                  alt={`brand-${i}`}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
