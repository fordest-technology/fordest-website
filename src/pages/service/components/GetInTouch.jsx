import React from "react";
import Button from "../../../components/common/Button";

const GetInTouch = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between sm:items-start md:items-center gap-8 lg:gap-4 my-16 py-8 px-6 md:border-2 md:border-[#0057FF] rounded-2xl">
      {/* Icon and Text Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 md:items-center sm:items-start">
        <img
          src="/icons/grommet-icons_contact.svg"
          width={60}
          height={60}
          alt="message_icon"
          className="flex-shrink-0"
        />
        <div className="flex flex-col gap-4 text-start lg:text-left max-w-2xl">
          <h1 className="text-[#0B0C3A] text-xl md:text-2xl font-semibold">
            Get in Touch to Elevate Your Software Experience:
          </h1>
          <p className="text-sm md:text-base text-[#000000] font-medium">
            We stay at the forefront of technological advancements,
            incorporating the latest trends and methodologies into our services
            to keep your business ahead of the curve.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="">
        <Button variant="md">
          <a href="">Contact Us</a>
        </Button>
      </div>
    </div>
  );
};

export default GetInTouch;
