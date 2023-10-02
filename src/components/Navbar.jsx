import React from "react";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <nav
      className=" w-full bg-white py-4 font-semibold sticky top-0 shadow-lg "
      style={{ zIndex: "1000" }}
    >
      <ul className="flex justify-center md:justify-end md:mx-5 lg:justify-end  lg:mx-5 xl:justify-end xl:mx-5 ">
        <li className="mx-2 hover:cursor-pointer">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li className="mx-2 hover:cursor-pointer">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="mx-2 hover:cursor-pointer">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="ms-4 hover:cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
