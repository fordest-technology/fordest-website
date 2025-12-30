"use client";

import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-20 text-white">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/Hero.svg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
                <h1 
                    className="animate-slide-up font-sora text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-[72px] max-w-[1000px] w-full"
                >
                    Transforming Business with <br className="hidden md:block" />
                    Intelligent Digital Solutions
                </h1>

                <p 
                    className="animate-slide-up [animation-delay:200ms] font-poppins mt-8 text-white/90 text-center text-lg md:text-[22px] font-normal leading-relaxed max-w-[800px]"
                >
                    We build scalable digital products, from custom software and AI platforms
                    to Web3 and blockchain systems, guiding businesses from idea to launch
                    with mentorship and advisory support.
                </p>

                <div 
                    className="animate-slide-up [animation-delay:400ms] mt-12"
                >
                    <button className="group relative flex items-center justify-center overflow-hidden bg-white px-10 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl">
                        <span className="relative z-10 font-poppins font-bold text-lg text-[#0B0C3A]">
                            View Projects
                        </span>
                        <div className="absolute inset-0 bg-zinc-100 translate-y-full transition-transform group-hover:translate-y-0" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero