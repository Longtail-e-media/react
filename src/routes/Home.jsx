import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Title from "../components/Title";
import Explore from "../components/Explore";
import Discover from "../components/Discover";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Title
        mainTitle="Explore our listings"
        subTitle="Lorem ipsum dolor sit amet,
      consectetur adipiscing elit. Integer vel lobortis justo"
      />
      <Explore />
      <Title
        mainTitle="Discover the latest real estate"
        subTitle="Lorem ipsum dolor sit amet,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
      />
      <Discover />
      <Search />
      <Footer />
    </div>
  );
};

export default Home;
