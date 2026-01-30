"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const showSolidBackground = !isHome || isScrolled || isMobileMenuOpen;
    const bgColor = showSolidBackground ? "rgba(3, 37, 117, 1)" : "transparent";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/#about" },
        { name: "Service", href: "/#service" },
        { name: "Portfolio", href: "/portfolio" },
    ];

    return (
        <nav
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${showSolidBackground ? "py-4 shadow-lg" : "py-6"
                }`}
            style={{ backgroundColor: bgColor }}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Fordest Technologies Logo"
                        width={80}
                        height={40}
                        className="transition-all duration-300 brightness-0 invert"
                    />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden space-x-12 text-sm font-semibold md:flex transition-colors text-white">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="transition-all hover:opacity-70"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Contact Button */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <button className={`rounded-full px-10 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-95 ${showSolidBackground
                            ? "bg-white text-black"
                            : "bg-white text-[#001B44]"
                            }`}>
                            Contact Us
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#032575] border-t border-white/10 py-8 px-6 flex flex-col space-y-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-semibold border-b border-white/5 pb-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="w-full bg-white text-[#032575] rounded-full py-4 text-lg font-bold">
                            Contact Us
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}
