import React from "react";
import { serviceContent } from "../constants/data";

const ServiceContentBlock = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
        {serviceContent.title}
      </h1>
      <p className="text-base text-gray-400">{serviceContent.subtitle}</p>
    </>
  );
};

export default ServiceContentBlock;
