"use client";

import React from "react";
import Image from "next/image";

const portfolioLogos = [
  { src: "/tessa-white.svg", alt: "Tessa", width: 120 },
  { src: "/echonode-white.svg", alt: "EchoNode", width: 140 },
  { src: "/rPihomes.svg", alt: "rPihomes", width: 140 },
  { src: "/datarepublic.svg", alt: "DataRepublic", width: 160 },
  { src: "/eduit-white.svg", alt: "Eduit", width: 120 },
  { src: "/lexora-white.svg", alt: "Lexora", width: 140 },
  { src: "/starlite.svg", alt: "Starlite Care", width: 150 },
];

const PortfolioMarquee = () => {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="overflow-hidden w-full">
        {/* Container with flex and the animation class */}
        <div className="flex animate-marquee w-max select-none">
          {/* First copy of items */}
          <div className="flex items-center gap-[66px] px-[33px]">
            {portfolioLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-1-${index}`}
                className="min-w-[140px] flex items-center justify-center"
              >
                <div
                  className="relative h-[60px]"
                  style={{ width: `${logo.width}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Second copy of items (duplicated for seamless loop) */}
          <div className="flex items-center gap-[66px] px-[33px]">
            {portfolioLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-2-${index}`}
                className="min-w-[140px] flex items-center justify-center"
              >
                <div
                  className="relative h-[60px]"
                  style={{ width: `${logo.width}px` }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMarquee;
