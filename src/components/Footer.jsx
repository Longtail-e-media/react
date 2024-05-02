import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] h-64 flex items-center">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="footer_img w-40">
            <img src={logo} alt="" />
          </div>
          <div className="footer_menu">
            <ul className="flex gap-10">
              <li>Home</li>
              <li>Property</li>
              <li>Page</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social_icons">
            <ul className="flex gap-3">
              <li className="text-white rounded-full bg-slate-900  text-xl p-4 border-2 border-white">
                <FaFacebookF />
              </li>
              <li className="text-white rounded-full  bg-slate-900  text-xl p-4 border-2 border-white">
                <FaTwitter />
              </li>
              <li className="text-white rounded-full  bg-slate-900  text-xl p-4 border-2 border-white">
                <FaLinkedinIn />
              </li>
              <li className="text-white rounded-full  bg-slate-900  text-xl p-4 border-2 border-white">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="text-[#595959] text-center mt-10">
            <p>
              Copyright © 2023 Real estate CP. Designed & Developed by
              Themesflat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
