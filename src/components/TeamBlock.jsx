import React from "react";

const TeamBlock = ({ teams }) => {
  return (
    <>
      {teams.map((item) => (
        <div className="text-center p-8" key={item.id}>
          <img
            src={item.img}
            className="rounded mb-4"
            alt={item.title}
          />
          <h4 className="text-lg font-medium mb-1">{item.title}</h4>
          <h6 className="text-xs text-gray-400">{item.job}</h6>
        </div>
      ))}
    </>
  );
};

export default TeamBlock;
