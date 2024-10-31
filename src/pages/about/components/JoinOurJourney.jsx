import React from "react";
import Button from "../../../components/common/Button";

const JoinOurJourney = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-4 mb-10 md:mb-16">
        <h2 className="text-[#0B0C3A] text-3xl md:text-4xl font-bold text-center px-4">
          Join Us on the Journey
        </h2>
        <div className="h-1 w-14 md:w-28 bg-[#0B0C3A] rounded-full"></div>
      </div>
      <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto mb-16">
        {/* Text Content Section */}
        <div className="flex flex-col gap-6 w-full justify-start lg:w-1/2 max-w-xl mb-8 lg:mb-0 ">
          <p className="text-sm md:text-base lg:text-lg text-gray-700">
            As we continue to evolve in the ever-changing landscape of
            technology, Fordest technologies invites you to join us on this
            exciting journey. Whether you're a potential client, partner, or
            team member, we look forward to creating meaningful connections and
            shaping the future together.
          </p>
          <div className="flex items-center border border-[#828282] rounded-xl overflow-hidden max-w-md ">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-gray-700 outline-none"
            />
            <Button
              variant="md"
              className="!rounded-full !px-6 !py-2 bg-blue-600 text-white"
            >
              Join Now
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 md:flex justify-end items-center hidden ">
          <img
            src="/Group 66.png"
            alt="Hero illustration of software solutions"
            className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinOurJourney;
