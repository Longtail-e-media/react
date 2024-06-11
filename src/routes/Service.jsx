import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceBlock from "../components/ServiceBlock";
import ClientBlock from "../components/ClientBlock";
import { clients, services } from "../constants/data";
import ServiceContentBlock from "../components/ServiceContentBlock";

const Service = () => {
  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <ServiceContentBlock />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <ServiceBlock />
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
            <ClientBlock />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;
