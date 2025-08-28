// @ts-nocheck
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Import brand logos
import brand1 from '../../assets/Dummylogos/airaisa.png';
import brand2 from '../../assets/Dummylogos/ajio.jpg';
import brand3 from '../../assets/Dummylogos/baccabucci.jpg';
import brand4 from '../../assets/Dummylogos/bestbuy.png';
import brand5 from '../../assets/Dummylogos/biba.png';
import brand6 from '../../assets/Dummylogos/bodyshop.png';
import brand7 from '../../assets/Dummylogos/bombayshavingcompany.jpg';
import brand8 from '../../assets/Dummylogos/chegg.png';
import brand9 from '../../assets/Dummylogos/cleartrip.jpg';
import brand10 from '../../assets/Dummylogos/cloudways.png';

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
  brand10
];

const TrustedBrands = () => {
  const logoRefs = useRef([]);

  useEffect(() => {
    gsap.set(logoRefs.current, { y: 30, opacity: 0 });
    gsap.to(logoRefs.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2
    });
  }, []);

  return (
    <section className="w-full bg-[#FFF2E0] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-lg uppercase font-semibold text-[#FF6600] tracking-widest mb-6">
          Trusted by Leading Brands
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              ref={el => logoRefs.current[idx] = el}
              src={logo}
              alt={`Brand ${idx + 1}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
