import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import WorkGallery from "../components/WorkGallery";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("");

  const mockupImages = [
    {
      id: 1,
      url: "/images/works/img1.jpg",
      title: "Open Imagination",
      subTitle: "Media, Icons",
    },
    {
      id: 2,
      url: "/images/works/img3.jpg",
      title: "Mac Sunglasses",
      subTitle: "Graphics, UI Elements",
    },
    {
      id: 3,
      url: "/images/works/img7.jpg",
      title: "Shake It!",
      subTitle: "Illustrations, Graphics",
    },
    {
      id: 4,
      url: "/images/works/img12.jpg",
      title: "Shake It!",
      subTitle: "Illustrations, Graphics",
    },
  ];

  const androidImages = [
    {
      id: 1,
      url: "/images/works/img2.jpg",
      title: "Locked Steel Gate",
      subTitle: "Illustrations",
    },
    {
      id: 2,
      url: "/images/works/img4.jpg",
      title: "Sunset Bulb Glow",
      subTitle: "Graphics",
    },
    {
      id: 3,
      url: "/images/works/img5.jpg",
      title: "Console Activity",
      subTitle: "UI Elements, Media",
    },
    {
      id: 4,
      url: "/images/works/img11.jpg",
      title: "Sunset Bulb Glow",
      subTitle: "Graphics",
    },
  ];

  const personalImages = [
    {
      id: 1,
      url: "/images/works/img6.jpg",
      title: "Morning Dew",
      subTitle: "Icons, Illustrations",
    },
    {
      id: 2,
      url: "/images/works/img9.jpg",
      title: "Console Activity",
      subTitle: "UI Elements, Media",
    },
    {
      id: 3,
      url: "/images/works/img10.jpg",
      title: "Sunset Bulb Glow",
      subTitle: "Graphics",
    },
  ];

  const designImages = [
    {
      id: 1,
      url: "/images/works/img8.jpg",
      title: "Console Activity",
      subTitle: "UI Elements, Media",
    },
    {
      id: 2,
      url: "/images/works/img13.jpg",
      title: "Shake It!",
      subTitle: "Illustrations, Graphics",
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
                  See our Works
                </h1>
                <p className="text-base text-gray-400">
                  We create digital assets and we're focused on Web Technologies
                  and Design, based on London, United Kingdom. We build creative
                  & professional themes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full filters-group-wrap mb-3">
              <div className="flex justify-center mb-5">
                <ul className="filter-options flex flex-wrap gap-4 justify-center">
                  <li
                    className={` ${activeFilter === "" ? "active" : ""} `}
                    onClick={() => {
                      setActiveFilter("");
                    }}
                  >
                    <a>All</a>
                  </li>
                  <li
                    className={` ${
                      activeFilter === "android" ? "active" : ""
                    } `}
                    onClick={() => {
                      setActiveFilter("android");
                    }}
                  >
                    <a>Android</a>
                  </li>
                  <li
                    className={` ${activeFilter === "mockup" ? "active" : ""} `}
                    onClick={() => {
                      setActiveFilter("mockup");
                    }}
                  >
                    <a>Mockup</a>
                  </li>
                  <li
                    className={` ${
                      activeFilter === "personal" ? "active" : ""
                    } `}
                    onClick={() => {
                      setActiveFilter("personal");
                    }}
                  >
                    <a>Web</a>
                  </li>
                  <li
                    className={` ${activeFilter === "design" ? "active" : ""} `}
                    onClick={() => {
                      setActiveFilter("design");
                    }}
                  >
                    <a>Design</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="grid" className="grid grid-cols-3">
            {(activeFilter === "" || activeFilter === "android") && (
              <WorkGallery images={androidImages} />
            )}

            {(activeFilter === "" || activeFilter === "mockup") && (
              <WorkGallery images={mockupImages} />
            )}

            {(activeFilter === "" || activeFilter === "personal") && (
              <WorkGallery images={personalImages} />
            )}

            {(activeFilter === "" || activeFilter === "design") && (
              <WorkGallery images={designImages} />
            )}
          </div>

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
