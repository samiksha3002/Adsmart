"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🧭",
      title: "Fast Turnaround",
      text: "We deliver your ads quickly and efficiently, ensuring your campaign stays on track.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: "📈",
      title: "Prime Spots with Maximum Exposure",
      text: "Strategically placed boards to capture audience attention at the right place and time.",
      color: "bg-orange-50 text-orange-500",
    },
    {
      icon: "🛠️",
      title: "Durable & Creative Boards",
      text: "Built to last with a creative touch that sets your brand apart from the rest.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: "🤝",
      title: "Smart Advertising Within Budget",
      text: "Work with a team that is focused on delivering the best ad solutions for your brand.",
      color: "bg-orange-50 text-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-800 mb-8 relative"
            variants={fadeUp}
            custom={0}
          >
            Why Choose Us?
            <span className="block w-16 h-1 bg-orange-500 mt-2"></span>
          </motion.h2>

          <div className="space-y-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 1}
                className={`flex items-start p-4 rounded-xl shadow-md transform transition-transform hover:scale-[1.03] ${item.color}`}
              >
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-lg border-4 border-orange-200">
            <img
              src="/testimonal.jpg"
              alt="Why Choose Us"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
