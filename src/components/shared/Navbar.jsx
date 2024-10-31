import React, { useState } from "react";
import logo from "../../assets/logodark.png";
import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className=" w-full bg-white fixed top-0 left-0 z-30 shadow-lg">
      <section className="text flex justify-between items-center bg-white py-3 px-6 mx-auto w-[90%] max-w-7xl ">
        <div className="w-[100px]">
          <img src={logo} alt="fordest-logo" className="w-full" />
        </div>
        <div className="hidden md:flex gap-4 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/technologies">Technologies and Expertise</NavLink>
        </div>
        <div>
          <Link
            to="/contact"
            className="text-white bg-blue py-2 px-5 font-semibold rounded-md hidden md:block"
          >
            Contact Us
          </Link>
        </div>
        <div className="block md:hidden" onClick={() => setMenu(true)}>
          <IoMdMenu size={24} />
        </div>
      </section>

      <section
        className={`transform transition-transform duration-300 ease-in-out flex-col flex md:hidden gap-4 bg-white shadow-xl fixed right-0 top-0 rounded-sm h-fit w-[200px] py-6 px-6 z-50 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between">
          <div></div>
          <div
            onClick={() => setMenu(false)}
            className="text-left bg-black/10 p-1 w-fit rounded-full cursor-pointer"
          >
            <IoMdClose size={24} />
          </div>
        </div>
        <div className="flex flex-col gap-y-6 font-semibold">
          <NavLink to="/" onClick={() => setMenu(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenu(false)}>
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setMenu(false)}>
            Services
          </NavLink>
          <NavLink to="/technologies" onClick={() => setMenu(false)}>
            Technologies and Expertise
          </NavLink>
        </div>
        <div>
          <Link
            to="/contact"
            className="text-white bg-blue py-2 px-5 font-semibold rounded-md "
          >
            Contact Us
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
