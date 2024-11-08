import React from "react";
import { motion } from "framer-motion";

const OurApproach = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.2, staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto mb-24 mt-14">
      {/* Image Section */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-start items-center mb-8 lg:mb-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src="/Group 65.png"
          alt="Hero illustration of software solutions"
          className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
          loading="eager"
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        className="flex flex-col gap-6 w-full lg:w-1/2 max-w-xl px-4 lg:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col items-start gap-4">
          <motion.h2
            className="text-[#0B0C3A] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start"
            variants={textVariants}
          >
            Our Approach
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
          At Fordest Technologies, we believe in a client-centric approach that
          goes beyond just delivering projects. We strive to build lasting
          partnerships, understanding the unique challenges each client faces.
          Our collaborative process ensures that the solutions we provide align
          seamlessly with your goals and aspirations.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default OurApproach;
