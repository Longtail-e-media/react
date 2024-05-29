import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialBlock from "../components/TestimonialBlock";
import TeamBlock from "../components/TeamBlock";
import HomeContentBlock from "../components/HomeContentBlock";
import { mithila, teams, testimonials } from "../constants/data";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <HomeContentBlock isInner={true}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full">
              <img
                src={mithila}
                alt="about-img"
                className="border rounded p-1 bg-gray-50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="container">
          <div className="flex">
            <div className="w-full flex justify-center">
              <div className="text-4xl text-black border-b-[3px] border-black">
                What is our clients say?
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <TestimonialBlock testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="container">
          <div className="flex">
            <div className="w-full flex justify-center">
              <div className="text-4xl text-black border-b-[3px] border-black">
                Meet the Team
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 mt-14">
            <TeamBlock teams={teams} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
