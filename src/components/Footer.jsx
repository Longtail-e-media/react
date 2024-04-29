import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { id: 1, title: "Dribble", link: "#", class: "icofont-dribble" },
    { id: 2, title: "Facebook", link: "#", class: "icofont-facebook" },
    { id: 3, title: "Skype", link: "#", class: "icofont-skype" },
    { id: 4, title: "Twitter", link: "#", class: "icofont-twitter" },
    { id: 5, title: "Whatsapp", link: "#", class: "icofont-whatsapp" },
  ];
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
                <h4 className="font-bold text-lg mt-2 uppercase">Buckzo</h4>

                <ul className="flex justify-center mt-8 gap-3">
                  {socialLinks.map((item) => (
                    <li key={item.id}>
                      <a
                        className="w-11 h-11 rounded flex items-center justify-center text-lg bg-gray-100 text-black hover:text-white hover:bg-blue-500 transition-all"
                        href={item.link}
                      >
                        <i className={item.class}></i>
                      </a>
                    </li>
                  ))}
                </ul>

                <p className="text-muted mt-8">
                  © {new Date().getFullYear()} Buckzo. By MyraStudio
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
