"use client";

import { motion } from "framer-motion";
import React from "react";

const clients = [
  { id: 1, name: "Mahindra", logo: "/Mahindra.png" },
  { id: 2, name: "McDonald's", logo: "/mc donald.png" },
  { id: 3, name: "MP Birla Cement", logo: "/mp birla cement.png" },
  { id: 4, name: "Patanjali", logo: "/patanjali.png" },
  { id: 5, name: "Rokde Jewellers", logo: "/rokde jewellers.png" },
  { id: 6, name: "Samsung", logo: "/samsung.png" },
];

export default function ClientLogos() {
  return (
    <section className="relative bg-gradient-to-b from-white to-orange-50 py-24 overflow-hidden">
      {/* Decorative SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-48 -z-10"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#FF6F00"
          fillOpacity="0.1"
          d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,170.7C672,139,768,85,864,74.7C960,64,1056,96,1152,117.3C1248,139,1344,149,1392,154.7L1440,160L1440,0L0,0Z"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-orange-600 mb-4 tracking-wide"
        >
          Our Esteemed Clients
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We proudly collaborate with these amazing companies to deliver
          outstanding results.
        </motion.p>

        {/* Single Infinite Marquee Row for all devices */}
        <div className="relative overflow-hidden w-full py-4">
          <div className="marquee-track flex gap-16">
            {[...clients, ...clients].map(({ id, name, logo }, idx) => (
              <div
                key={`${id}-${idx}`}
                className="bg-white/70 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-md cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
                title={name}
              >
                <img
                  src={logo}
                  alt={name}
                  className="h-14 md:h-16 w-auto mx-auto drop-shadow-md"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <p className="mt-12 text-md text-gray-700">
          Want to see your brand here?{" "}
          <a
            href="#contact"
            className="text-orange-600 underline hover:text-orange-700"
          >
            Get in touch
          </a>
        </p>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        .marquee-track {
          animation: scroll-left 25s linear infinite;
          width: max-content;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
