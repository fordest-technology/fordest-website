"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
    return (
        <section className="w-full pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative group">
                {/* Main Content Card */}
                <div className="relative w-full min-h-[400px] md:min-h-[500px] rounded-[40px] md:rounded-[60px] overflow-hidden flex flex-col items-center justify-center text-center p-8 md:p-16 shadow-2xl transition-all duration-500">
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
                            className="inline-flex items-center px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md"
                        >
                            <span className="text-white text-sm font-bold tracking-wider">Our Projects.</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h1
                                className="font-sora font-bold text-transparent bg-clip-text text-[32px] md:text-[52px] lg:text-[64px] leading-[100%] tracking-tight max-w-[743px] mx-auto"
                                style={{ backgroundImage: 'linear-gradient(88.44deg, #FFFFFF 3.48%, #DBE3EF 27.1%, #B7C8E0 50.75%, #DCE4F0 73.08%, #FFFFFF 94.06%)' }}
                            >
                                Smart Technology.<br />
                                Real Business Results.
                            </h1>

                            <p className="font-poppins font-bold text-[16px] leading-[120%] max-w-[493px] mx-auto" style={{ color: 'rgba(214, 225, 240, 1)' }}>
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
