import React from "react";

const WorkGallery = ({ images }) => {
  return (
    <>
      {images.map((item) => (
        <div className="md:w-full p-3 picture-item" key={item.id}>
          <div className="relative block overflow-hidden rounded group transition-all duration-500">
            <img
              src={item.url}
              className="rounded transition-all duration-500 group-hover:scale-105"
              alt={item.title}
            />
            <a className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
              <div>
                <p className="text-sm text-gray-400">{item.subTitle}</p>
                <h6 className="text-base text-black font-medium">
                  {item.title}
                </h6>
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkGallery;
