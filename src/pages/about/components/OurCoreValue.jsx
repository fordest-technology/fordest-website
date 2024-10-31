import React from "react";

const OurCoreValue = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-12">
        <h2 className="text-[#0B0C3A] text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Our Core Values
        </h2>
        <div className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"></div>
        <p className="text-[#0B0C3A] text-md md:text-lg lg:text-xl font-medium text-center max-w-[880px]">
          As a digital agency, we create content based on a number of core
          values that inform our whole work process.
        </p>
      </div>

      {/* Core Value Cards */}
      <div className="w-full bg-blue flex flex-col py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mx-auto w-full max-w-5xl px-4">
          {/* Card 1 */}
          <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md py-8 px-6 shadow-md">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0B0C3A]">
              Innovation
            </h1>
            <p className="font-medium text-sm md:text-base text-center max-w-[260px] text-[#000000]">
              We embrace innovation as the driving force behind our success.
              Continuously exploring new technologies and methodologies, we stay
              ahead of the curve to provide solutions that stand the test of
              time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md py-8 px-6 shadow-md">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0B0C3A]">
              Integrity
            </h1>
            <p className="font-medium text-sm md:text-base text-center max-w-[260px] text-[#000000]">
              Trust is the foundation of our relationships. We conduct our
              business with transparency, honesty, and unwavering integrity,
              ensuring the highest level of professionalism in every
              interaction.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md py-8 px-6 shadow-md">
            <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#0B0C3A]">
              Excellence
            </h1>
            <p className="font-medium text-sm md:text-base text-center max-w-[260px] text-[#000000]">
              Striving for excellence is not just a goal; it's a mindset
              embedded in our culture. From the first line of code to the final
              product, we are dedicated to delivering nothing short of
              excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValue;
