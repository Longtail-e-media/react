import React from "react";

const ClientBlock = ({ clients }) => {
  return (
    <>
      {clients.map((item) => (
        <div key={item.id}>
          <img
            src={item.img}
            class="opacity-70 hover:opacity-100 transition-all mx-auto block"
            alt={item.title}
          />
        </div>
      ))}
    </>
  );
};

export default ClientBlock;
