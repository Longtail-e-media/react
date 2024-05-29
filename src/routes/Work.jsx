import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import WorkGallery from "../components/WorkGallery";
import { workContent } from "../constants/data";

const Work = () => {
  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  {workContent.title}
                </h1>
                <p className="text-base text-gray-400">
                  {workContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <WorkGallery />

          <div className="flex justify-center my-8">
            <Link
              to="/work"
              className="py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white"
            >
              More Works <i className="mdi mdi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Work;
