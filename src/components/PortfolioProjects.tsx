"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ["All", "Web3", "Saas", "Blockchain"];

const portfolioProjects = [
    {
        id: 1,
        title: "EchoNode",
        category: "Web3",
        description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        image: "/echonode-card.svg",
        link: "/portfolio/echonode"
    },
    {
        id: 2,
        title: "Tessa. Support Agent",
        category: "Saas",
        description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        image: "/tessa.svg",
        link: "/portfolio/tessa"
    },
    {
        id: 3,
        title: "Eduit",
        category: "Saas",
        description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        image: "/eduit.svg",
        link: "/portfolio/eduit"
    },
    {
        id: 4,
        title: "Lexora",
        category: "Saas",
        description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        image: "/lexora.svg",
        link: "/portfolio/lexora"
    },
    {
        id: 5,
        title: "Starlite.",
        category: "Saas",
        description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        image: "/starlite-cover.svg",
        link: "/portfolio/starlite"
    },
    {
        id: 6,
        title: "Korban",
        category: "Blockchain",
        description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
        image: "/korban-cover.svg",
        link: "/portfolio/korban"
    },
];

const PortfolioProjects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? portfolioProjects
        : portfolioProjects.filter(p => p.category === activeCategory);

    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`font-sora font-semibold text-[18px] transition-all relative ${activeCategory === category
                                ? "text-[#3B42FF]"
                                : "text-[#475467] hover:text-[#3B42FF]"
                                }`}
                        >
                            {category}
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activeCategory"
                                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#3B42FF]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    <AnimatePresence mode='wait'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group cursor-pointer space-y-6"
                            >
                                {/* Project Image Container */}
                                <div className="relative aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <h3 className="font-sora font-bold text-[32px] text-[rgba(40,41,56,1)] transition-colors group-hover:text-[#3B42FF]">
                                        {project.title}
                                    </h3>
                                    <p className="font-poppins text-[#475467] text-[18px] leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>

                                    <button className="flex items-center gap-2 font-poppins font-bold text-[18px] text-[rgba(40,41,56,1)] group/btn">
                                        View Portfolio
                                        <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default PortfolioProjects;
