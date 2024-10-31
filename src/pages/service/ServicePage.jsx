import React from "react";
import ServiceHero from "./components/ServiceHero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import GetInTouch from "./components/GetInTouch";

const ServicePage = () => {
  return (
    <div>
      <ServiceHero />
      <ServicesSection />
      <WhyChooseUs />
      <GetInTouch />
    </div>
  );
};

export default ServicePage;
