import React, { useState } from "react";
import Icofont from "react-icofont";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../constants/data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex flex-col">
        <nav id="nav" className="py-8 md:border-b-0 border-b" role="navigation">
          <div className="container flex flex-wrap items-center md:flex-no-wrap">
            <Link to="/" className="flex">
              <i className="icofont-deer-head text-black text-[42px]"></i>
            </Link>

            <div className="ml-auto md:hidden">
              <button
                onClick={toggleMenu}
                className="flex items-center rounded"
                type="button"
              >
                <i className="pe-7s-menu text-3xl"></i>
              </button>
            </div>
            <div
              id="menu"
              className={`w-full md:w-auto h-0 transition-all ease-out duration-300 md:transition-none md:flex-grow md:flex md:items-center opacity-0 md:opacity-100 ${
                isMenuOpen ? " navbar-show" : ""
              }`}
            >
              <ul
                id="ulMenu"
                className="flex flex-col duration-300 ease-out sm:transition-none md:flex-row ml-auto mt-5 md:mt-0"
              >
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "lg:px-6 font-medium font-secondary block  p-3 uppercase text-sm text-blue-500"
                          : "lg:px-6 font-medium font-secondary block  p-3 uppercase text-sm text-black/70 hover:text-blue-500"
                      }
                      to={item.link}
                      title={item.title}
                    >
                      {item.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
