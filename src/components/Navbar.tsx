"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // The navbar should be solid if we're not on the home page OR if we've scrolled
    const showSolidBackground = !isHome || isScrolled;
    const bgColor = showSolidBackground ? "rgba(3, 37, 117, 1)" : "transparent";

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

                {/* Nav Links */}
                <div className="hidden space-x-12 text-sm font-semibold md:flex transition-colors text-white">
                    <Link href="/" className="transition-all hover:opacity-70">Home</Link>
                    <Link href="/#about" className="transition-all hover:opacity-70">About</Link>
                    <Link href="/#service" className="transition-all hover:opacity-70">Service</Link>
                    <Link href="/portfolio" className="transition-all hover:opacity-70">Portfolio</Link>
                </div>

                {/* Contact Button */}
                <Link href="/contact">
                    <button className={`rounded-full px-10 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-95 ${showSolidBackground
                        ? "bg-white text-black"
                        : "bg-white text-[#001B44]"
                        }`}>
                        Contact Us
                    </button>
                </Link>
            </div>
        </nav>
    );
}
