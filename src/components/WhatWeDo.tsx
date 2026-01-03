"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
    Monitor, Globe, LayoutGrid, Cloud, Cpu,
    Brain, Sparkles, Bot, Database, Zap,
    Link, ShieldCheck, Coins, Layers,
    Users, Lightbulb, TrendingUp, Compass, Handshake,
    LucideIcon
} from "lucide-react";

interface ServiceItem {
    icon: LucideIcon;
    title: string;
}

interface CardData {
    title: string;
    description: string;
    image: string;
    services: ServiceItem[];
}

const cardsData: CardData[] = [
    {
        title: "Custom Software Development",
        description: "We design and build robust, scalable, and secure software solutions tailored to your business needs.",
        image: "/customweb.svg",
        services: [
            { icon: Monitor, title: "Web applications and platforms" },
            { icon: Globe, title: "Mobile applications (iOS & Android)" },
            { icon: LayoutGrid, title: "Enterprise systems and internal tools" },
            { icon: Cloud, title: "Cloud-based and scalable architectures" },
            { icon: Cpu, title: "API development and system integrations" },
        ]
    },
    {
        title: "Artificial Intelligence Platforms & AI Agents",
        description: "We build intelligent AI-powered systems that automate workflows, enhance decision-making, and improve user experiences.",
        image: "/AI.svg",
        services: [
            { icon: Brain, title: "Intelligent chatbots and virtual assistants" },
            { icon: Bot, title: "AI integration into existing software platforms" },
            { icon: Database, title: "AI agents for custom needs." },
            { icon: Zap, title: "Natural Language Processing (NLP) solutions" },
            { icon: Sparkles, title: "Predictive analytics and recommendation systems" },
        ]
    },
    {
        title: "Web3 & Blockchain Solutions",
        description: "We develop secure, decentralized, and future-ready blockchain systems for businesses entering the Web3 ecosystem.",
        image: "/web3.svg",
        services: [
            { icon: Link, title: "Decentralized applications (dApps)" },
            { icon: ShieldCheck, title: "Smart contract development and deployment" },
            { icon: Coins, title: "Blockchain integrations and infrastructure" },
            { icon: Layers, title: "Token-based platforms and decentralized systems" },
            { icon: Cpu, title: "Web3 wallets and on-chain data integrations" },
        ]
    },
    {
        title: "Mentorship & Advisory Support",
        description: "Guidance from industry experts to help you scale your product and business effectively.",
        image: "/mentorship.png",
        services: [
            { icon: Users, title: "Technical mentorship for teams" },
            { icon: Lightbulb, title: "Product discovery & strategy" },
            { icon: TrendingUp, title: "Scaling & growth advisory" },
            { icon: Compass, title: "Market entry & positioning" },
            { icon: Handshake, title: "Partnership & ecosystem building" },
        ]
    }
];

const Card = ({ card, index, progress, range, targetScale }: {
    card: CardData,
    index: number,
    progress: any,
    range: [number, number],
    targetScale: number
}) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="min-h-[500px] h-[75vh] md:h-[80vh] lg:h-[85vh] flex items-center justify-center sticky top-[10vh] md:top-[12vh]">
            <motion.div
                style={{
                    scale,
                    top: `${index * 20}px`
                }}
                className="relative w-full max-w-[95%] md:max-w-[90%] lg:max-w-[1240px] flex flex-col items-center px-4 md:px-0"
            >
                <div className="bg-white rounded-[24px] md:rounded-[40px] lg:rounded-[48px] p-4 py-6 md:p-8 md:py-10 lg:py-12 lg:px-16 shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:shadow-[0_30px_80px_rgba(0,0,0,0.35)] relative overflow-hidden w-full flex flex-col gap-3 md:gap-4">
                    {/* Centered Header inside Card */}
                    <div className="text-center">
                        <h3 className="mx-auto max-w-[800px] font-sora font-bold text-[22px] md:text-[28px] lg:text-[36px] leading-[1.2] text-black tracking-tight">
                            {card.title}
                        </h3>
                        <p className="mx-auto max-w-[650px] font-sora font-medium text-[14px] md:text-[16px] lg:text-[20px] leading-[1.5] text-black/70 text-center">
                            {card.description}
                        </p> 
                    </div>

                    <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
                        {/* Left Column: List */}
                        <ul className="space-y-3 md:space-y-4 lg:space-y-6">
                            {card.services.map((service, sIndex) => (
                                <li key={sIndex} className="flex items-center gap-3 md:gap-4 group">
                                    <div
                                        className="flex-shrink-0 flex items-center justify-center w-[32px] h-[32px] md:w-[36px] md:h-[36px] lg:w-[40px] lg:h-[40px] rounded-[10px] md:rounded-[12px] lg:rounded-[14px] bg-[#C3CFED]"
                                    >
                                        <service.icon className="w-4 h-4 md:w-5 md:h-5 text-[#052D8F]" />
                                    </div>
                                    <span
                                        className="font-sora font-semibold text-[13px] md:text-[15px] lg:text-[18px] leading-tight text-black"
                                    >
                                        {service.title}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Right Column: Illustration */}
                        <div className="relative hidden lg:flex justify-center items-center">
                            <div className="relative w-full aspect-square max-w-[200px] md:max-w-[320px] lg:max-w-[450px]">
                                <Image
                                    src={card.image}
                                    alt={`${card.title} Illustration`}
                                    fill
                                    className="object-contain"
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const WhatWeDo = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section
            ref={container}
            className="relative w-full bg-[linear-gradient(33.32deg,#052D8F_-1.52%,#051743_-1.51%,#103388_11.08%,#0B2971_18.16%,#0C2156_27.93%,#0C2152_32.94%,#030F2C_44.73%,#072A81_51.7%,#0B2E86_55.99%,#041A50_68.01%,#030F2C_82.18%)]"
        >
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10 py-32 px-4 md:px-8 lg:px-16">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-24">
                    <div className="relative inline-block">
                        <h2 className="font-sans font-bold text-[48px] leading-[1.2] text-[#FAFCFF]">
                            What We Do<span className="text-[#FFB23E]">.</span>
                        </h2>
                        <div className="mx-auto mt-2 w-[172px] h-[5px] rounded-[73px] bg-[#FFB23E]" />
                    </div>
                    <p className="mx-auto mt-6 max-w-[750px] font-poppins font-medium text-[24px] leading-[1.3] text-center text-white/90">
                        We are technology innovators, combining strategy, design, and engineering to build solutions that are secure, scalable, and future-ready.
                    </p>
                </div>

                {/* Stacking Cards Container */}
                <div className="relative ">
                    {cardsData.map((card, index) => {
                        const targetScale = 1 - ((cardsData.length - index) * 0.05);
                        return (
                            <Card
                                key={index}
                                card={card}
                                index={index}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
