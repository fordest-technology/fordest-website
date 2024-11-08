import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

const JoinOurJourney = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, duration: 0.8, delay: 0.2 },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const inputBorderVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col items-center gap-4 mb-10 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
      >
        <h2 className="text-[#0B0C3A] text-3xl md:text-4xl font-bold text-center px-4">
          Join Us on the Journey
        </h2>
        <motion.div
          className="h-1 w-14 md:w-28 bg-[#0B0C3A] rounded-full origin-left"
          variants={underlineVariants}
        ></motion.div>
      </motion.div>

      <motion.div
        className="w-[90%] max-w-7xl flex flex-col lg:flex-row justify-center items-center mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        {/* Text Content Section */}
        <motion.div
          className="flex flex-col gap-6 w-full justify-start lg:w-1/2 max-w-xl mb-8 lg:mb-0"
          variants={textVariants}
        >
          <motion.p
            className="text-sm md:text-base lg:text-lg text-gray-700"
            variants={textVariants}
          >
            As we continue to evolve in the ever-changing landscape of
            technology, Fordest Technologies invites you to join us on this
            exciting journey. Whether you're a potential client, partner, or
            team member, we look forward to creating meaningful connections and
            shaping the future together.
          </motion.p>
          <motion.div
            className="flex items-center border border-[#828282] rounded-xl overflow-hidden max-w-md"
            variants={inputBorderVariants}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-gray-700 outline-none"
            />
            <Button
              variant="md"
              className="!rounded-full !px-6 !py-2 bg-blue-600 text-white"
            >
              Join Now
            </Button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 md:flex justify-end items-center hidden"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/Group 66.png"
            alt="Hero illustration of software solutions"
            className="w-full max-w-[400px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] h-auto object-contain"
            loading="eager"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JoinOurJourney;
