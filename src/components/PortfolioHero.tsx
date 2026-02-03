"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
    return (
        <section className="w-full pt-20 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative group">
                {/* Main Content Card */}
                <div className="relative w-full min-h-[350px] md:min-h-[500px] rounded-[32px] md:rounded-[60px] overflow-hidden flex flex-col items-center justify-center text-center p-6 md:p-16 shadow-2xl transition-all duration-500">
                    {/* Background with Blur & Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="/portfolio-hero-bg.png"
                            alt="Portfolio Background"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#001B44]/80 backdrop-blur-[1px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#001B44] via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl space-y-6 md:space-y-8">
                        {/* Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center px-5 py-1.5 md:px-6 md:py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md"
                        >
                            <span className="text-white text-xs md:text-sm font-bold tracking-wider">Our Projects.</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1
                                className="font-sora font-bold text-transparent bg-clip-text text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] leading-[1.2] md:leading-[100%] tracking-tight max-w-[743px] mx-auto"
                                style={{ backgroundImage: 'linear-gradient(88.44deg, #FFFFFF 3.48%, #DBE3EF 27.1%, #B7C8E0 50.75%, #DCE4F0 73.08%, #FFFFFF 94.06%)' }}
                            >
                                Smart Technology.<br />
                                Real Business Results.
                            </h1>

                            <p className="font-poppins font-bold text-[14px] md:text-[16px] leading-[1.4] md:leading-[120%] max-w-[493px] mx-auto px-4" style={{ color: 'rgba(214, 225, 240, 1)' }}>
                                We&apos;ve partnered with businesses, startups, and institutions<br className="hidden md:block" />
                                to deliver high-impact digital products across AI,<br className="hidden md:block" />
                                Web3, and software development.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioHero;
