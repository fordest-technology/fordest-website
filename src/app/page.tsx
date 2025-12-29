import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import BuildTogether from "@/components/BuildTogether";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <WhatWeDo />
      <WhyChooseUs />
      <Projects />
      <ContactSection />
      <BuildTogether />
    </div>
  );
}