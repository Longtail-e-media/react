import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import WorkGallery from "../components/WorkGallery";
import ServiceBlock from "../components/ServiceBlock";
import HomeContentBlock from "../components/HomeContentBlock";

const Home = () => {

  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <HomeContentBlock />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <WorkGallery />

          <div className="flex justify-center mt-8">
            <Link
              to="/work"
              className="py-4 px-7 rounded text-sm font-medium bg-blue-500 text-white"
            >
              More Works <i className="mdi mdi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <ServiceBlock limit={3} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
