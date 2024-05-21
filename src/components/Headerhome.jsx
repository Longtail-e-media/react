import React from "react";
import Navigation from "./Navigation";
import Socialmedia from "./Socialmedia";
import {company} from "../data/data";


const Headerhome = () => {
  return (
    <header className=" bg-white">
      <div className="head flex justify-between items-center 2xl:container py-2 mx-auto">
        <div className="call flex items-center">
          <img src="src/assets/call.png" width="50" alt="call" />
          <div className="ml-3 border-l pl-3">
            <span>Call us:</span> <br />
            <span className="text-yellow-600">{company.phone}</span>
          </div>
        </div>
        <div className="logo">
          <a href="/">
            <img src={company.logo} height="48px" alt={company.name} />
          </a>
        </div>
        <div className="right flex gap-3 items-center">
          <div className="btn btn1 flex">
            <img src="src/assets/userkey.png" alt="user" />
            Register / Login
          </div>
          <div className="btn btn2 flex rounded bg-orange-400 text-white px-4 py-2 gap-3">
            <img src="src/assets/home.png" alt="user" />
            Sell Property
          </div>
        </div>
      </div>
      <div className="hero bg-gray-500">
        <nav className="border-b border-gray-400">
          <div className="2xl:container mx-auto py-3 flex justify-between text-white">
            <Navigation />

            <div className="rightCol flex gap-10 text-white">
             <Socialmedia />
              <input
                type="text"
                name="search"
                id="search"
                value="Search"
                className=" rounded-lg px-4 py-3 bg-white bg-opacity-20 text-white"
              />
            </div>
          </div>
        </nav>
        <div className="bannerContent container mx-auto h-screen flex flex-col justify-center">
          <div className="w-2/3 mx-auto">
            <div className="px-40 pb-16 text-center text-white">
              <div className="text-6xl font-black pb-8">
                Choose your home for future life
              </div>
              <p>
                Find a variety of properties that suit you very easily, forget
                all difficulties in finding a residence for you
              </p>
            </div>
            <div className="search bg-white rounded-xl p-4 flex gap-3 justify-between">
              <input
                type="text"
                placeholder="Type Keyword"
                className="w-full border rounded-xl px-4"
              />
              <select
                name=""
                id=""
                className="w-full border rounded-xl bg-white px-4"
              >
                <option value="">Property Type</option>
              </select>
              <select
                name=""
                id=""
                className="w-full border rounded-xl bg-white px-4"
              >
                <option value="">Location Type</option>
              </select>
              <button className="bg-yellow-600 p-4 text-white w-full border rounded-xl">
                Search Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headerhome;
