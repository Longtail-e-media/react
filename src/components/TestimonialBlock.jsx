import React, { useEffect, useState } from "react";
import { IoIosChatboxes } from "react-icons/io";

const TestimonialBlock = ({ testimonials }) => {
  return (
    <>
      {testimonials.map((item) => (
        <div className="lg:w-2/3 text-center" key={item.id}>
          <div className="block justify-center mt-14">
            <h1 className="text-4xl">
              <i className="pe-7s-">
                <IoIosChatboxes />
              </i>
            </h1>
            <h4 className="font-light italic text-base">"{item.content}"</h4>
            <img
              src={item.img}
              className="h-16 w-16 mx-auto rounded-full mt-4 mb-2.5"
              alt={item.title}
            />
            <p>
              {item.title} - {item.subTitle}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialBlock;
