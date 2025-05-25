"use client";

export default function TeamDescription() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Who We Are
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Agile Minds is a dynamic team of 10 passionate developers, designers, and innovators 
              united by a shared vision of creating groundbreaking solutions that shape the future.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We believe in the power of agile methodologies, collaborative thinking, and 
              cutting-edge technology to solve complex problems and deliver exceptional results.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-100 p-4 rounded-lg flex-1">
                <h3 className="font-semibold text-blue-800 mb-2">Innovation First</h3>
                <p className="text-blue-700 text-sm">We push boundaries and explore new possibilities</p>
              </div>
              <div className="bg-purple-100 p-4 rounded-lg flex-1">
                <h3 className="font-semibold text-purple-800 mb-2">Team Synergy</h3>
                <p className="text-purple-700 text-sm">Our collective intelligence drives success</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 mb-4">
              To leverage technology and creativity in building solutions that make a meaningful 
              impact on businesses and communities worldwide.
            </p>
            <div className="border-t border-blue-300 pt-4">
              <p className="text-sm text-blue-200">
                "Great things in business are never done by one person. They're done by a team of people." - Steve Jobs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}