"use client";

import React from 'react';
import Link from 'next/link';

const BuildTogether = () => {
    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Decorative Background Offsets (Shadow Effect) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[94%] h-[100px] bg-[#3B42FF]/30 rounded-[40px] -z-10 blur-sm" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[88%] h-[100px] bg-[#3B42FF]/10 rounded-[40px] -z-20 blur-md" />

                {/* Main Content Card */}
                <div className="relative w-full min-h-[450px] rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-16 shadow-2xl">
                    {/* Background with Blur & Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="/build-together-bg.png"
                            alt="Build Together"
                            className="w-full h-full object-cover blur-[2px] transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-3xl space-y-6 md:space-y-8">
                        <h2 className="font-sora font-bold text-white text-[32px] md:text-[52px] leading-tight">
                            Let&apos;s build something great <br className="hidden md:block" /> together
                        </h2>

                        <p className="font-poppins text-white/80 text-[14px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
                            Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies <br className="hidden md:block" />
                            nec dolor sit amet, scelerisque cursus purus.
                        </p>

                        <div className="pt-4">
                            <Link href="/contact">
                                <button className="bg-[#FFB23E] hover:bg-[#ffa726] text-black font-bold px-12 py-5 rounded-full text-[18px] transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuildTogether;
