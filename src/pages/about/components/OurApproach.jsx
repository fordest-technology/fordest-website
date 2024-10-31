import React from "react";

const OurApproach = () => {
  return (
    <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto mb-24 mt-14">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-start items-center mb-8 lg:mb-0">
        <img
          src="/Group 65.png"
          alt="Hero illustration of software solutions"
          className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
          loading="eager"
        />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-xl px-4 lg:px-6">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[#0B0C3A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start">
            Our Approach
          </h2>
          <div className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"></div>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-gray-700">
          At Fordest technologies, we believe in a client-centric approach that
          goes beyond just delivering projects. We strive to build lasting
          partnerships, understanding the unique challenges each client faces.
          Our collaborative process ensures that the solutions we provide align
          seamlessly with your goals and aspirations.
        </p>
      </div>
    </div>
  );
};

export default OurApproach;
