import React from "react";

const ServiceBlock = ({ services }) => {
  return (
    <>
      {services.map((item) => (
        <div key={item.id}>
          <div className="p-5">
            <div className="text-5xl text-blue-500">
              <i className="pe-7s-">{item.icon}</i>
            </div>
            <h4 className="uppercase text-base my-3">{item.title}</h4>
            <p className="text-muted">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceBlock;
