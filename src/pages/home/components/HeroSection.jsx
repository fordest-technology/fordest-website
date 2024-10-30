import React from "react";
import Button from "../../../components/common/Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-blueblack min-h-screen py-16 lg:py-0">
      <div className="flex flex-col-reverse lg:flex-row justify-between w-[90%] md:w-[88%] max-w-[1400px] items-center mx-auto gap-8 lg:gap-4">
        {/* Text Content */}
        <div className="flex flex-col justify-start items-center lg:items-start gap-4 lg:gap-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-tight lg:leading-[1.35] text-white max-w-xl lg:max-w-[526px]">
            Innovating the Future of Software Solutions
          </h1>
          <p className="text-sm md:text-base font-medium leading-relaxed text-white/90 max-w-xl lg:max-w-[576px]">
            At Fordest technologies, we believe in transforming ideas into
            powerful, scalable, and user-friendly software solutions. As a
            leading software development company, we are dedicated to providing
            cutting-edge technology tailored to meet the unique needs of our
            clients.
          </p>
          <div className="mt-2">
            <Button variant="lg">Our Services</Button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-auto flex justify-center items-center">
          <img
            src="/heroImage.png"
            alt="Hero illustration of software solutions"
            className="w-full max-w-[400px] md:max-w-[450px] lg:w-[500px] h-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
