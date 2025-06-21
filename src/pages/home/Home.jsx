import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Element } from "react-scroll";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import OurServices from "./components/OurServices";
import OurMission from "./components/OurMission";
import ProductSection from "./components/ProductSection";

const Home = () => {
  return (
    <div>
      {/* Animated Sections */}
      <AnimatePresence>
        <Element name="hero">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroSection />
          </motion.div>
        </Element>

        <Element name="trust">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <TrustSection />
          </motion.div>
        </Element>

        <Element name="whyChooseUs">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <WhyChooseUsSection />
          </motion.div>
        </Element>

        <Element name="services">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <OurServices />
          </motion.div>
        </Element>

        <Element name="products">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
         <ProductSection />
          </motion.div>
        </Element>

        <Element name="mission">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          >
            <OurMission />
          </motion.div>
        </Element>
      </AnimatePresence>
    </div>
  );
};

export default Home;
