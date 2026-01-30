"use client";

import React from 'react'
import Image from 'next/image'

const partnerLogos = [
    { src: '/primary-full 1.svg', alt: 'GitHub', width: 100 },
    { src: '/image 23.svg', alt: 'Partner 2', width: 140 },
    { src: '/image 22.svg', alt: 'Partner 3', width: 140 },
    { src: '/image 21.svg', alt: 'Clerk', width: 100 },
    { src: '/image 19.svg', alt: 'Partner 5', width: 140 },
    { src: '/image 18.svg', alt: 'Partner 6', width: 140 },
    { src: '/image 17.svg', alt: 'Partner 7', width: 140 },
    { src: '/blueTessa.d33df4a4.svg', alt: 'Tessa Blue', width: 100 },
]

const Partners = () => {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-16 flex justify-center">
                <h2 className="font-sora text-[20px] font-semibold text-black leading-[100%] text-center max-w-[662px]">
                    In Partnership with Leading Technologies and Solution Providers
                </h2>
            </div>

            <div className="relative">
                <div className="overflow-hidden w-full">
                    {/* Container with flex and the animation class */}
                    <div className="flex animate-marquee w-max select-none">
                        {/* First copy of items */}
                        <div className="flex items-center gap-[66px] px-[33px]">
                            {partnerLogos.map((logo, index) => (
                                <div key={`${logo.alt}-1-${index}`} className="min-w-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                    <div className="relative h-[60px]" style={{ width: `${logo.width}px` }}>
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
                            {partnerLogos.map((logo, index) => (
                                <div key={`${logo.alt}-2-${index}`} className="min-w-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                                    <div className="relative h-[40px]" style={{ width: `${logo.width}px` }}>
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
            </div>
        </section>
    )
}

export default Partners
