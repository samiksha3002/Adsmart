"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const lightingCategories = [
  {
    title: "Lift Panels",
    description: "Target Where Attention Is Undivided.",
    img: "/Lift Final.jpg",
    details:
      "Capture eyeballs in residential and commercial buildings with lift panel branding. Ideal for hyperlocal targeting, these ads deliver high recall in closed, captive environments.",
  },
  {
    title: "Bus Shelter Advertising",
    description: "Make Your Brand a Daily Landmark",
    img: "/Bus Shelter.jpg",
    details:
      "With long exposure times and high visibility on busy roads, bus shelters are a powerful way to reach pedestrians and commuters alike. A great blend of frequency and reach.",
  },
  {
    title: " LED Screen Advertising",
    description: "Dynamic, Bright, and Impossible to Ignore",
    img: "/T3.jpg",
    details:
      "Our high-definition LED screens grab attention with motion visuals, perfect for running promotions, videos, and time-sensitive campaigns. Available in prime urban locations.",
  },
  {
    title: " LED Mobile Van Advertising",
    description: "Go Where Your Audience Goes",
    img: "/LED Mobile Van1.jpg",
    details:
      "Take your message on the move with our LED-equipped mobile vans. These moving billboards display vibrant digital ads, allowing flexible, multi-location coverage for events, promotions, and city-wide campaigns.",
  },
  {
    title: " Mobile Van Branding",
    description: "Mobile Impact with Traditional Strength",
    img: "/Van.jpg",
    details:
      "Our branded mobile vans are a proven method for high-reach campaigns, especially in local markets and rural areas. Fully customizable and route-specific, they ensure your brand travels far and wide.",
  },
];

function AmbientParticles() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 0.2 }}
      transition={{ yoyo: Infinity, duration: 6 }}
      style={{ mixBlendMode: "screen" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid meet"
      >
        {[...Array(15)].map((_, i) => {
          const cx = Math.random() * 800;
          const cy = Math.random() * 600;
          const r = 8 + Math.random() * 12;
          const delay = Math.random() * 6;
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="rgba(255,165,0,0.1)"
              animate={{ cy: [cy, cy + 40, cy], opacity: [0.2, 0.5, 0.2] }}
              transition={{
                repeat: Infinity,
                duration: 8,
                delay,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

export default function LightingSolutions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (activeIndex !== null) {
        if (e.key === "ArrowRight") {
          setActiveIndex((prev) =>
            prev === lightingCategories.length - 1 ? 0 : prev + 1
          );
        }
        if (e.key === "ArrowLeft") {
          setActiveIndex((prev) =>
            prev === 0 ? lightingCategories.length - 1 : prev - 1
          );
        }
      }
    },
    [activeIndex]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative w-full px-4 sm:px-6 md:px-12 py-16 sm:py-20 bg-gradient-to-br from-white via-yellow-50 to-orange-50 overflow-hidden">
      <AmbientParticles />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-black drop-shadow-[0_0_20px_rgba(255,165,0,0.6)]"
      >
        Our Media Solutions
      </motion.h2>

      <div className="flex flex-col gap-16 max-w-7xl mx-auto">
        {lightingCategories.map((item, i) => {
          const isEven = i % 2 === 1;
          return (
            <motion.div
              key={item.title}
              className={`flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row-reverse" : ""
              } gap-8 sm:gap-10 md:gap-12`}
              initial={{ opacity: 0, x: isEven ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              onClick={() => setActiveIndex(i)}
            >
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg border border-orange-300 hover:shadow-orange-400 transition-shadow duration-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-60 sm:h-72 md:h-80"
                  loading="lazy"
                />
              </div>

              <div className="w-full md:w-1/2 text-left px-2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-black">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  {item.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(i);
                  }}
                  className="mt-5 inline-block px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-yellow-400 to-white text-black font-semibold hover:brightness-110 transition"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              className="relative max-w-4xl w-full bg-gradient-to-br from-white via-orange-50 to-yellow-100 rounded-3xl shadow-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? lightingCategories.length - 1
                      : activeIndex - 1
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-400 hover:bg-orange-600 p-2 sm:p-3 rounded-full text-white"
              >
                ‹
              </button>

              <img
                src={lightingCategories[activeIndex].img}
                alt={lightingCategories[activeIndex].title}
                className="rounded-2xl max-h-[300px] sm:max-h-[400px] w-full md:w-1/2 object-cover"
              />

              <div className="flex flex-col justify-center w-full md:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-400 to-black">
                  {lightingCategories[activeIndex].title}
                </h3>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  {lightingCategories[activeIndex].details}
                </p>
                <button
                  onClick={() => setActiveIndex(null)}
                  className="mt-6 px-5 py-2 bg-gradient-to-r from-orange-500 via-yellow-400 to-white rounded-full font-semibold text-black hover:brightness-110 transition"
                >
                  Close
                </button>
              </div>

              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === lightingCategories.length - 1
                      ? 0
                      : activeIndex + 1
                  )
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-400 hover:bg-orange-600 p-2 sm:p-3 rounded-full text-white"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
