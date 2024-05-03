// import React from 'react';
import React, { useState } from "react";


const Slider = () => {
    const slides = [
        {
          url: "https://www.learnreligions.com/thmb/B6kSqgyO7mor_eUTkviOgKUSZQU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/himalaya-mountains-landscape-from-kalapattar-view-point-at-sunset--everest-region--nepal-864223704-5c7374c546e0fb0001835dc3.jpg",
        },
       
      ];



  return (
    <div className="w-full h-screen relative group">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.url}
          alt={`Slide ${index}`}
          
        />
      ))}

      
      
    </div>
  );
};

export default Slider