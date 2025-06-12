// components/MyPublished.js
import React from "react";

const publishedItems = [
  { id: 1, image: "/works/work1.jpg", title: "Smart LED Campaign" },
  { id: 2, image: "/works/work2.jpg", title: "Billboard for Retail Brand" },
  { id: 3, image: "/works/work3.jpg", title: "Digital Kiosk Placement" },
  { id: 4, image: "/works/work4.jpg", title: "Society Board Publishing" },
  { id: 5, image: "/works/work5.jpg", title: "Event Advertising" },
  { id: 6, image: "/works/work6.jpg", title: "Mall Campaign" },
];

export default function MyPublished() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Published Work</h2>
        <p className="text-orange-600 mb-12 text-lg font-medium">
          Showcasing live campaigns, real placements, and impactful visibility.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedItems.map((item, index) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
