import React from "react";

const Discover = () => {
  const latest = [
    {
      id: 1,
      title: "Gorgeous Apartment Building",
      subtitle: "58 Hullbrook Road, Billesley, B13 0LA",
      price: 7500,
      bed: 4,
      Baths: 2,
      sqft: 1150,
    },
    {
      id: 2,
      title: "Gorgeous Apartment Building",
      subtitle: "58 Hullbrook Road, Billesley, B13 0LA",
      price: 7500,
      bed: 4,
      Baths: 2,
      sqft: 1150,
    },
    {
      id: 3,
      title: "Gorgeous Apartment Building",
      subtitle: "58 Hullbrook Road, Billesley, B13 0LA",
      price: 7500,
      bed: 4,
      Baths: 2,
      sqft: 1150,
    },
  ];
  return (
    <div className="container mx-auto mb-10">
      <div className="flex justify-between">
        {latest.map(({ id, title, subtitle, price, bed, Baths, sqft }) => (
          <div className="box rounded-md bg-white shadow-md p-5" key={id}>
            <img
              src=""
              alt=""
              className="w-96 h-72  bg-slate-400 rounded-xl "
            />
            <div className="building_details">
              <h1 className=" font-bold text-2xl mt-4">{title}</h1>
              <p className="mt-3">{subtitle}</p>
              <h3 className="mt-3">Price: {price}</h3>
            </div>
            <div className="flex justify-between my-5">
              <div className="icon_beds">beds:{bed}</div>
              <div className="baths">baths:{Baths}</div>
              <div className="sqft">beds: {sqft}</div>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-5">
              <h2>+compare</h2>
              <div className=" w-11 h-11 bg-slate-400 rounded-full"></div>
              <p>3 year ago</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Discover;
