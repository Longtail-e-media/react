import React, { useState } from "react";

const Carousel = ({ layout, limit, items, cover_width }) => {
  //one
  //let cover_width= 1130;
  let screenw = window.innerWidth;
  let coverw = !cover_width ? screenw : cover_width;
  //console.log(cover_width);
  let x = -(coverw + 80);
  //let x = -100%;
  const [slidex, setSlidex] = useState(0);
  const [active, setActive] = useState("");

  let navbtns = Math.ceil(items.length / limit);

  const Slide = (e) => {
    setSlidex(e * x);
    setActive(e);
  };

  //one end
  if (layout === "one") {
    return (
      <div>
        <div className="overflow-hidden">
          <div
            className="list_content flex gap-4 flex-nowrap transition-all"
            style={{ transform: `translateX(${slidex}px)` }}
          >
            {items.map((property, index) => (
              <div
                key={index}
                className={`item shadow-lg rounded-lg p-5 w-1/${limit} flex-none`}
              >
                <div className="imgCover w-100 bg-green-300 h-56 rounded-lg mb-4 overflow-hidden">
                  <img src={property.img} alt="" className="object-cover h-full" />
                </div>
                <h3 className="text-lg font-bold">{property.name}</h3>
                <p className="text-xs ">
                  {property.address}
                </p>
                <div className="py-3 text-2xl font-bold text-yellow-500">
                  {property.price }
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
            ))}
          </div>
        </div>

        <div className="carouselnav flex gap-2 justify-center">
          {items.map((property, index) => {
            let inx = index + 1;
            return (
              inx <= navbtns && (
                <div
                  key={index}
                  className={`nav bg-gray-400 h-2 w-6 ${
                    active === index && "bg-yellow-300"
                  }`}
                  onClick={() => Slide(index)}
                ></div>
              )
            );
          })}
        </div>
      </div>
    );
  }

  //two
  if (layout === "two") {
    return (
      <div>
        <div className="overflow-hidden">
          <div
            className="list_content flex gap-4 flex-nowrap transition-all"
            style={{ transform: `translateX(${slidex}px)` }}
          >
            {items.map((property, index) => (
              <div
                key={index}
                className={`item flex-none bg-gray-300 w-1/${limit} h-80 rounded-xl bg-cover`} style={{'backgroundImage': `url(${property.img})`}}
              >
                <strong>{property.name}</strong>
                <span>1200 liting</span>
              </div>
            ))}
          </div>
        </div>

        <div className="carouselnav flex gap-2 justify-center">
          {items.map((property, index) => {
            let inx = index + 1;
            return (
              inx <= navbtns && (
                <div
                  key={index}
                  className={`nav bg-gray-400 h-2 w-6 ${
                    active === index && "bg-yellow-300"
                  }`}
                  onClick={() => Slide(index)}
                ></div>
              )
            );
          })}
        </div>
      </div>
    );
  }
};

export default Carousel;
