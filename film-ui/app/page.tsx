import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import FeatureCards from "../components/FeatureCards";
import Catalog from "../components/Catalog";

const popular = [
  { title: "Avengers", img: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg" },
  { title: "Batman", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { title: "Joker", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
  { title: "Spider-Man", img: "https://image.tmdb.org/t/p/w500/2DtPSyODKWXluIRV7PVru0SSzja.jpg" },
  { title: "Black Panther", img: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
  { title: "Doctor Strange", img: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg" },
  { title: "Captain America", img: "https://image.tmdb.org/t/p/w500/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg" },
];

const trending = [
  { title: "Thor", img: "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg" },
  { title: "Flash", img: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg" },
  { title: "Hulk", img: "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg" },
  { title: "Iron Man", img: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },
  { title: "Aquaman", img: "https://image.tmdb.org/t/p/w500/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg" },
  { title: "Wonder Woman", img: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg" },
  { title: "Superman", img: "https://image.tmdb.org/t/p/w500/7rIPjn5TUK04O25ZkMyHrGNPgLx.jpg" },
];

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      <FeatureCards />

      <MovieRow title="Popular" movies={popular} />
      <MovieRow title="Trending" movies={trending} />

      <Catalog />
    </div>
  );
}