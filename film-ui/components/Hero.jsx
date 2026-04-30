"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-[90vh] flex items-center px-6 md:px-16 overflow-hidden">

      {/* 🌌 BACKGROUND IMAGE */}
      <img
        src="https://wallpaperaccess.com/full/329583.jpg"
        className="absolute inset-0 w-full h-full object-cover scale-110 opacity-80"
      />

      {/* 🌑 DARK GRADIENT (LEFT FOCUS FOR TEXT) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* 🔴 RED GLOW (MORE NATURAL) */}
      <div className="absolute right-[-150px] top-[50px] w-[700px] h-[700px] bg-red-600 rounded-full blur-[180px] opacity-40"></div>

      {/* ✨ EXTRA LIGHT GLOW */}
      <div className="absolute left-[20%] bottom-[-100px] w-[400px] h-[400px] bg-orange-500 rounded-full blur-[150px] opacity-20"></div>

      {/* 🎬 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl"
      >
        <p className="text-gray-400 mb-2 text-sm tracking-wide">
          Popular
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Spider-Man:<br />Far From Home
        </h1>

        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Peter Parker’s relaxing European vacation takes an unexpected turn when Nick Fury shows up...
        </p>

        <div className="flex gap-4 mt-6">

          <button className="px-6 py-3 bg-orange-500 rounded-full hover:scale-105 transition shadow-lg">
            ▶ Watch Now
          </button>

          <button className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition">
            + My List
          </button>

        </div>
      </motion.div>

    </div>
  );
}