"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import Magnetic from "./Magnetic";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when pathname changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // The navbar should be glassmorphic if we're not on the home page OR if we've scrolled
    const isGlassy = !isHome || isScrolled || isOpen;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Expertise", href: "/expertise" },
        { name: "Service", href: "/#service" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "About", href: "/#about" },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isGlassy
                ? "py-4 bg-[#03216E]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
                {/* Logo */}
                <Link href="/" className="flex items-center z-50">
                    <Image
                        src="/logo.svg"
                        alt="Fordest Technologies Logo"
                        width={80}
                        height={40}
                        className="transition-all duration-300 brightness-0 invert"
                    />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden space-x-10 text-sm font-semibold md:flex transition-colors text-white">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`transition-all hover:text-[#FFB23E] ${pathname === link.href ? 'text-[#FFB23E]' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Contact Button (Desktop) */}
                <div className="hidden md:block">
                    <Magnetic>
                        <Link href="/contact">
                            <button className={`rounded-full px-10 py-3 text-sm font-bold transition-all active:scale-95 cursor-pointer ${isGlassy
                                ? "bg-[#FFB23E] text-black"
                                : "bg-white text-[#001B44]"
                                }`}>
                                Contact Us
                            </button>
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="block md:hidden text-white z-50 cursor-pointer p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#03216E] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-semibold text-white hover:text-white/80"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                        <button className="rounded-full bg-white px-10 py-3 text-lg font-bold text-[#001B44] transition-all hover:scale-105 active:scale-95 cursor-pointer">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
