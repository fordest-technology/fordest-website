"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#001B44] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Logo Section */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.svg"
                                alt="Fordest Technologies Logo"
                                width={160}
                                height={80}
                                className="brightness-0 invert h-auto w-auto"
                            />
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="font-sora font-semibold text-[20px] text-white/90">Quick links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Home</Link></li>
                            <li><Link href="/#about" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Features</Link></li>
                            <li className="pt-4"><Link href="/contact" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Support</Link></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="font-sora font-semibold text-[20px] text-white/90">Help</h4>
                        <ul className="space-y-4">
                            <li><Link href="/contact" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Help Centre</Link></li>
                            <li><Link href="/#faq" className="font-poppins text-white/70 hover:text-white transition-colors text-base">FAQ</Link></li>
                            <li><Link href="#" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Forum</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="lg:col-span-2 space-y-8">
                        <h4 className="font-sora font-semibold text-[20px] text-white/90">Social Media</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Facebook</Link></li>
                            <li><Link href="#" className="font-poppins text-white/70 hover:text-white transition-colors text-base">Instagram</Link></li>
                            <li><Link href="#" className="font-poppins text-white/70 hover:text-white transition-colors text-base">LinkedIn</Link></li>
                        </ul>
                    </div>

                    {/* Mailing List */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="font-sora font-semibold text-[22px] leading-tight text-white/90">
                            Join our mailing list <br /> for updates
                        </h4>
                        <div className="relative mt-8">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-transparent border-b border-white/40 pb-4 outline-none w-full pr-12 text-base placeholder:text-white/40 font-poppins focus:border-[#FFB23E] transition-colors"
                            />
                            <button className="absolute right-0 bottom-3 w-10 h-10 bg-[#FFB23E] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg cursor-pointer">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-center pt-8">
                    <p className="font-poppins text-white/50 text-[14px]">
                        © 2025. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
