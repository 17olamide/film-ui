export default function FeatureCards() {
  return (
    <div className="px-10 mt-20 grid grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Top Rated</h3>
        <p className="text-gray-300 text-sm">
          Explore the highest rated movies of all time.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-2">Genres</h3>
        <p className="text-gray-300 text-sm">
          Browse movies by your favorite genres.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
        <h3 className="text-lg font-semibold mb-2">New Releases</h3>
        <p className="text-gray-300 text-sm">
          Stay updated with the latest movies.
        </p>
      </div>

    </div>
  );
}