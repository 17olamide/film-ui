"use client";
import { useState } from "react";

const allMovies = [
  { title: "Avengers", year: "2019", genre: "Action", img: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "Batman", year: "2022", genre: "Action", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { title: "Joker", year: "2019", genre: "Drama", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { title: "Spider-Man", year: "2021", genre: "Action", img: "https://image.tmdb.org/t/p/w500/2DtPSyODKWXluIRV7PVru0SSzja.jpg" },
  { title: "Thor", year: "2022", genre: "Fantasy", img: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "Flash", year: "2023", genre: "Sci-Fi", img: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg" },
];

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filtered = allMovies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(search.toLowerCase()) &&
      (genre === "All" || movie.genre === genre)
    );
  });

  return (
    <div className="px-10 mt-20">

      {/* TITLE */}
      <h2 className="text-2xl font-semibold mb-6">Catalog</h2>

      {/* FILTERS */}
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search movie..."
          className="bg-white/10 px-4 py-2 rounded-lg outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="bg-white/10 px-4 py-2 rounded-lg"
          onChange={(e) => setGenre(e.target.value)}
        >
          <option>All</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Fantasy</option>
          <option>Sci-Fi</option>
        </select>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((movie, i) => (
          <div
            key={i}
            className="h-[250px] rounded-xl overflow-hidden relative group cursor-pointer"
          >

            <img
              src={movie.img}
              className="w-full h-full object-cover group-hover:scale-110 transition"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

            <p className="absolute bottom-3 left-3 text-sm opacity-0 group-hover:opacity-100">
              {movie.title}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}