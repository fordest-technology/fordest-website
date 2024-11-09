import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 1.05,
      transition: { duration: 5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="w-full h-[600px] mt-16 flex flex-col gap-4 justify-center items-center"
      style={{
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={backgroundVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-center gap-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center px-2 md:px-4"
          variants={textVariants}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="h-1 w-12 md:w-16 lg:w-20 bg-white rounded-full origin-center"
          variants={underlineVariants}
        ></motion.div>
      </motion.div>
      <motion.div
        className="max-w-[800px] px-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="items-center justify-center text-center text-lg text-white font-semibold leading-[27px]">
          Thank you for considering Fordest technologies. We value your interest
          and look forward to assisting you. There are several ways to get in
          touch with us.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ContactHero;
