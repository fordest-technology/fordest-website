"use client";

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const portfolioLogos = [
    { src: '/tessa-white.svg', alt: 'Tessa', width: 120 },
    { src: '/echonode-white.svg', alt: 'EchoNode', width: 140 },
    { src: '/rPihomes.svg', alt: 'rPihomes', width: 140 },
    { src: '/datarepublic.svg', alt: 'DataRepublic', width: 160 },
    { src: '/eduit-white.svg', alt: 'Eduit', width: 120 },
    { src: '/lexora-white.svg', alt: 'Lexora', width: 140 },
    { src: '/starlite.svg', alt: 'Starlite Care', width: 150 },
];

const PortfolioMarquee = () => {
    return (
        <section className="bg-white py-12 overflow-hidden">
            <Marquee
                gradient={false}
                speed={40}
                pauseOnHover={true}
                className="flex items-center"
            >
                {portfolioLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center mx-6 transition-all duration-300"
                    >
                        <div className="relative h-[50px]" style={{ width: `${logo.width}px` }}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </section>
    );
};

export default PortfolioMarquee;
