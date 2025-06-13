"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    src: "/hero/elevator-panel.jpg",
    alt: "Elevator Panels",
    top: "8%",
    left: "5%",
    rotate: "-8deg",
  },
  {
    src: "/hero/bus-shelter.jpg",
    alt: "Bus Shelters",
    top: "20%",
    left: "55%",
    rotate: "6deg",
  },
  {
    src: "/hero/led-van.jpg",
    alt: "LED Van",
    top: "58%",
    left: "8%",
    rotate: "-5deg",
  },
  {
    src: "/hero/mobile-led.jpg",
    alt: "Mobile LED Van",
    top: "50%",
    left: "60%",
    rotate: "10deg",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 flex flex-col-reverse md:flex-row items-center px-6 md:px-20 py-20 gap-10 overflow-hidden">
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Outdoor Advertising <br />
          <span className="text-orange-600">That Captivates</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
          We offer dynamic ad spaces like elevator panels, bus shelters, LED
          vans, and mobile LED vans to showcase your brand in the brightest
          light.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold shadow-lg">
          Discover Our Services
        </button>
      </motion.div>

      {/* RIGHT IMAGE COLLAGE */}
      <div className="flex-1 w-full max-w-3xl relative h-[450px] sm:h-[550px] md:h-[600px]">
        {services.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.3,
              duration: 0.7,
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{
              scale: 1.05,
              rotate: "0deg",
              zIndex: 10,
              boxShadow: "0 25px 40px rgba(0,0,0,0.3)",
            }}
            className="absolute w-[150px] sm:w-[180px] md:w-[220px] rounded-2xl overflow-hidden shadow-lg"
            style={{
              top: img.top,
              left: img.left,
              transform: `rotate(${img.rotate})`,
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={220}
              height={300}
              className="object-cover w-full h-auto rounded-2xl"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
