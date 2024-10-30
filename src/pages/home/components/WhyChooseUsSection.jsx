import React from "react";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Expertise that Matters",
      description:
        "Our team of highly skilled developers, designers, and engineers bring a wealth of experience to the table. From web and mobile applications to custom software solutions, we have the expertise to turn your vision into reality.",
    },
    {
      title: "Tailored Solutions",
      description:
        "We understand that one size doesn't fit all. Our development approach is centered around your specific requirements, ensuring that the solutions we deliver not only meet but exceed your expectations.",
    },
    {
      title: "Innovation at the Core",
      description:
        "In the fast-paced world of technology, staying ahead requires continuous innovation. We embrace the latest trends and technologies to keep your business at the forefront of the digital landscape.",
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-10">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              {/* Feature Card */}
              <div className="flex flex-col items-center text-center p-6 w-full lg:w-[330px]">
                <h3 className="font-semibold text-[#0B0C3A] text-xl md:text-2xl mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#1D1D1D] text-sm md:text-base font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Separator Dot - Only show between items and not at the end */}
              {index < features.length - 1 && (
                <div className="hidden lg:block">
                  <span className="text-[#FF9900] text-[80px] leading-none">
                    .
                  </span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
