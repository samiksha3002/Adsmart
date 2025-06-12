import Image from "next/image";
import { motion } from "framer-motion";

export default function AgencySection() {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Image with zoom-out animation */}
        <motion.div
          className="w-full max-w-md order-1 md:order-1"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={"/agency-illustration.svg"}
            alt="Agency Illustration"
            layout="responsive"
            width={512}
            height={512}
            priority
          />
        </motion.div>

        {/* Right Content with slide-in from right animation */}
        <motion.div
          className="max-w-xl order-2 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ad<span className="text-orange-500">Smart</span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We believe in the power of data. Our analytics-driven approach
            allows us to make informed decisions and optimize your marketing
            efforts for maximum ROI. Let's turn your data into actionable
            insights. Tailored solutions for your business.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded shadow-md transition">
            Read more
          </button>
        </motion.div>
      </div>
    </section>
  );
}
