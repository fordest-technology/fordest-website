import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      image: "/icons/mdi_business-outline.svg",
      title: "Expertise",
      description:
        "Our team of skilled professionals brings a wealth of experience to the table, ensuring that your projects are in capable hands.",
    },
    {
      image: "/icons/ci_building-01.svg",
      title: "Innovation",
      description:
        "We stay at the forefront of technological advancements, incorporating the latest trends and methodologies into our services to keep your business ahead of the curve.",
    },
    {
      image: "/icons/person1212.svg",
      title: "Client-Centric Approach",
      description:
        "We place our clients at the heart of everything we do, tailoring our services to meet your specific needs and goals.",
    },
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 mb-10 md:mb-16">
        <h2 className="text-[#0B0C3A] text-3xl md:text-4xl font-bold text-center px-4">
          Why Choose Fordest Technologies?
        </h2>
        <div className="h-1 w-24 md:w-36 bg-[#0B0C3A] rounded-full"></div>
      </div>

      {/* Features Container */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-start text-start p-6 border border-[#BDBDBD] rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={feature.image}
                alt={feature.title}
                width={40}
                className="mb-4"
              />
              <h3 className="font-semibold text-[#0B0C3A] text-xl md:text-2xl mb-2">
                {feature.title}
              </h3>
              <p className="text-[#1D1D1D] text-sm md:text-base font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
