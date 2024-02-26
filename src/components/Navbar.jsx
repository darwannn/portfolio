import React from "react";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className=" w-full bg-white py-4 font-semibold sticky top-0 shadow-lg "
      style={{ zIndex: "1000" }}
    >
      <ul className="flex justify-center md:justify-end md:mx-5 lg:justify-end  lg:mx-5 xl:justify-end xl:mx-5 ">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-500"
            } mx-2 hover:cursor-pointer`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-500"
            } mx-2 hover:cursor-pointer`
          }
          to="/about"
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-500"
            } mx-2 hover:cursor-pointer`
          }
          to="/projects"
        >
          Projects
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "text-black" : "text-gray-500"
            } mx-2 hover:cursor-pointer`
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
