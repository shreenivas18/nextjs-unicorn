"use client";

export default function TeamHero() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Agile Minds
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">
          Building Tomorrow's Solutions Today
        </p>
        <div className="flex justify-center items-center space-x-4 text-lg">
          <span className="bg-blue-600 px-4 py-2 rounded-full">10 Innovators</span>
          <span className="bg-purple-600 px-4 py-2 rounded-full">One Vision</span>
          <span className="bg-indigo-600 px-4 py-2 rounded-full">Infinite Possibilities</span>
        </div>
      </div>
    </section>
  );
}