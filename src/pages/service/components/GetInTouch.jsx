import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

const GetInTouch = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 87, 255, 0.3)" },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between sm:items-start md:items-center gap-8 lg:gap-4 my-16 py-8 px-6 md:border-2 md:border-[#0057FF] rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Icon and Text Section */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 md:items-center sm:items-start">
        <motion.img
          src="/icons/grommet-icons_contact.svg"
          width={60}
          height={60}
          alt="message_icon"
          className="flex-shrink-0"
          variants={itemVariants}
        />
        <div className="flex flex-col gap-4 text-start lg:text-left max-w-2xl">
          <motion.h1
            className="text-[#0B0C3A] text-xl md:text-2xl font-semibold"
            variants={itemVariants}
          >
            Get in Touch to Elevate Your Software Experience:
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-[#000000] font-medium"
            variants={itemVariants}
          >
            We stay at the forefront of technological advancements,
            incorporating the latest trends and methodologies into our services
            to keep your business ahead of the curve.
          </motion.p>
        </div>
      </div>

      {/* Button Section */}
      <motion.div variants={itemVariants}>
        <motion.div
          className="inline-block"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Button variant="md">
            <a href="#">Contact Us</a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GetInTouch;
