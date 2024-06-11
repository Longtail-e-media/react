import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TestimonialBlock from "../components/TestimonialBlock";
import TeamBlock from "../components/TeamBlock";
import HomeContentBlock from "../components/HomeContentBlock";
import { mithila, teams, testimonials } from "../constants/data";

const About = () => {
  // getting image from backend article
  const [articleImage, setArticleImage] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/article.php?id=1&field=image")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return fieldDetail ;");
            return func();
          };
          const actualData = safeData(data);
          setArticleImage(actualData);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // getting testimonial from backend
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/testimonials.php")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return testimonialDetail;");
            return func();
          };
          const actualData = safeData(data);
          setTestimonials(actualData);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  // getting testimonial from backend
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/members.php")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return memberDetails;");
            return func();
          };
          const actualData = safeData(data);
          setTeams(actualData);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <HomeContentBlock isInner={true} />
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
                src={articleImage.image}
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
