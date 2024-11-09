import React from "react";
import { motion } from "framer-motion";
import Button from "../../../components/common/Button";

const sectionVariants = {
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

const ContactSection = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-start px-6 py-16 max-w-7xl mx-auto space-y-12 md:space-y-0 md:space-x-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-left"
      >
        <h4 className="text-[#0057FF] font-semibold mb-2">Get in touch</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-[#0B0C3A] mb-4 leading-tight">
          Have a question or feedback?
        </h2>
        <div className="w-20 h-1 bg-blue-600 mb-4"></div>
        <p className="text-gray-700 text-lg">
          For any questions or information about our services, feel free to
          reach out via email or phone. Our team is here to provide prompt
          assistance and ensure you have all the details you need.
        </p>
      </motion.div>

      {/* Right Section (Contact Form) */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
      >
        <h3 className="text-gray-800 font-semibold text-lg mb-1">Contact Us</h3>
        <h4 className="text-[#0057FF] font-bold text-2xl mb-6">
          Send Us a Message
        </h4>

        <form className="space-y-5">
          {/* Name Field */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label
              htmlFor="name"
              className="block text-gray-800 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label
              htmlFor="email"
              className="block text-gray-800 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Phone Number Field */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label
              htmlFor="phone"
              className="block text-gray-800 font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your phone number"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <label
              htmlFor="message"
              className="block text-gray-800 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Write your message here"
            ></textarea>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button variant="full">Send</Button>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection;
