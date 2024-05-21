import React, { useState } from "react";

const RealStateSlider = ({ items, itemsPerSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index * itemsPerSlide);
  };

  return (
    <>
      <div className="mt-12 relative w-full overflow-hidden">
        <div
          className="list_content flex flex-nowrap transition-all"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerSlide}%)`,
          }}
        >
          {items.map((property, index) => (
            <div
              key={index}
              className={`w-1/${itemsPerSlide} flex-shrink-0`}
              style={{ flex: `0 0 ${100 / itemsPerSlide}%` }}
            >
              {property.type === "new" ? (
                <div className="p-5 rounded-lg item shadow-lg mx-2">
                  <div className="imgCover w-full bg-green-300 h-56 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={property.img}
                      alt=""
                      className="object-cover size-full"
                    />
                  </div>
                  <h3 className="text-lg font-bold">{property.name}</h3>
                  <p className="text-xs ">{property.address}</p>
                  <div className="py-3 text-2xl font-bold text-yellow-500">
                    {property.price}
                  </div>
                  <div className="amenities flex gap-2 border-b pb-3">
                    <div className="item">
                      Beds: <strong>{property.beds}</strong>
                    </div>
                    <div className="item">
                      Baths: <strong>{property.baths}</strong>
                    </div>
                    <div className="item">
                      Sqft: <strong>{property.area}</strong>
                    </div>
                  </div>
                  <div className="lowerbtns flex justify-between pt-3">
                    <div className="item">
                      + <strong>Compare</strong>
                    </div>
                    <div className="item"></div>
                    <div className="item">3 years ago</div>
                  </div>
                </div>
              ) : (
                <div className="relative mx-2">
                  <div className="relative overflow-hidden">
                    <img src={property.img} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/0 size-full"></div>
                  </div>
                  <div className="absolute top-0 text-white p-4">
                    <strong>{property.name}</strong>
                    <span>1200 liting</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 carouselnav flex gap-2 justify-center">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`nav h-2 w-6 ${
                Math.floor(currentIndex / itemsPerSlide) === index
                  ? "bg-yellow-300"
                  : "bg-gray-400"
              }`}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default RealStateSlider;
