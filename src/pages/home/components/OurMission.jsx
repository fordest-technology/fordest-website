import React from "react";
import Button from "../../../components/common/Button";

const OurMission = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 justify-center items-center flex flex-col">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-[#0B0C3A] text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2 md:px-4">
          Our Mission
        </h2>
        <div className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"></div>
      </div>

      {/* Mission Statement */}
      <h2 className="text-[#0B0C3A] text-xl md:text-2xl lg:text-3xl font-bold text-center px-4 max-w-[900px] mx-auto mb-10 lg:mb-16">
        "To empower businesses through innovative and reliable software
        solutions, driving growth and success in the digital age."
      </h2>

      <div className="flex flex-col lg:flex-row justify-center w-full md:w-[88%] max-w-[1200px] items-center mx-auto gap-1">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/Mission Pic.png"
            alt="Hero illustration of software solutions"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
            loading="eager"
          />
        </div>
        {/* Text Content */}
        <div className="flex flex-col justify-start items-start w-full lg:w-1/2 px-4 lg:px-6 gap-4">
          <h2 className="text-[#0B0C3A] text-2xl md:text-3xl lg:text-3xl font-medium">
            Let's Build Something Extraordinary Together:
          </h2>
          <p className="text-base md:text-base lg:text-lg lg:w-[630px]">
            Whether you're a startup with a groundbreaking idea or an
            established enterprise seeking to elevate your digital presence,
            Fordest Technologies is here to collaborate with you. Let's embark
            on a journey to bring your software dreams to life.
          </p>
          <p className="text-base md:text-base lg:text-lg">
            Contact us today to discuss your project and discover the endless
            possibilities of software innovation.
          </p>
          <Button variant="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
