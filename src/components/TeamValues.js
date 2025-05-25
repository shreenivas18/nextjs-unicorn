"use client";

export default function TeamValues() {
  const values = [
    {
      title: "Agility",
      description: "We adapt quickly to change and embrace iterative development",
      icon: "⚡"
    },
    {
      title: "Innovation",
      description: "We constantly seek creative solutions and cutting-edge approaches",
      icon: "💡"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and collective intelligence",
      icon: "🤝"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}