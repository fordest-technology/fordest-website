"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-[20px] shadow-2xl flex flex-col md:flex-row min-h-[600px]">
                {/* Left Side - Image Background */}
                <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-full">
                    <img
                        src="/contact-bg.png"
                        alt="Join our mission"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1A1B4B]/70 backdrop-blur-[2px]" />

                    <div className="relative h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-8">
                        <div className="space-y-4">
                            <h2 className="font-sora font-bold text-[40px] md:text-[52px] leading-[1.1] text-white">
                                Let&apos;s Work<br />Together
                            </h2>
                            <p className="font-poppins text-white/80 text-[16px] max-w-[450px] leading-relaxed">
                                Have a project in mind or want to learn more about how we can help your business?<br />
                                Get in touch with Fordest Technologies today.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex flex-col">
                                <span className="font-poppins font-bold text-white text-[18px]">Email:</span>
                                <a href="mailto:info@fordetech.com" className="font-poppins text-white/90 text-[18px] hover:text-[#FFB23E] transition-colors">
                                    info@fordetech.com
                                </a>
                            </div>
                            <div className="flex flex-col pt-4">
                                <span className="font-poppins font-bold text-white text-[18px]">Partnerships:</span>
                                <a href="mailto:partnerships@fordesteh.com" className="font-poppins text-white/90 text-[18px] hover:text-[#FFB23E] transition-colors">
                                    partnerships@fordesteh.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 bg-[#002773] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className="space-y-8 max-w-[500px]">
                        <div className="space-y-2">
                            <div className="relative inline-block">
                                <h3 className="font-sora font-bold text-[32px] text-white">
                                    Send inquiry
                                </h3>
                                <div className="mt-2 w-[120px] h-[3px] bg-[#FFB23E] rounded-full" />
                            </div>
                            <p className="font-poppins text-white/70 text-[14px] leading-relaxed pt-2">
                                Fill out the form below and our team will get back to you within 24 hours to discuss your project requirements.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid gap-5">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border border-white/30 rounded-[10px] px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border border-white/30 rounded-[10px] px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins"
                                />
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full bg-transparent border border-white/30 rounded-[10px] px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins"
                                />
                                <textarea
                                    placeholder="Project Details"
                                    rows={4}
                                    className="w-full bg-transparent border border-white/30 rounded-[10px] px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins resize-none"
                                />
                            </div>

                            <button className="w-full bg-[#FFB23E] hover:bg-[#ffa726] text-[rgba(40,41,56,1)] font-bold py-5 rounded-full text-[18px] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                Send Contact
                            </button>
                        </form>

                        <div className="flex justify-center pt-2">
                            <button className="group flex items-center gap-2 text-white font-bold text-[16px] hover:text-[#FFB23E] transition-colors">
                                Get in touch with us
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
