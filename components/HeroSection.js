import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/Temp1.jpg", "/Temp2.jpg", "/Temp1.jpg", "/Temp2.jpg"];

export default function HomeSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-tr from-orange-50 via-white to-orange-100 flex flex-col md:flex-row items-center px-8 md:px-20 py-20 overflow-hidden">
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Illuminate Your World <br />
          <span className="text-orange-600">With Brilliance</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover stunning lighting designs that elevate any space with style,
          innovation, and warmth.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 transition text-white px-8 py-4 rounded-full font-semibold shadow-lg">
          Explore Collection
        </button>
      </motion.div>

      {/* RIGHT IMAGES COLLAGE */}
      <div className="flex-1 relative w-full max-w-3xl mt-12 md:mt-0">
        {/* Main floating container */}
        <div className="relative w-full h-[400px] md:h-[500px]">
          {images.map((src, i) => (
            <FloatingImage key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingImage({ src, index }) {
  // Positions & rotation for a nice collage effect
  const positions = [
    { top: "5%", left: "15%", rotate: "-6deg", scale: 1 },
    { top: "30%", left: "55%", rotate: "10deg", scale: 1.1 },
    { top: "60%", left: "25%", rotate: "-4deg", scale: 0.9 },
    { top: "45%", left: "70%", rotate: "8deg", scale: 1 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 70,
      }}
      style={{
        position: "absolute",
        top: positions[index].top,
        left: positions[index].left,
        rotate: positions[index].rotate,
        scale: positions[index].scale,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        boxShadow: "0 25px 40px rgba(0,0,0,0.3)",
      }}
    >
      <Image
        src={src}
        alt={`Lighting design ${index + 1}`}
        width={250}
        height={350}
        objectFit="cover"
        priority={index === 0}
        className="rounded-lg"
      />
    </motion.div>
  );
}
