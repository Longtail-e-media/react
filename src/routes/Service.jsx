import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TiLeaf } from "react-icons/ti";
import { GiShipWheel } from "react-icons/gi";
import { PiAirplay, PiCoffee } from "react-icons/pi";
import ServiceBlock from "../components/ServiceBlock";
import { IoMdRocket } from "react-icons/io";
import { TbHeadset } from "react-icons/tb";
import ClientBlock from "../components/ClientBlock";

const services = [
  {
    id: 1,
    icon: <TiLeaf />,
    title: "Branding",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 2,
    icon: <GiShipWheel />,
    title: "Highly customizable",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 3,
    icon: <PiAirplay />,
    title: "Responsive design",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 4,
    icon: <PiCoffee />,
    title: "User Experience",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 5,
    icon: <IoMdRocket />,
    title: "Optimised for Speed",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    id: 6,
    icon: <TbHeadset />,
    title: "Dedicated support",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
];

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

      <section class="section py-14" id="home">
        <div class="container">
          <div class="lg:flex justify-center">
            <div class="lg:w-2/3 mx-2">
              <div class="text-center">
                <h1 class="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  We provide a absolute list of Superior digital services.
                </h1>
                <p class="text-base text-gray-400">
                  We create digital assets and we're focused on Web Technologies
                  and Design, based on London, United Kingdom. We build creative
                  & professional themes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section py-10">
        <div class="container">
          <div class="grid lg:grid-cols-3 gap-8">
            <ServiceBlock services={services} />
          </div>
        </div>
      </section>

      <section class="section py-10">
        <div class="container">
          <div class="flex">
            <div class="w-full flex justify-center">
              <div class="text-4xl text-black border-b-[3px] border-black">
                Our Clients.
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-4 gap-10 mt-16">
            <ClientBlock clients={clients} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;
