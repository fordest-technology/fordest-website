import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="relative flex h-[700px] flex-col items-center justify-center overflow-hidden px-6 text-white">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/Hero.svg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center text-center">
                <h1 className="font-sora text-[56px] font-bold leading-[100%] tracking-tight bg-[linear-gradient(180.78deg,#FFFFFF_74.66%,#03216E_93.99%)] bg-clip-text text-transparent max-w-[872px] w-full">
                    Transforming Business with <br />
                    Intelligent Digital Solution
                </h1>

                <p className="font-inter mt-6 text-white text-center text-[22.56px] font-normal leading-[100%] max-w-[806.43px] opacity-100">
                    We build scalable digital products, from custom software and AI platforms
                    to Web3 and blockchain systems, guiding businesses from idea to launch
                    with mentorship and advisory support.
                </p>

                <div className="mt-10">
                    <button className="flex items-center justify-center bg-white transition-transform hover:scale-105 mx-auto w-[187px] h-[59px] rounded-[97px] opacity-100">
                        <span className="font-poppins font-semibold text-[18px] leading-[100%] text-[#0B0C3A]">
                            View Projects
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero