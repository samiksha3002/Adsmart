"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Laxmi Mehta",
    title: "Interior Designer, Nagpur",
    message:
      "Their lighting solutions completely transformed my client's luxury villa. Exceptional service and attention to detail!",
    image: "/person.jpeg",
  },
  {
    name: "Priya Kapoor",
    title: "Homeowner, Nagpur",
    message:
      "The automation setup has made my life so much easier. I control everything from my phone, even when I’m traveling!",
    image: "/person2.jpeg",
  },
  {
    name: "Rahul Verma",
    title: "Retail Architect, Nagpur",
    message:
      "Impressive execution of commercial lighting for our showroom. The ambiance draws customers in naturally.",
    image: "/person3.jpeg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 md:px-16 bg-white text-gray-800 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Hear how we’ve helped clients illuminate their world — both
          practically and beautifully.
        </p>
      </motion.div>

      {/* Auto-Sliding Testimonial */}
      <div className="relative w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-orange-100 rounded-xl shadow-md p-8 text-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-orange-400 object-cover"
            />
            <p className="text-gray-700 italic mb-4 text-base sm:text-lg">
              “{testimonials[index].message}”
            </p>
            <h4 className="text-lg font-semibold text-orange-600">
              {testimonials[index].name}
            </h4>
            <p className="text-sm text-gray-500">{testimonials[index].title}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                index === i ? "bg-orange-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Orange Blur */}
      <div className="absolute -bottom-20 right-0 sm:right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  );
}
