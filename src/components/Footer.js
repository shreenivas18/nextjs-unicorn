"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Agile Minds
        </h3>
        <p className="text-gray-400 mb-4">
          Building the future, one innovative solution at a time.
        </p>
        <div className="border-t border-gray-800 pt-4">
          <p className="text-gray-500 text-sm">
            © 2024 Agile Minds Team. Ready to create something extraordinary.
          </p>
        </div>
      </div>
    </footer>
  );
}