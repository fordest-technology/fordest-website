"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Cpu, Code2, Database, Globe, Layers,
    Shield, Zap, Brain, Rocket, Search,
    Settings, Terminal, Box, Smartphone
} from "lucide-react";
import Magnetic from '@/components/Magnetic';
import Link from 'next/link';
import Marquee from "react-fast-marquee";

const ExpertisePage = () => {
    return (
        <div className="min-h-screen bg-[#001B44] text-white selection:bg-[#FFB23E] selection:text-black">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Hero Section */}
                <section className="px-6 md:px-12 lg:px-24 mb-20 min-h-[70vh] flex flex-col justify-center">
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
            </main>
            <Footer />
        </div>
    );
};

export default ExpertisePage;
