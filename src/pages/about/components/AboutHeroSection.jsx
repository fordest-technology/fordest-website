import React from "react";

const AboutHeroSection = () => {
  return (
    <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto mb-16 mt-28">
      {/* Text Content Section */}
      <div className="flex flex-col gap-6 w-full justify-start lg:w-1/2 max-w-xl mb-8 lg:mb-0 ">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-[#0B0C3A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start">
            Our Story
          </h2>
          <div className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"></div>
        </div>

        <p className="text-sm md:text-base lg:text-lg text-gray-700">
          Welcome to Fordest Technologies, where innovation meets expertise to
          shape the future of software development. Founded in 2022, we have
          been on a mission to deliver exceptional and tailor-made solutions
          that propel businesses into the digital age.
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-700">
          Fordest Technologies was born out of a shared passion for technology
          and a vision to bridge the gap between ideas and implementation.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-end items-center">
        <img
          src="/Group 64.png"
          alt="Hero illustration of software solutions"
          className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default AboutHeroSection;
