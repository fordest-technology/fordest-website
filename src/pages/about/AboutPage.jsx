import React from "react";
import AboutHeroSection from "./components/AboutHeroSection";
import OurApproach from "./components/OurApproach";
import OurCoreValue from "./components/OurCoreValue";
import OurTeam from "./components/OurTeam";
import JoinOurJourney from "./components/JoinOurJourney";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <OurApproach />
      <OurCoreValue />
      <OurTeam />
      <JoinOurJourney />
    </div>
  );
};

export default AboutPage;
