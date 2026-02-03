"use client";

import React from 'react'
import Image from 'next/image'

const topRowLogos = [
    { src: '/Amazon_Web_Services_Logo.svg.png', alt: 'AWS' },
    { src: '/blueTessa.d33df4a4.svg', alt: 'Tessa Blue' },
    { src: '/image 17.svg', alt: 'Partner 7' },
    { src: '/image 18.svg', alt: 'Partner 6' },
    { src: '/mistral-logo-color-black.svg', alt: 'Mistral AI' },
    { src: '/primary-full 1.svg', alt: 'GitHub' },
    { src: '/figma lockup.svg', alt: 'Figma' },
    { src: '/Netlify_Logo_0.svg', alt: 'Netlify' },
    { src: '/hostinger.png', alt: 'Hostinger' },
]

const bottomRowLogos = [
    { src: '/Logo - Black.svg', alt: 'Logo Black' },
    { src: '/MetaMask-icon-fox.svg', alt: 'MetaMask' },
    { src: '/full-logo.svg', alt: 'Full Logo' },
    { src: '/ethereum-eth-logo.svg', alt: 'Ethereum' },
    { src: '/dark_logo_full.svg', alt: 'Dark Logo' },
    { src: '/bitcoin.svg', alt: 'Bitcoin' },
    { src: '/image 21.svg', alt: 'Clerk' },
    { src: '/image 22.svg', alt: 'Partner 3' },
    { src: '/image 23.svg', alt: 'Partner 2' },
]

const thirdRowLogos = [
    { src: '/cloudinary-seeklogo.svg', alt: 'Cloudinary' },
    { src: '/mongodb-seeklogo.svg', alt: 'MongoDB' },
    { src: '/neon-seeklogo.svg', alt: 'Neon' },
    { src: '/next-js-seeklogo.svg', alt: 'Next.js' },
    { src: '/python-seeklogo.png', alt: 'Python' },
    { src: '/react-seeklogo.svg', alt: 'React' },
    { src: '/resend-seeklogo.svg', alt: 'Resend' },
    { src: '/zoho-corporation-seeklogo.svg', alt: 'Zoho' },
    { src: '/tailwind-css-wordmark-seeklogo.svg', alt: 'Tailwind CSS' },
    { src: '/postgresql-seeklogo.svg', alt: 'PostgreSQL' },
    { src: '/firebase-seeklogo.svg', alt: 'Firebase' },
]

const MarqueeRow = ({ logos, direction = 'left' }: { logos: any[], direction?: 'left' | 'right' }) => {
    const animationClass = direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse';

    return (
        <div className="flex overflow-hidden w-full select-none">
            <div className={`flex items-center gap-[40px] ${animationClass} w-max py-4`}>
                {/* Original set */}
                <div className="flex items-center gap-[40px] px-[20px]">
                    {logos.map((logo, index) => (
                        <div key={`${logo.alt}-${index}`} className="min-w-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <div className="relative h-[60px] w-full">
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
                {/* Duplicated set for seamless loop */}
                <div className="flex items-center gap-[40px] px-[20px]">
                    {logos.map((logo, index) => (
                        <div key={`${logo.alt}-dup-${index}`} className="min-w-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            <div className="relative h-[60px] w-full">
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
    );
};

const Partners = () => {
    return (
        <section className="bg-white py-12 md:py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 md:mb-16 flex justify-center">
                <h2 className="font-sora text-[18px] md:text-[20px] font-semibold text-black leading-snug md:leading-[100%] text-center max-w-[662px]">
                    In Partnership with Leading Technologies and Solution Providers
                </h2>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
                <MarqueeRow logos={topRowLogos} direction="left" />
                <MarqueeRow logos={bottomRowLogos} direction="right" />
                <MarqueeRow logos={thirdRowLogos} direction="left" />
            </div>
        </section>
    )
}

export default Partners
