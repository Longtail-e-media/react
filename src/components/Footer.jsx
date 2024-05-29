import React from "react";
import { Link } from "react-router-dom";
import { author, siteName, socialLinks } from "../constants/data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex">
            <div className="w-full">
              <div className="text-center">
                <Link className="text-6xl text-black" href="/home">
                  <i className="icofont-deer-head"></i>
                </Link>
                <h4 className="font-bold text-lg mt-2 uppercase">{siteName}</h4>

                <ul className="flex justify-center mt-8 gap-3">
                  {socialLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-blue-500 transition-all"
                        to={item.link}
                        target="_blank"
                      >
                        <i className={item.class}></i>
                      </Link>
                    </li>
                  ))}
                </ul>

                <p className="text-muted mt-8">
                  © {year} {siteName}. By {author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
