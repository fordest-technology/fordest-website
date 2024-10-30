import React from "react";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import OurServices from "./components/OurServices";
import OurMission from "./components/OurMission";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustSection />
      <WhyChooseUsSection />
      <OurServices />
      <OurMission />
    </div>
  );
};

export default Home;
