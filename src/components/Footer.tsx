"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Loader2, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, type: 'waitlist' }),
            });

            if (response.ok) {
                setShowModal(true);
                setEmail('');
            }
        } catch (error) {
            console.error('Error joining waitlist:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <footer className="w-full bg-[#001B44] text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/5 relative">
            {/* Success Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white rounded-[24px] p-8 md:p-12 max-w-md w-full text-center relative shadow-2xl"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={32} className="text-green-600" />
                                </div>
                            </div>

                            <h3 className="font-sora font-bold text-2xl md:text-3xl text-[#001B44] mb-4">
                                Thanks for joining!
                            </h3>
                            <p className="font-poppins text-gray-600 mb-8">
                                You&apos;ve been added to our waitlist. We&apos;ll keep you updated with the latest news and announcements.
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-[#FFB23E] text-[#001B44] font-bold py-4 rounded-full hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                            >
                                Got it
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

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

                    {/* Mailing List / Waitlist */}
                    <div className="lg:col-span-3 space-y-8">
                        <h4 className="font-sora font-semibold text-[22px] leading-tight text-white/90">
                            Join our mailing list <br /> for updates
                        </h4>
                        <form onSubmit={handleSubmit} className="relative mt-8">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="bg-transparent border-b border-white/40 pb-4 outline-none w-full pr-12 text-base placeholder:text-white/40 font-poppins focus:border-[#FFB23E] transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="absolute right-0 bottom-3 w-10 h-10 bg-[#FFB23E] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform shadow-lg cursor-pointer disabled:opacity-50"
                            >
                                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={20} />}
                            </button>
                        </form>
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
