"use client";

export default function TeamMembers() {
  const roles = [
    "Full-Stack Developer", "Frontend Specialist", "Backend Engineer", "UI/UX Designer", 
    "DevOps Engineer", "Product Manager", "Data Scientist", "Mobile Developer", 
    "QA Engineer", "Tech Lead"
  ];

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          10 talented individuals, each bringing unique expertise to our collective vision
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {roles.map((role, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-800 to-purple-800 p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                {index + 1}
              </div>
              <h3 className="font-semibold text-sm mb-2">{role}</h3>
              <p className="text-xs text-gray-300">Team Member #{index + 1}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Ready to build something amazing together?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}