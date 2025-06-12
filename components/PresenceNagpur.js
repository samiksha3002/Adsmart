import React from "react";
import { Building2, Landmark, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function PresenceNagpur() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-24 -left-20 w-[300px] h-[300px] bg-orange-100 rounded-full blur-3xl opacity-40 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[150px] h-[150px] bg-orange-100 rounded-full blur-2xl opacity-30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-xl p-6"
        >
          <img
            src="/map-locations.png"
            alt="Nagpur Map"
            className="rounded-xl object-contain w-full"
          />

          {/* Map pin animation */}
          <div className="absolute top-[54%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-ping"></div>
            <div className="w-4 h-4 bg-orange-600 rounded-full border-2 border-white"></div>
          </div>

          <p className="text-sm text-center text-gray-600 mt-4">
            Presence in{" "}
            <span className="text-orange-600 font-semibold">
              Nagpur, Maharashtra
            </span>
          </p>
        </motion.div>

        {/* RIGHT SIDE: Text + Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Powerfully Present Across <br />
            <span className="text-orange-600">Nagpur</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our active visibility is spread across top residential, commercial,
            and locality zones in Nagpur.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard
              icon={<Building2 size={28} />}
              number="90+"
              label="Associated Societies"
            />
            <StatCard
              icon={<Landmark size={28} />}
              number="30+"
              label="Commercial Spaces"
            />
            <StatCard
              icon={<MapPin size={28} />}
              number="40+"
              label="Nagpur Localities"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon, number, label }) {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left bg-gray-50 p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <div className="text-orange-600 mb-2">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900">{number}</h3>
      <p className="text-gray-700 font-medium">{label}</p>
    </div>
  );
}
