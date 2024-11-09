import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const features = [
    {
      image: "/icons/mdi_business-outline.svg",
      title: "Expertise",
      description:
        "Our team of skilled professionals brings a wealth of experience to the table, ensuring that your projects are in capable hands.",
    },
    {
      image: "/icons/ci_building-01.svg",
      title: "Innovation",
      description:
        "We stay at the forefront of technological advancements, incorporating the latest trends and methodologies into our services to keep your business ahead of the curve.",
    },
    {
      image: "/icons/person1212.svg",
      title: "Client-Centric Approach",
      description:
        "We place our clients at the heart of everything we do, tailoring our services to meet your specific needs and goals.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="flex flex-col items-center gap-4 mb-10 md:mb-16"
      >
        <h2 className="text-[#0B0C3A] text-3xl md:text-4xl font-bold text-center px-4">
          Why Choose Fordest Technologies?
        </h2>
        <motion.div
          className="h-1 w-24 md:w-36 bg-[#0B0C3A] rounded-full origin-center"
          variants={underlineVariants}
        ></motion.div>
      </motion.div>

      {/* Features Container */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="flex flex-col items-start text-start p-6 border border-[#BDBDBD] rounded-lg shadow-md"
              variants={cardVariants}
            >
              <img
                src={feature.image}
                alt={feature.title}
                width={40}
                className="mb-4"
              />
              <h3 className="font-semibold text-[#0B0C3A] text-xl md:text-2xl mb-2">
                {feature.title}
              </h3>
              <p className="text-[#1D1D1D] text-sm md:text-base font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
