"use client";

import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const ContactSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company'),
            projectDetails: formData.get('projectDetails'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl flex flex-col md:flex-row min-h-[500px] md:min-h-[600px]">
                {/* Left Side - Image Background */}
                <div className="relative w-full md:w-1/2 min-h-[350px] md:min-h-full">
                    <img
                        src="/contact-bg.png"
                        alt="Join our mission"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1A1B4B]/75 backdrop-blur-[2px]" />

                    <div className="relative h-full flex flex-col justify-center p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8">
                        <div className="space-y-4">
                            <h2 className="font-sora font-bold text-[32px] sm:text-[40px] md:text-[52px] leading-[1.1] text-white">
                                Let&apos;s Work<br />Together
                            </h2>
                            <p className="font-poppins text-white/80 text-sm md:text-[16px] max-w-[450px] leading-relaxed">
                                Have a project in mind or want to learn more about how we can help your business?<br className="hidden md:block" />
                                Get in touch with Fordest Technologies today.
                            </p>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                            <div className="flex flex-col">
                                <span className="font-poppins font-bold text-white text-[16px] md:text-[18px]">Email:</span>
                                <a href="mailto:info@fordetech.com" className="font-poppins text-white/90 text-base md:text-[18px] hover:text-[#FFB23E] transition-colors break-words">
                                    info@fordetech.com
                                </a>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-poppins font-bold text-white text-[16px] md:text-[18px]">Partnerships:</span>
                                <a href="mailto:partnerships@fordesteh.com" className="font-poppins text-white/90 text-base md:text-[18px] hover:text-[#FFB23E] transition-colors break-words">
                                    partnerships@fordesteh.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 bg-[#002773] p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className="space-y-8 w-full max-w-[500px] mx-auto md:mx-0">
                        <div className="space-y-2">
                            <div className="relative inline-block">
                                <h3 className="font-sora font-bold text-[28px] md:text-[32px] text-white">
                                    Send inquiry
                                </h3>
                                <div className="mt-2 w-[100px] md:w-[120px] h-[3px] bg-[#FFB23E] rounded-full" />
                            </div>
                            <p className="font-poppins text-white/70 text-[13px] md:text-[14px] leading-relaxed pt-2">
                                Fill out the form below and our team will get back to you within 24 hours to discuss your project requirements.
                            </p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="grid gap-5">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border border-white/20 rounded-[12px] px-6 py-3.5 md:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins text-sm md:text-base"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email"
                                    className="w-full bg-transparent border border-white/20 rounded-[12px] px-6 py-3.5 md:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins text-sm md:text-base"
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    className="w-full bg-transparent border border-white/20 rounded-[12px] px-6 py-3.5 md:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins text-sm md:text-base"
                                />
                                <textarea
                                    name="projectDetails"
                                    required
                                    placeholder="Project Details"
                                    rows={4}
                                    className="w-full bg-transparent border border-white/20 rounded-[12px] px-6 py-3.5 md:py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FFB23E] transition-colors font-poppins resize-none text-sm md:text-base"
                                />
                            </div>

                            <button
                                disabled={isLoading}
                                className="w-full bg-[#FFB23E] hover:bg-[#ffa726] text-[rgba(40,41,56,1)] font-bold py-5 rounded-full text-[18px] transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="animate-spin w-5 h-5" />
                                        Sending...
                                    </>
                                ) : (
                                    'Send Contact'
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-400 text-center font-bold">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-center font-bold">Failed to send message. Please try again.</p>
                            )}
                        </form>

                        <div className="flex justify-center pt-2">
                            <button className="group flex items-center gap-2 text-white font-bold text-[16px] hover:text-[#FFB23E] transition-colors cursor-pointer">
                                Get in touch with us
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
