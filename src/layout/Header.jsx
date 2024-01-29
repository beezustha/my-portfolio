// Navbar.js
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger icon
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-800 p-4 fixed font-poppins top-0 w-full rounded-b-lg shadow-2xl shadow-purple-300 z-100">
      <div className="container mx-auto flex items-center justify-end md:justify-around lg:justify-around">
        <div className="hidden md:flex text-white font-nav space-x-8 items-center">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={900}
            duration={1000}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            Contact
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
        <div className="md:hidden bg-purple-800 p-4 text-white flex flex-col items-center">
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="my-[5px] cursor-pointer"
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
            onClick={() => setIsOpen(false)}
            className="my-[5px] cursor-pointer"
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
            onClick={() => setIsOpen(false)}
            className="my-[5px] cursor-pointer"
          >
            Experience
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
