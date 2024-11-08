import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease: "easeOut", delay: 1 },
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const textContentVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delayChildren: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const OurMission = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full px-4 md:px-8 lg:px-16 xl:px-24 justify-center items-center flex flex-col"
    >
      {/* Section Header */}
      <motion.div
        variants={headerVariants}
        className="flex flex-col items-center gap-4 mb-8 md:mb-12"
      >
        <motion.h2 className="text-[#0B0C3A] text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2 md:px-4">
          Our Mission
        </motion.h2>
        <motion.div className="h-1 w-12 md:w-16 lg:w-20 bg-[#0B0C3A] rounded-full"></motion.div>
      </motion.div>

      {/* Mission Statement */}
      <motion.h2
        variants={headerVariants}
        className="text-[#0B0C3A] text-xl md:text-2xl lg:text-3xl font-bold text-center px-4 max-w-[900px] mx-auto mb-10 lg:mb-16"
      >
        "To empower businesses through innovative and reliable software
        solutions, driving growth and success in the digital age."
      </motion.h2>

      <div className="flex flex-col lg:flex-row justify-center w-full md:w-[88%] max-w-[1200px] items-center mx-auto gap-1">
        {/* Image */}
        <motion.div
          variants={imageVariants}
          whileHover="hover"
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <motion.img
            src="/Mission Pic.png"
            alt="Hero illustration of software solutions"
            className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto object-contain"
            loading="eager"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={textContentVariants}
          className="flex flex-col justify-start items-start w-full lg:w-1/2 px-4 lg:px-6 gap-4"
        >
          <motion.h2 className="text-[#0B0C3A] text-2xl md:text-3xl lg:text-3xl font-medium">
            Let's Build Something Extraordinary Together:
          </motion.h2>
          <motion.p className="text-base md:text-base lg:text-lg lg:w-[630px]">
            Whether you're a startup with a groundbreaking idea or an
            established enterprise seeking to elevate your digital presence,
            Fordest Technologies is here to collaborate with you. Let's embark
            on a journey to bring your software dreams to life.
          </motion.p>
          <motion.p className="text-base md:text-base lg:text-lg">
            Contact us today to discuss your project and discover the endless
            possibilities of software innovation.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} className="mt-4">
            <Button variant="lg">Contact Us</Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurMission;
