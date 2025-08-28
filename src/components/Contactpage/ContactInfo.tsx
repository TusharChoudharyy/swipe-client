// @ts-nocheck
// src/components/ContactInfo.jsx
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 md:px-20 text-white relative overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute -top-32 -left-20 w-[250px] h-[250px] bg-indigo-500/30 blur-[150px] rounded-full z-0" />
      <div className="absolute -bottom-40 -right-20 w-[300px] h-[300px] bg-pink-500/30 blur-[150px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT: Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Let’s Connect <span className="text-indigo-400">and Collaborate</span>
          </h2>
          <p className="text-white/70 text-base mb-10 max-w-lg">
            Don’t hesitate to reach out — whether it’s a project inquiry or you’re just curious about what we do.
          </p>

          <div className="grid gap-6">
            {/* Email */}
            <div className="flex items-start gap-4 group">
              <Mail className="text-indigo-400 w-6 h-6 mt-1 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-white font-semibold">Email us</p>
                <a href="mailto:hello@swipemedia.com" className="text-white/70 group-hover:text-white transition">
                  hello@swipemedia.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <Phone className="text-indigo-400 w-6 h-6 mt-1 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-white font-semibold">Call us</p>
                <a href="tel:+918888888888" className="text-white/70 group-hover:text-white transition">
                  +91 88888 88888
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 group">
              <MapPin className="text-indigo-400 w-6 h-6 mt-1 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-white font-semibold">Visit us</p>
                <p className="text-white/70 group-hover:text-white transition">
                  Swipe Media HQ, HSR Layout<br /> Bengaluru, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Vector Illustration */}
        <div className="flex justify-center md:justify-end relative">
          <div className="w-full max-w-md transform hover:scale-105 transition-transform duration-500">
            {/* <img
              src={contactVector}
              alt="Contact Illustration"
              className="w-full object-contain drop-shadow-xl rounded-2xl"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
