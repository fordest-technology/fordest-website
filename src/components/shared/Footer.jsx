import React from "react";
import logo from "../../assets/logodark.png";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 py-10">
      <section className="grid grid-cols-10 gap-8 px-6 2xl:max-w-7xl mx-auto border-t border-gray-500 pt-6">
        <div className="col-span-10 sm:col-span-6 lg:col-span-3">
          <img src={logo} alt="" className="w-[100px]" />
          <div className="space-y-2">
            <p className="text-sm text-gray-600 my-1">
              Fordest Technologies was born out of shared passion for
              technologies and a vision to bridge the gap between ideas and
              implementation
            </p>
            <p className="flex items-center gap-2 text-sm">
              <CiMail /> info@fordestech.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <IoCallOutline /> +2348127874913
            </p>
          </div>
        </div>

        <div className="col-span-10 sm:col-span-4 lg:col-span-2 text-sm">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <ul className="space-y-2 flex flex-col gap-2">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/technologies">Technologies and Expertise</Link>
            <Link to="/contact">Contact Us</Link>
          </ul>
        </div>

        <div className="col-span-10 sm:col-span-6 lg:col-span-3 text-sm">
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="flex flex-col gap-1">
            <Link to="#">Custom Software Development</Link>
            <Link to="/services">Web and Mobile App development</Link>
            <Link to="/technologies">UI/UX Design</Link>
            <Link to="/contact">Cloud Solutions</Link>
            <Link to="/contact">Quality Asurance and Testing</Link>
          </ul>
        </div>

        <div className="col-span-10 sm:col-span-4 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className=" flex gap-2 items-center">
            <Link to="#">
              <FaInstagram size={24}/>
            </Link>
            <Link to="#">
              <FaXTwitter size={24}/>
            </Link>
            <Link to="#">
              <FaFacebook size={24}/>
            </Link>
            <Link to="#">
              <FaLinkedin size={24}/>
            </Link>
          </ul>
        </div>
      </section>
      {/* Bottom copyright */}
      <div className="text-center mt-8 border-t border-gray-500 pt-4">
        <p>
          &copy; {new Date().getFullYear()} Fordest Technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
