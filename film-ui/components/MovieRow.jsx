"use client";
import { motion } from "framer-motion";

export default function MovieRow({ title, movies }) {
  return (
    <div className="px-6 md:px-10 mt-16">

      <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4">

        {movies.map((movie, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="min-w-[140px] md:min-w-[180px] h-[220px] md:h-[260px] rounded-xl overflow-hidden relative cursor-pointer shadow-lg"
          >

            <img
              src={movie.img}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition"></div>

            <p className="absolute bottom-3 left-3 text-xs md:text-sm opacity-0 hover:opacity-100 transition">
              {movie.title}
            </p>

          </motion.div>
        ))}

      </div>
    </div>
  );
}