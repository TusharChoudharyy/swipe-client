// @ts-nocheck
import React, { useState } from "react";
import { Menu, X, Home, Users, ShoppingCart, Target, Share2, Smartphone, MessageSquare, CheckCircle, PhoneCall, Rss, Info, FileText, Mail, MapPin, Globe, Clock } from "lucide-react";
import logo from "../assets/swipelogo.png"

const menuItems = {
  performance: [
    { icon: Users, title: "Advertiser", desc: "Grow your brand with ad campaigns", link: "/advertiser" },
    { icon: ShoppingCart, title: "Publisher", desc: "Monetize traffic & content", link: "/publishers" },
    { icon: Target, title: "Affiliate Models", desc: "CPA, CPL & Rev-share models", link: "/affiliate-models" },
    { icon: Share2, title: "Media Buying", desc: "Scale with media placements", link: "/media-buying" },
    { icon: Smartphone, title: "Retargeting", desc: "Re-engage lost customers", link: "/retargeting" },
    { icon: MessageSquare, title: "Rich Media Marketing", desc: "Interactive ad creatives", link: "/rich-media-marketing" },
    { icon: PhoneCall, title: "Social Media Marketing", desc: "Boost via social platforms", link: "/smm" },
    { icon: Rss, title: "Technology", desc: "Smart tools & analytics", link: "/technology" },
  ],
  messaging: [
    { icon: MessageSquare, title: "Transactional A2P", desc: "Critical service notifications", link: '/transactional-messaging' },
    { icon: MessageSquare, title: "Promotional A2P", desc: "Bulk promotional campaigns", link: '/promotional-messaging' },
    { icon: CheckCircle, title: "Verification A2P", desc: "OTP & secure verification", link: '/verification-messaging' },
    { icon: PhoneCall, title: "WhatsApp Business", desc: "Engage customers on WhatsApp", link: '/whatsapp-business' },
    { icon: Smartphone, title: "RCS Messaging", desc: "Rich media SMS replacement", link: '/rcs-messaging' },
  ],
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState(null);

  return (
    <>
     {/* <div className="bg-[#d9e0fc] text-[#183ec2] py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Mumbai, India | New York, USA</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Support Available</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Global Reach</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-[#183ec2]">📧 hello@swipe.com | 📞 +1-800-SWIPE</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src={logo} 
              alt="Swipe Logo" 
              className="h-10 w-auto transition-transform duration-200 hover:scale-105" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="/" 
              className="text-gray-700 hover:text-[#183ec2] transition-colors duration-200 cursor-pointer font-medium"
            >
              Home
            </a>

            {/* Performance Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:[#183ec2] transition-colors duration-200 cursor-pointer font-medium"
                onMouseEnter={() => setOpenMega("performance")}
                onMouseLeave={() => setOpenMega(null)}
              >
                Performance & Affiliate Marketing
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-[700px] bg-white shadow-xl rounded-lg border border-gray-100 p-6 grid grid-cols-2 gap-6 transition-all duration-300 ease-in-out transform ${
                  openMega === "performance" 
                    ? "opacity-100 translate-y-0 visible" 
                    : "opacity-0 -translate-y-2 invisible"
                }`}
                onMouseEnter={() => setOpenMega("performance")}
                onMouseLeave={() => setOpenMega(null)}
              >
                {menuItems.performance.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group/item"
                  >
                    <a href={item.link} className="flex items-start space-x-3 w-full">
                    <item.icon className="w-6 h-6 text-[#183ec2] group-hover/item:scale-110 transition-transform duration-200" />
                    <div>
                      <p className="font-medium text-gray-800 group-hover/item:text-[#183ec2] transition-colors duration-200">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-200">
                        {item.desc}
                      </p>
                    </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Messaging Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-[#183ec2] transition-colors duration-200 cursor-pointer font-medium"
                onMouseEnter={() => setOpenMega("messaging")}
                onMouseLeave={() => setOpenMega(null)}
              >
                Swipe Messaging
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-[500px] bg-white shadow-xl rounded-lg border border-gray-100 p-6 grid grid-cols-1 gap-4 transition-all duration-300 ease-in-out transform ${
                  openMega === "messaging" 
                    ? "opacity-100 translate-y-0 visible" 
                    : "opacity-0 -translate-y-2 invisible"
                }`}
                onMouseEnter={() => setOpenMega("messaging")}
                onMouseLeave={() => setOpenMega(null)}
              >
                {menuItems.messaging.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group/item"
                  >
                    <a href={item.link} className="flex items-start space-x-3 w-full">
                    <item.icon className="w-6 h-6 text-[#183ec2] group-hover/item:scale-110 transition-transform duration-200" />
                    <div>
                      
                      <p className="font-medium text-gray-800 group-hover/item:text-[#183ec2] transition-colors duration-200">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500 group-hover/item:text-gray-600 transition-colors duration-200">
                        {item.desc}
                      </p>
                    </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="/about" 
              className="text-gray-700 hover:text-[#183ec2] transition-colors duration-200 cursor-pointer font-medium"
            >
              About
            </a>
            {/* <a 
              href="#blogs" 
              className="text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer font-medium"
            >
              Blogs
            </a> */}
            <a 
              href="/contact" 
              className="text-gray-700 hover:text-[#183ec2] transition-colors duration-200 cursor-pointer font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`} 
                />
                <X 
                  className={`w-6 h-6 absolute transition-all duration-300 ${
                    mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-3">
          <a 
            href="#" 
            className="block py-2 text-gray-700 hover:text-[#183ec2] transition-colors duration-200 cursor-pointer font-medium"
          >
            Home
          </a>
          
          <details className="group">
            <summary className="cursor-pointer py-2 text-gray-700 hover:text-[#183ec2] transition-colors duration-200 font-medium list-none">
              <span className="flex items-center justify-between">
                Performance & Affiliate Marketing
                <span className="transform transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </span>
            </summary>
            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
              {menuItems.performance.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group/item"
                >
                  <item.icon className="w-4 h-4 text-[#183ec2] group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </details>
          
          <details className="group">
            <summary className="cursor-pointer py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium list-none">
              <span className="flex items-center justify-between">
                Swipe Messaging
                <span className="transform transition-transform duration-200 group-open:rotate-180">
                  ▼
                </span>
              </span>
            </summary>
            <div className="ml-4 mt-2 space-y-2 animate-fadeIn">
              {menuItems.messaging.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-3 py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group/item"
                >
                  <item.icon className="w-4 h-4 text-red-500 group-hover/item:scale-110 transition-transform duration-200" />
                  <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-200">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </details>
          
          <a 
            href="#" 
            className="block py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer font-medium"
          >
            About
          </a>
          <a 
            href="#" 
            className="block py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer font-medium"
          >
            Blogs
          </a>
          <a 
            href="#" 
            className="block py-2 text-gray-700 hover:text-red-500 transition-colors duration-200 cursor-pointer font-medium"
          >
            Contact
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </nav>
    </>
  );
};

export default Navbar;
