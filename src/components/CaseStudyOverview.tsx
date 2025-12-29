"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const tabs = [
    { id: 'challenge', label: 'The Challenge' },
    { id: 'solution', label: 'The Solution' },
    { id: 'results', label: 'The Results' },
];

interface TabContent {
    title: string;
    items: string[];
}

interface CaseStudyOverviewProps {
    overview: string;
    challenge: TabContent;
    solution: TabContent;
    results: TabContent;
    image: string;
    websiteUrl?: string;
}

const CaseStudyOverview = ({
    overview,
    challenge,
    solution,
    results,
    image,
    websiteUrl = "#"
}: CaseStudyOverviewProps) => {
    const [activeTab, setActiveTab] = useState('challenge');

    const tabContent = {
        challenge,
        solution,
        results
    };

    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
                {/* Left Side - Content */}
                <div className="w-full lg:w-1/2 space-y-10">
                    <div className="space-y-4">
                        <h2 className="font-sora font-bold text-[48px] text-[#001B44] leading-tight">
                            Overview
                        </h2>
                        <p className="font-poppins text-[#475467] text-[18px] leading-relaxed max-w-xl">
                            {overview}
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="space-y-8">
                        <div className="flex gap-8 border-b border-zinc-100 flex-wrap">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`pb-4 font-poppins font-bold text-[16px] italic transition-all relative ${activeTab === tab.id
                                            ? "text-[#001B44]"
                                            : "text-[#98A2B3] hover:text-[#001B44]"
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeOverviewTab"
                                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFB23E]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                <h3 className="font-sora font-bold text-[24px] text-[#001B44]">
                                    {tabContent[activeTab as keyof typeof tabContent].title}
                                </h3>
                                <div className="space-y-4">
                                    {tabContent[activeTab as keyof typeof tabContent].items.map((item, index) => (
                                        <div key={index} className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-6 h-6 text-[#FFB23E] flex-shrink-0 mt-1" />
                                            <p className="font-poppins text-[#475467] text-[18px]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-[#1A2B56] hover:bg-[#001B44] text-white font-bold px-10 py-4 rounded-full text-[16px] items-center gap-2 transition-all transform hover:scale-105 active:scale-95"
                    >
                        Visit Website
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                {/* Right Side - Image */}
                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[20px] overflow-hidden"
                    >
                        <img
                            src={image}
                            alt="Project Overview"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyOverview;
