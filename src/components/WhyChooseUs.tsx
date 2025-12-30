import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            number: "1",
            title: "Innovation at Core:",
            description: "Constantly exploring emerging technologies"
        },
        {
            number: "2",
            title: "Global Perspective:",
            description: "Serving businesses and institutions worldwide"
        },
        {
            number: "3",
            title: "Scalable & Secure Solutions:",
            description: "Architecture designed for growth"
        },
        {
            number: "4",
            title: "Client-Centric Approach:",
            description: "Solutions aligned with your goals"
        }
    ];

    return (
        <section className="w-full py-24 px-4 md:px-8 lg:px-16 bg-[#F5F8FF]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="relative inline-block">
                        <h2 className="font-sora font-bold text-[40px] leading-[1.1] w-[500px] text-[rgba(40,41,56,1)]">
                            Why Choose<br />
                            Fordest Technologies<span className="text-[rgba(40,41,56,1)]">:</span>
                        </h2>
                        <div className="mt-4 w-[220px] h-[4px] bg-[#FFB23E] rounded-full" />
                    </div>

                    <p className="max-w-[500px] font-poppins font-bold text-[18px] leading-[1.6] text-[rgba(40,41,56,1)]">
                        Our solutions are user-focused, data-driven, and designed for global scalability, ensuring long-term success and measurable impact.
                    </p>

                    <button className="group flex items-center gap-3 text-[#0056D2] font-bold text-[18px] hover:gap-5 transition-all">
                        Get in touch with us
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Right Grid */}
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-4">
                            {/* Number Icon */}
                            <div className="relative w-12 h-12">
                                {/* Orange shadow/offset */}
                                <div className="absolute inset-0 bg-[#FFB23E] rounded-lg translate-x-1 translate-y-1" />
                                {/* Blue box with number */}
                                <div className="absolute inset-0 bg-[#3B42FF] rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-[20px]">{feature.number}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-poppins font-bold text-[20px] leading-tight text-[rgba(40,41,56,1)]">
                                    {feature.title}
                                </h3>
                                <p className="font-poppins font-bold w-[290px] text-[15px] leading-relaxed text-[rgba(40,41,56,1)]">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
