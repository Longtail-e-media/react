import React, { useEffect, useState } from "react";

const ClientBlock = () => {
  // getting menu from backend
  const [clients, setClients] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/social.php?type=2")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return socialList;");
            return func();
          };
          const menuList = safeData(data);
          setClients(menuList);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {clients.map((item) => (
        <div key={item.id}>
          <img
            src={item.img}
            className="opacity-70 hover:opacity-100 transition-all mx-auto block"
            alt={item.title}
          />
        </div>
      ))}
    </>
  );
};

export default ClientBlock;
