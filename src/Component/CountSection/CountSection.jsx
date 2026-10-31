// import React from 'react';
const stats = [
  {
    id: 1,
    value: "50K+",
    label: "Active Users",
  },
  {
    id: 2,
    value: "200+",
    label: "Premium Tools",
  },
  {
    id: 3,
    value: "4.9",
    label: "Rating",
  },
];
const CountSection = () => {
    return (
        <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center py-4 ${
                index !== 2
                  ? "sm:border-r sm:border-white/30"
                  : ""
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                {stat.value}
              </h2>

              <p className="mt-2 text-base text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default CountSection;