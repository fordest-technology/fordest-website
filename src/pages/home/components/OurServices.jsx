import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const OurServices = () => {
  const services = [
    {
      icon: "/icons/solar_programming-linear.svg",
      title: "Custom Software Development",
      description:
        "Get tailored software solutions designed to meet your unique business needs.",
    },
    {
      icon: "/icons/solar_programming-linear (1).svg",
      title: "Web and Mobile App Development",
      description:
        "Build engaging web and mobile apps that elevate user experience.",
    },
    {
      icon: "/icons/Frame 118.svg",
      title: "UI/UX Design",
      description:
        "Create intuitive and visually stunning interfaces for your users.",
    },
    {
      icon: "/icons/ic_outline-cloud.svg",
      title: "Cloud Solutions",
      description:
        "Optimize your business with scalable and secure cloud solutions.",
    },
    {
      icon: "/icons/Frame 119.svg",
      title: "Quality Assurance and Testing",
      description:
        "Ensure high-quality software with rigorous testing and QA services.",
    },
  ];

  // Split services into rows
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-12 md:py-16 lg:py-20 px-4"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 mb-10 md:mb-16"
      >
        <h2 className="text-[#0B0C3A] text-3xl md:text-4xl font-bold text-center px-4">
          Our Services
        </h2>
        <div className="h-1 w-14 md:w-28 bg-[#0B0C3A] rounded-full"></div>
      </motion.div>

      {/* Services Container */}
      <div className="bg-[#F4F7FD] py-12 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* First Row */}
          <motion.div
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          >
            {firstRow.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                }}
                className="relative flex flex-col gap-4 justify-center items-center p-6 max-w-[369px] mx-auto w-full bg-white rounded-lg"
              >
                <motion.img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 h-12 object-contain"
                  variants={iconVariants}
                />
                <h3 className="text-[#0B0C3A] text-xl font-semibold text-center">
                  {service.title}
                </h3>
                <p className="text-center text-sm md:text-[14px] text-gray-700">
                  {service.description}
                </p>

                {/* Right Divider */}
                {index !== firstRow.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                    <div className="h-24 border-l-2 border-[#FF9900] rounded-xl"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Second Row - Centered */}
          <div className="flex justify-center">
            <motion.div
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {secondRow.map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                  }}
                  className="relative flex flex-col gap-4 justify-center items-center p-6 max-w-[369px] mx-auto w-full bg-white rounded-lg"
                >
                  <motion.img
                    src={service.icon}
                    alt={`${service.title} icon`}
                    className="w-12 h-12 object-contain"
                    variants={iconVariants}
                  />
                  <h3 className="text-[#0B0C3A] text-xl font-semibold text-center">
                    {service.title}
                  </h3>
                  <p className="text-center text-sm md:text-[14px] text-gray-700">
                    {service.description}
                  </p>

                  {/* Right Divider */}
                  {index === 0 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                      <div className="h-24 border-l-2 border-[#FF9900] rounded-xl"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;
