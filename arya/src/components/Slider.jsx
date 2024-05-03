// import React from 'react';
import React, { useState } from "react";


const Slider = () => {
    const slides = [
        {
          url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
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