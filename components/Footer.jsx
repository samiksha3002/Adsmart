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
    <footer className="relative bg-gradient-to-tr from-[#111111] via-[#1a1a1a] to-[#111111] text-gray-300 py-16 px-6 sm:px-10 md:px-20 overflow-hidden select-none">
      {/* Dotted Background Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(250, 102, 0, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          zIndex: 0,
        }}
      ></div>

      {/* Glowing Line Animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FA6600] to-transparent animate-shimmer z-10" />

      {/* Content Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 z-20">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-start space-y-6">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={130}
            height={130}
            className="brightness-125 object-contain"
            priority
          />
          <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
            Premium outdoor advertising solutions designed to illuminate your
            brand in the urban landscape.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#FA6600] tracking-wide mb-5 uppercase">
            Quick Links
          </h4>
          <ul className="flex flex-col space-y-3 text-gray-400 text-sm">
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

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#FA6600] tracking-wide mb-5 uppercase">
            Contact
          </h4>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="flex items-start gap-2">
              📍 <span>123 Outdoor Ave, Dubai, UAE</span>
            </li>
            <li className="flex items-start gap-2">
              📞 <span>+971 123 4567</span>
            </li>
            <li className="flex items-start gap-2">
              📧 <span>contact@outdoorad.com</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#FA6600] tracking-wide mb-5 uppercase">
            Follow Us
          </h4>
          <div className="flex space-x-4 sm:space-x-5">
            {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="group bg-[#FA6600]/20 rounded-full p-3 shadow-md shadow-[#FA6600]/40 text-[#FA6600] hover:text-white hover:bg-[#FA6600] transition-all duration-300 flex items-center justify-center scale-100 hover:scale-110"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:drop-shadow-[0_0_6px_rgba(250,102,0,0.8)]" />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-14 pt-6 border-t border-gray-800 text-center text-xs text-gray-500 relative z-20">
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
