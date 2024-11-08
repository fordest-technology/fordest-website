import React from "react";
import Marquee from "react-fast-marquee";

const TrustSection = () => {
  const brands = [
    {
      logo: "/datarepLogo.png",
      alt: "Datarep company logo",
      width: undefined,
      name: null,
    },
    {
      logo: "/proattireLogo.png",
      alt: "Proattire company logo",
      width: 70,
      name: "Proattire",
    },
    {
      logo: "/starliteLogo.png",
      alt: "Starlite company logo",
      width: undefined,
      name: null,
    },
    // Add more brands as needed
  ];

  return (
    <div className="relative px-4 sm:px-6 lg:px-6 -mt-10 sm:-mt-10 lg:-mt-16 mb-5 overflow-hidden">
      <div className="max-w-[95%] sm:max-w-[85%] lg:max-w-[923px] mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex flex-col justify-center items-center py-8 sm:py-10 lg:py-8 px-4 sm:px-6">
          {/* Title */}
          <h2 className="text-[#0B0C3A] text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
            Brands that trust us:
          </h2>

          {/* Marquee Container */}
          <Marquee gradient={false} speed={50} className="w-full py-4">
            {brands.map((brand, index) => (
              <div
                key={`${brand.alt}-${index}`}
                className="flex items-center justify-center mx-10"
              >
                <img
                  src={brand.logo}
                  alt={brand.alt}
                  width={brand.width}
                  className="object-contain"
                />
                {brand.name && (
                  <p className="text-amber-950 text-sm sm:text-base font-semibold ml-2">
                    {brand.name}
                  </p>
                )}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
