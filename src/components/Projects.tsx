"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "Echonode",
        subtitle: "Web3 Notification System for Traders",
        description: "A real-time blockchain notification platform helping traders stay informed on Hyperliquid.",
        tags: ["SaaS", "Web3"],
        image: "/echonode-card.svg",
        cta: "View project",
        large: true
    },
    {
        id: 2,
        title: "TESSA",
        subtitle: "Support Agent",
        description: "AI-powered support agent for automated customer queries.",
        tags: ["SaaS", "AI"],
        image: "/tessa.svg",
        cta: "View portfolio",
        large: false
    },
    {
        id: 3,
        title: "Eduit",
        subtitle: "Transform School Management",
        description: "Comprehensive platform for educational institution management.",
        tags: ["SaaS", "Edu"],
        image: "/eduit.svg",
        cta: "View project",
        large: false
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    return (
        <motion.div
            className={`relative overflow-hidden rounded-[20px] group cursor-pointer ${project.large ? 'h-[500px] md:h-[600px]' : 'h-[285px]'}`}
            initial="initial"
            whileHover="hover"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Hover Overlay */}
            <motion.div
                className={`absolute top-0 bottom-0 left-0 bg-[#1A1B4B]/80 backdrop-blur-sm flex flex-col justify-end ${project.large ? 'w-full md:w-1/2 p-8 md:p-12' : 'w-full p-6'}`}
                variants={{
                    initial: { x: '-100%' },
                    hover: { x: 0 }
                }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
            >
                <div className={`${project.large ? 'space-y-4' : 'space-y-2'} max-w-[450px]`}>
                    <h3 className={`font-sora font-bold text-white ${project.large ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                        {project.title}
                    </h3>
                    <p className={`font-poppins font-medium text-white/90 ${project.large ? 'text-lg' : 'text-base'}`}>
                        {project.subtitle}
                    </p>
                    <p className={`font-poppins text-white/70 leading-relaxed ${project.large ? 'text-sm' : 'text-xs'}`}>
                        {project.description}
                    </p>

                    <div className="flex gap-2 pt-1">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-[#3B42FF] text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className={`flex items-center gap-2 text-[#FFB23E] font-bold group/btn ${project.large ? 'pt-4' : 'pt-2'}`}>
                        <span className={project.large ? 'text-base' : 'text-sm'}>{project.cta}</span>
                        <ArrowRight className={`${project.large ? 'w-5 h-5' : 'w-4 h-4'} transition-transform group-hover/btn:translate-x-2`} />
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="flex justify-between items-end">
                    <div className="relative inline-block">
                        <h2 className="font-sora font-bold text-[40px] leading-[1.1] text-[rgba(40,41,56,1)]">
                            View our projects
                        </h2>
                        <div className="mt-4 w-[220px] h-[4px] bg-[#FFB23E] rounded-full" />
                    </div>

                    <button className="hidden md:flex items-center gap-2 font-bold text-[rgba(40,41,56,1)] hover:text-[#0056D2] transition-colors group">
                        View More
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Large Project (Left) */}
                    <div className="lg:col-span-2">
                        <ProjectCard project={projects[0]} />
                    </div>

                    {/* Small Projects (Right) */}
                    <div className="flex flex-col gap-6">
                        <ProjectCard project={projects[1]} />
                        <ProjectCard project={projects[2]} />
                    </div>
                </div>

                {/* Mobile View More */}
                <div className="md:hidden pt-4">
                    <button className="flex items-center gap-2 font-bold text-[rgba(40,41,56,1)] group">
                        View More
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
