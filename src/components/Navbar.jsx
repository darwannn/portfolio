import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className=" w-full bg-white py-4 font-semibold sticky top-0 shadow-lg "
      style={{ zIndex: "1000" }}
    >
      <div className="flex items-center justify-center md:justify-between md:mx-5 lg:justify-between  lg:mx-5 xl:justify-between xl:mx-5 ">
        <ul className="text-right w-full">
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
      </div>
    </nav>
  );
};

export default Navbar;
