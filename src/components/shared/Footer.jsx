import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logodark.png";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-10">
      <motion.section
        className="grid grid-cols-10 gap-8 px-6 2xl:max-w-7xl mx-auto border-t border-gray-500 pt-6"
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
          className="col-span-10 sm:col-span-6 lg:col-span-3"
          variants={sectionVariants}
        >
          <img
            src={logo}
            alt="Fordest Technologies logo"
            className="w-[100px]"
          />
          <div className="space-y-2">
            <p className="text-sm text-gray-600 my-1">
              Fordest Technologies was born out of a shared passion for
              technology and a vision to bridge the gap between ideas and
              implementation.
            </p>
            <p className="flex items-center gap-2 text-sm">
              <CiMail /> info@fordestech.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <IoCallOutline /> +2348127874913
            </p>
          </div>
        </motion.div>

        {/* Categories Section */}
        <motion.div
          className="col-span-10 sm:col-span-4 lg:col-span-2 text-sm"
          variants={sectionVariants}
        >
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="space-y-2 flex flex-col gap-2">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/technologies">Technologies and Expertise</Link>
            <Link to="/contact">Contact Us</Link>
          </ul>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="col-span-10 sm:col-span-6 lg:col-span-3 text-sm"
          variants={sectionVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-1">
            <Link to="#">Custom Software Development</Link>
            <Link to="/services">Web and Mobile App development</Link>
            <Link to="/technologies">UI/UX Design</Link>
            <Link to="/contact">Cloud Solutions</Link>
            <Link to="/contact">Quality Assurance and Testing</Link>
          </ul>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          className="col-span-10 sm:col-span-4 lg:col-span-2"
          variants={sectionVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex gap-2 items-center">
            <motion.a
              href="https://www.instagram.com/fordest_technologies/"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/FordestTech"
              whileHover={{ scale: 1.1 }}
            >
              <FaXTwitter size={24} />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/profile.php?id=61554665091364"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/fordest-technologies/"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
          </ul>
        </motion.div>
      </motion.section>

      {/* Bottom copyright */}
      <motion.div
        className="text-center mt-8 border-t border-gray-500 pt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <p>&copy; {new Date().getFullYear()} Fordest Technologies.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
