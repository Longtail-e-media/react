import React from "react";
import Image from "../assets/OIP.jpg";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Circle = () => {
  const Circlee = [
    { id: 1, name: "chile", listing: 1570 },
    { id: 2, name: "Banglore", listing: 1570 },
    { id: 3, name: "New Delhi", listing: 1570 },
    { id: 4, name: "Berlin", listing: 1570 },
    { id: 5, name: "California", listing: 1570 },
    { id: 6, name: "Brazil", listing: 1570 },
  ];
  return (
    <div className="container mx-auto relative">
      <div className="image_slider flex justify-between px-28">
        {Circlee.map(({ id, imgUrl, name, listing }) => (
          <div key={id} className="text-center">
            <img src={Image} alt="" className=" w-28" />
            <div className="text_name">
              <h5 className="mt-4">{name}</h5>
              <p>{1570} listing</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow flex justify-between absolute w-full top-1/3">
        <FaArrowLeftLong />
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default Circle;
