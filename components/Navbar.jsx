export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-6">

      <h1 className="text-xl font-bold tracking-widest">
         FILMS
      </h1>

      <div className="flex gap-8 text-gray-400">
        <span className="hover:text-white cursor-pointer">Popular</span>
        <span className="hover:text-white cursor-pointer">Films</span>
        <span className="hover:text-white cursor-pointer">TV Series</span>
        <span className="hover:text-white cursor-pointer">Cartoons</span>
      </div>

      <div className="w-8 h-8 bg-gray-600 rounded-full"></div>

    </div>
  );
}