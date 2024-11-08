import React from "react";
import { motion } from "framer-motion";

const AboutHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.2, staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto mb-16 mt-28">
      {/* Text Content Section */}
      <motion.div
        className="flex flex-col gap-6 w-full justify-start lg:w-1/2 max-w-xl mb-8 lg:mb-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-start gap-2">
          <motion.h2
            className="text-[#0B0C3A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start"
            variants={textVariants}
          >
            Our Story
          </motion.h2>
          <motion.div
            className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full origin-left"
            variants={underlineVariants}
          ></motion.div>
        </div>

        <motion.p
          className="text-sm md:text-base lg:text-lg text-gray-700"
          variants={textVariants}
        >
          Welcome to Fordest Technologies, where innovation meets expertise to
          shape the future of software development. Founded in 2022, we have
          been on a mission to deliver exceptional and tailor-made solutions
          that propel businesses into the digital age.
        </motion.p>
        <motion.p
          className="text-sm md:text-base lg:text-lg text-gray-700"
          variants={textVariants}
        >
          Fordest Technologies was born out of a shared passion for technology
          and a vision to bridge the gap between ideas and implementation.
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-end items-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src="/Group 64.png"
          alt="Hero illustration of software solutions"
          className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
          loading="eager"
        />
      </motion.div>
    </div>
  );
};

export default AboutHeroSection;
