import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialBlock from "../components/TestimonialBlock";
import TeamBlock from "../components/TeamBlock";

const About = () => {
  const testimonials = [
    {
      id: 1,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.",
      img: "/images/user-1.png",
      title: "Theme User",
      subTitle: "Web Designer",
    },
  ];

  const teams = [
    {
      id: 1,
      img: "/images/team/team-1.jpg",
      title: "Johan De Jager",
      job: "CEO/Founder",
    },
    {
      id: 2,
      img: "/images/team/team-2.jpg",
      title: "Andrew Sparks",
      job: "CTO/Founder",
    },
    {
      id: 3,
      img: "/images/team/team-3.jpg",
      title: "David Downs",
      job: "Web Designer",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  Buckzo Is One Of Best Web Design & Development Company
                </h1>
                <p className="text-base text-gray-400">
                  We create digital assets and we're focused on Web Technologies
                  and Design, based on London, United Kingdom. We build creative
                  & professional themes.
                </p>
                <h4 className="text-black mt-8">
                  A digital studio crafting{" "}
                  <span className=" border-b-[3px] border-black">
                    beautiful
                  </span>{" "}
                  experiences.
                </h4>
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
                src="/images/bg.jpg"
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
