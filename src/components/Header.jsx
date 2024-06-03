import React from "react";
import Navigation from "./Navigation";
import { company } from "../data/data";

const Header = () => {
  return (
    <>
      <header className=" bg-white">
        <div className="head flex justify-between items-center 2xl:container py-2 mx-auto">
          <div className="logo">
            <a href="/">
              <img src={company.logo} height="48px" alt={company.name} />
            </a>
          </div>
          <Navigation />

          <div className="right flex gap-3 items-center">
            <div className="btn btn1 flex">
              <img src="/src/assets/userkey.png" alt="user" />
              Register / Login
            </div>
            <div className="btn btn2 flex rounded bg-orange-400 text-white px-4 py-2 gap-3">
              <img src="/src/assets/home.png" alt="user" />
              Sell Property
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
