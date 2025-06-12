"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    title: "Interior Designer, Mumbai",
    message:
      "Their lighting solutions completely transformed my client's luxury villa. Exceptional service and attention to detail!",
    image: "/testimonials/person1.jpg",
  },
  {
    name: "Priya Kapoor",
    title: "Homeowner, Delhi",
    message:
      "The automation setup has made my life so much easier. I control everything from my phone, even when I’m traveling!",
    image: "/testimonials/person2.jpg",
  },
  {
    name: "Rahul Verma",
    title: "Retail Architect, Bangalore",
    message:
      "Impressive execution of commercial lighting for our showroom. The ambiance draws customers in naturally.",
    image: "/testimonials/person3.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 bg-white text-gray-800 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Hear how we’ve helped clients illuminate their world — both practically and beautifully.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto z-10 relative">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative bg-white border border-orange-200 rounded-xl shadow-md p-6 md:w-1/3 w-full text-center hover:shadow-orange-300 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-orange-400"
            />
            <p className="text-gray-700 italic">“{item.message}”</p>
            <h4 className="mt-4 text-lg font-semibold text-orange-600">
              {item.name}
            </h4>
            <p className="text-sm text-gray-500">{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Glowing Accent (in orange) */}
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl pointer-events-none z-0" />
    </section>
  );
}
