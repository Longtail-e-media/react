import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBlock from "../components/ServiceBlock";
import ClientBlock from "../components/ClientBlock";
import { services } from "../constants/data";

const clients = [
  { id: 1, img: "images/clients/clients-1.png", title: "Essence" },
  { id: 2, img: "images/clients/clients-2.png", title: "Black Swan" },
  { id: 3, img: "images/clients/clients-3.png", title: "Toykids" },
  { id: 4, img: "images/clients/clients-4.png", title: "Quadra" },
];

const Service = () => {
  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  We provide a absolute list of Superior digital services.
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

      <section className="section py-10">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <ServiceBlock services={services} />
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="container">
          <div className="flex">
            <div className="w-full flex justify-center">
              <div className="text-4xl text-black border-b-[3px] border-black">
                Our Clients.
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 gap-10 mt-16">
            <ClientBlock clients={clients} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;
