"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-white text-gray-800 py-20 px-6 sm:px-10 md:px-20 overflow-hidden select-none">
      {/* Subtle Pattern Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(250, 102, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          zIndex: 0,
        }}
      ></div>

      {/* Glowing Orange Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FA6600] to-transparent animate-shimmer z-10" />

      {/* Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
        {/* Logo & Tagline */}
        <div className="flex flex-col space-y-6">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={130}
            height={130}
            className="object-contain rounded-md"
            priority
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            Premium outdoor advertising solutions designed to illuminate your
            brand in the urban landscape.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#FA6600] mb-5 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-700">
            {["Home", "Services", "Portfolio", "Contact"].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-[#FA6600] transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-lg font-semibold text-[#FA6600] mb-5 uppercase tracking-wide">
            Contact
          </h4>
          <ul className="text-sm text-gray-700 space-y-4">
            <li className="flex items-start gap-2">
              📍
              <span>
                Plot No 555-B, Wathoda Road, Hiwari Layout,
                <br />
                Near Power House, Nagpur - 440008
              </span>
            </li>
            <li className="flex items-start gap-2">
              📞 <span>7709006859 , 7410088817</span>
            </li>
            <li className="flex items-start gap-2">
              📧 <span>marketing.adssmart@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div>
          <h4 className="text-lg font-semibold text-[#FA6600] mb-5 uppercase tracking-wide">
            Follow Us
          </h4>
          <div className="flex space-x-4">
            {[
              { href: "https://facebook.com", icon: FaFacebookF },
              {
                href: "https://www.instagram.com/adssmartoutdooradvertising?igsh=YmI5ODUxemtvY2pp ",
                icon: FaInstagram,
              },
              {
                href: "https://www.linkedin.com/in/adssmart-outdooradvertising-239a7936b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                icon: FaLinkedinIn,
              },
              { href: "https://twitter.com", icon: FaTwitter },
            ].map(({ href, icon: Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#FA6600]/10 hover:bg-[#FA6600] text-[#FA6600] hover:text-white transition-all duration-300 p-3 rounded-full shadow-sm shadow-[#FA6600]/20 hover:shadow-md hover:shadow-[#FA6600]/40"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:drop-shadow-[0_0_6px_rgba(250,102,0,0.8)]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-20 mt-16 border-t border-gray-200 pt-6 text-center text-xs text-gray-500">
        © 2025 Outdoor Advertising Co. All rights reserved.
      </div>

      {/* Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -150% 0;
          }
          100% {
            background-position: 150% 0;
          }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 4s linear infinite;
        }
      `}</style>
    </footer>
  );
}
