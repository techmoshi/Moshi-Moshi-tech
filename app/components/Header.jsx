export default function Header() {
  return (
    <header className="py-6 text-center">
      <h1 className="text-5xl font-bold text-teal-400">Moshi Moshi</h1>
      <h2 className="text-3xl font-bold">Dev Team</h2>
      <p className="mt-4 text-lg text-gray-300">
        Building transformative digital experiences for tomorrow's enterprises
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded">Our Projects</button>
        <button className="bg-gray-800 border border-teal-500 px-6 py-2 rounded">Meet The Team</button>
      </div>
    </header>
  );
}