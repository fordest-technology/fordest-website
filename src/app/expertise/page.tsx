"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Cpu, Code2, Database, Globe, Layers,
    Shield, Zap, Brain, Rocket, Search,
    Settings, Terminal, Box, Smartphone,
    Server, Activity, Lock, Globe2, BarChart3,
    Cloud, Workflow, MessageSquare
} from "lucide-react";
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';

const disciplines = [
    {
        icon: Code2,
        title: "Custom Software Engineering",
        description: "We build enterprise-grade applications using modern frameworks that are modular, maintainable, and highly efficient.",
        tags: ["Next.js", "TypeScript", "Node.js", "Python"]
    },
    {
        icon: Brain,
        title: "Intelligent AI Systems",
        description: "Designing custom LLM implementations and autonomous AI agents that automate complex business workflows and decision-making.",
        tags: ["Mistral AI", "LangChain", "Vector DBs", "NLP"]
    },
    {
        icon: Layers,
        title: "Web3 & Decentralized Tech",
        description: "Architecting secure smart contracts and dApps that leverage blockchain for transparency, security, and true ownership.",
        tags: ["Solidity", "Ethereum", "Smart Contracts", "DeFi"]
    },
    {
        icon: Cloud,
        title: "Infrastructure & Scalability",
        description: "High-performance cloud architectures designed to handle millions of requests with 99.9% uptime and auto-scaling capabilities.",
        tags: ["AWS", "Vercel", "PostgreSQL", "MongoDB"]
    },
    {
        icon: Lock,
        title: "Cybersecurity & Resilience",
        description: "Security-first development approach, ensuring data integrity and protection against evolving digital threats from day one.",
        tags: ["Encryption", "OAuth 2.0", "Auth.js", "Firewalls"]
    },
    {
        icon: BarChart3,
        title: "Data Intelligence",
        description: "Transforming raw data into actionable insights through real-time analytics pipelines and dashboard ecosystems.",
        tags: ["Data Republic", "Postgres", "Redis", "ETL Jobs"]
    }
];

const standards = [
    {
        title: "Standardized Clean Code",
        content: "Our codebase follows strict industry patterns (SOLID, DRY) ensuring that your product remains easy to scale and update as your business grows."
    },
    {
        title: "API-First Architecture",
        content: "We build with integration in mind. Every system we design is built to be modular, allowing seamless connections with third-party tools and internal systems."
    },
    {
        title: "Global Edge Hosting",
        content: "Performance is not optional. We deploy to global edge networks ensuring sub-100ms response times for users across every continent."
    }
];

const ExpertisePage = () => {
    return (
        <div className="min-h-screen bg-[#001B44] text-white selection:bg-[#FFB23E] selection:text-black">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="px-6 md:px-12 lg:px-24 mb-32 min-h-[60vh] flex flex-col justify-center">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#FFB23E] font-poppins font-bold uppercase tracking-widest text-sm mb-4 block">
                                Technical Excellence
                            </span>
                            <h1 className="font-sora text-[40px] md:text-[64px] lg:text-[80px] font-bold leading-tight mb-8">
                                We Engineer <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
                                    Digital Powerhouse.
                                </span>
                            </h1>
                            <p className="font-poppins text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10">
                                Beyond just coding, we architect solutions. Our expertise lies at the intersection of robust engineering, scalable architecture, and cutting-edge innovation.
                            </p>

                            <Magnetic>
                                <Link href="/contact">
                                    <button className="bg-[#FFB23E] text-black font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition-transform flex items-center gap-2 group shadow-xl cursor-pointer">
                                        Start Your Project
                                        <Zap className="w-5 h-5 fill-current transition-transform group-hover:rotate-12" />
                                    </button>
                                </Link>
                            </Magnetic>
                        </motion.div>
                    </div>
                </section>

                {/* Core Disciplines Grid */}
                <section className="px-6 md:px-12 lg:px-24 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {disciplines.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-[#FFB23E]/30 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-[#FFB23E] rounded-2xl flex items-center justify-center mb-6 text-black">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="font-sora font-bold text-2xl mb-4 group-hover:text-[#FFB23E] transition-colors line-clamp-1">
                                        {item.title}
                                    </h3>
                                    <p className="font-poppins text-white/60 leading-relaxed mb-6 h-[80px]">
                                        {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full text-white/40">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engineering Standards */}
                <section className="bg-white/5 py-24 md:py-32 px-6 md:px-12 lg:px-24 mb-32 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFB23E]/5 blur-[120px] rounded-full -mr-64 -mt-64" />

                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="font-sora text-[32px] md:text-[48px] font-bold leading-tight mb-8">
                                    Engineering standards <br />
                                    without compromise.
                                </h2>
                                <p className="font-poppins text-lg text-white/60 mb-12">
                                    We don&apos;t just build products that work; we build products that endure. Our engineering culture is focused on longevity, performance, and user satisfaction.
                                </p>
                                <div className="space-y-8">
                                    {standards.map((standard, index) => (
                                        <div key={index} className="flex gap-6">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFB23E]/20 flex items-center justify-center text-[#FFB23E] font-bold border border-[#FFB23E]/30">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-sora font-bold text-xl mb-2">{standard.title}</h4>
                                                <p className="font-poppins text-white/50 leading-relaxed">{standard.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-square bg-gradient-to-br from-[#0B216E] to-[#001B44] rounded-[40px] p-8 md:p-12 shadow-2xl relative">
                                    <pre className="font-mono text-sm text-[#FFB23E]/80 overflow-hidden leading-relaxed">
                                        {`class Solution {
    constructor(domain) {
        this.architecture = 'Microservices';
        this.scalability = 'Infinity';
        this.security = 'Hardened';
    }

    async architect(needs) {
        return await Build({
            precision: 1.0,
            innovation: 'AI-Native',
            performance: 'Ultra-Fast'
        });
    }
}

// Result: Fordest Excellence`}
                                    </pre>
                                    <div className="absolute inset-x-8 bottom-12 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="h-full bg-[#FFB23E]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Growth/CTA Section */}
                <section className="px-6 md:px-12 lg:px-24 mb-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-12 md:p-20 rounded-[48px] bg-gradient-to-b from-white/10 to-transparent border border-white/10"
                        >
                            <h2 className="font-sora text-3xl md:text-5xl font-bold mb-8">Ready to architect your success?</h2>
                            <p className="font-poppins text-lg text-white/60 mb-12">
                                Let&apos;s build a technical foundation that supports your vision.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <button className="bg-white text-black font-bold px-10 py-5 rounded-full text-lg hover:bg-[#FFB23E] transition-all cursor-pointer">
                                        Contact Technical Team
                                    </button>
                                </Link>
                                <Link href="/portfolio">
                                    <button className="bg-transparent border border-white text-white font-bold px-10 py-5 rounded-full text-lg hover:bg-white/10 transition-all cursor-pointer">
                                        View Case Studies
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ExpertisePage;
