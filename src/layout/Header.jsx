// Navbar.js
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger icon
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">
          Beezu
        </Link>

        <div className="hidden md:flex space-x-4 text-white font-acorn">
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Experience
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Experience
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
