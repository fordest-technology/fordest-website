import React from "react";

const ContactHero = () => {
  return (
    <div
      className=" w-full h-[500px] mt-16 flex flex-col gap-4 justify-center items-center  "
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2 md:px-4">
          Contact Us
        </h2>
        <div className="h-1 w-12 md:w-16 lg:w-20 bg-white rounded-full"></div>
      </div>
      <div className=" max-w-[800px] px-10">
        <p className=" items-center justify-center text-center text-lg text-white font-semibold leading-[27px]">
          Thank you for considering Fordest technologies. We value your interest
          and look forward to assisting you. There are several ways to get in
          touch with us.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
