// @ts-nocheck

import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-white">
      {/* Main Footer Content */}
      <div className="pt-20 pb-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  SwipeMedia
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Scaling modern brands with content that performs. Fast. Flexible. Swipe-worthy.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Mail size={16} className="text-indigo-400" />
                  <span>global@swipemedia.net</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone size={16} className="text-indigo-400" />
                  <span>+91-8860600664</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin size={16} className="text-indigo-400" />
                  <span>Sheung Wan, Hong Kong</span>
                </div>
              </div>
            </div>

            {/* Performance Marketing */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg relative">
                Performance Marketing
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Media Buying',
                  'Technology Stack',
                  'Affiliate Models',
                  'Publisher Network',
                  'Advertiser Solutions',
                  'Rich Media Marketing',
                  'Retargeting Campaigns',
                  'Social Media Marketing'
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Messaging Services */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg relative">
                Messaging Services</h3>
              <ul className="space-y-3 text-sm">
                {[
                  'Transactional A2P',
                  'Promotional A2P',
                  'Verification A2P',
                  'WhatsApp Business',
                  'RCS Messaging',
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="relative inline-block text-gray-400 transition-colors duration-200 
             hover:translate-x-1 transform
             after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
             after:bg-gradient-to-r after:from-indigo-400 after:to-pink-500 
             after:transition-all after:duration-500 hover:after:w-full
             bg-gradient-to-r from-indigo-400 via-pink-500 to-indigo-400 
             bg-[length:200%_200%] bg-clip-text 
             hover:animate-gradient"
                    >
                      {item}
                    </a>

                  </li>
                ))}
              </ul>
            </div>

            {/* Connect & CTA */}
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg relative">
                Connect With Us
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
              </h3>

              {/* Social Links */}
              <div className="flex gap-4 mb-8">
                {[
                  { Icon: Facebook, href: '#', label: 'Facebook' },
                  { Icon: Instagram, href: '#', label: 'Instagram' },
                  { Icon: Twitter, href: '#', label: 'Twitter' },
                  { Icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ Icon, href, label }, index) => (
                  <a
                    key={index}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="space-y-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-medium hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Let's Work Together
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>

                {/* Newsletter Signup */}
                <div className="pt-4">
                  <p className="text-sm text-gray-400 mb-3">Stay updated with our latest insights</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-500 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {[
                'Privacy Policy',
                'Terms of Service',
                'Disclaimer',
                'About Us',
                'Contact'
              ].map((item, index) => (
                <a
                  key={index}
                  className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 relative 
             after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 
             after:bg-indigo-400 after:transition-all after:duration-400 hover:after:w-full"
                >
                  {item}
                </a>

              ))}
            </div>

            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center lg:text-right">
              <p>© {new Date().getFullYear()} SwipeMedia. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
