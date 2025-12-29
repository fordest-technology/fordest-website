"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CaseStudyHeroProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

const CaseStudyHero = ({ title, subtitle, description, image }: CaseStudyHeroProps) => {
    return (
        <section className="w-full pt-32 pb-0 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ backgroundColor: 'rgba(238, 243, 255, 1)' }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                {/* Text Content */}
                <div className="space-y-4 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-sora font-bold text-[48px] md:text-[64px] text-[#001B44] leading-tight"
                    >
                        {title}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="font-sora font-semibold text-[24px] md:text-[36px] text-[#2D3A8C]"
                    >
                        {subtitle}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="font-poppins text-[#475467] text-[18px] md:text-[20px] max-w-2xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Mockup Image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="w-full max-w-6xl mt-12 relative"
                >
                    <div className="rounded-t-[40px] md:rounded-t-[60px] overflow-hidden shadow-2xl border-x-8 border-t-8 border-[#000] bg-[#000]">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudyHero;
