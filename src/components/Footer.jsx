import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { author, siteName, socialLinks } from "../constants/data";

const Footer = () => {
  const year = new Date().getFullYear();

  // getting logo from backend
  const [siteRegulars, setSiteRegulars] = useState("/deer-head.svg");
  useEffect(() => {
    fetch("http://localhost/react/backend/api/siteRegulars.php")
      .then((response) => response.json())
      .then((data) => {
        setSiteRegulars(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // getting menu from backend
  const [socialLinks, setSocialLinks] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/social.php")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return socialList;");
            return func();
          };
          const menuList = safeData(data);
          setSocialLinks(menuList);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <footer className="border-t py-8">
        <div className="container">
          <div className="flex">
            <div className="w-full">
              <div className="text-center">
                {/* <Link className="text-6xl text-black" href="/home">
                  <i className="icofont-deer-head"></i>
                </Link> */}

                <Link
                  to="/home"
                  className="text-6xl text-black flex justify-center"
                >
                  <img src={siteRegulars.logo} className="w-16" />
                </Link>
                <h4 className="font-bold text-lg mt-2 uppercase">
                  {siteRegulars.siteName}
                </h4>

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
                  © {year} {siteRegulars.siteName}. By {siteRegulars.author}
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
