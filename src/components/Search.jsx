import React from "react";

const Search = () => {
  const Name = [
    { id: 1, name: "Darlene Robertson", post: "Realter" },
    { id: 2, name: "Darlene Robertson", post: "Realter" },
    { id: 3, name: "Darlene Robertson", post: "Realter" },
  ];

  return (
    <div className=" mt-24">
      <div className="grid grid-cols-2  h-[901px] ">
        <div className="item bg-defaultgrey"></div>
        <div className="item bg-defaultyellow ps-10 pt-12 grid items-baseline">
          <div className="text-details">
            <h1 className="text-5xl font-semibold w-1/2">
              Search for your dream home or increase your investment opportunity
              today
            </h1>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
              tristique metus proin id lorem odio
            </p>
          </div>
          <div className="image_slider grid grid-cols-3 justify-between gap-8">
            {Name.map(({ id, name, post }) => (
              <div className="items bg-white p-9" key={id}>
                <h1 className="text-3xl ">{name}</h1>
                <p>{post}</p>
                <h2 className="text-defaultcolor">Contact Seller</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
