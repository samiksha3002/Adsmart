"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const ads = [
  "/Elevator.jpg",
  "/Bus Shelter.jpg",
  "/Lift Final.jpg",
  "/LED Mobile Van1.jpg",
  "/Van.jpg",
  "/pole.jpg",
];

export default function HeroSectionWith3D() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white to-orange-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-32 pb-16 gap-10 overflow-hidden">
      {/* LEFT: TEXT CONTENT */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Outdoor Advertising <br />
          <span className="text-orange-600">With Maximum Impact</span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          From elevator panels to LED vans, our ads elevate your brand presence
          with innovation and reach.
        </motion.p>
        <motion.button
          className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Our Network
        </motion.button>
      </motion.div>

      {/* RIGHT: ADVANCED TILT & FLOATING CARDS */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 relative z-10">
        {ads.map((src, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffa500"
            glarePosition="all"
            scale={1.02}
            transitionSpeed={1500}
          >
            <motion.div
              className="backdrop-blur-md bg-white/70 border border-orange-200 p-2 rounded-xl shadow-xl relative"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                delay: i * 0.2,
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src={src}
                alt={`Ad ${i}`}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full shadow">
                Hot
              </span>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* BACKGROUND DECORATIVE LIGHTS */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-orange-100 rounded-full blur-[120px] opacity-40 animate-pulse hidden md:block"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-orange-200 rounded-full blur-[100px] opacity-40 animate-ping hidden md:block"></div>
    </section>
  );
}
