import React, { useEffect, useState } from "react";
import { serviceContent } from "../constants/data";

const ServiceContentBlock = () => {
  // getting homepage from backend
  const [serviceContent, setServiceContent] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/article.php?id=2")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return articleDetail ;");
            return func();
          };
          const actualData = safeData(data);
          setServiceContent(actualData);
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
      <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
        {serviceContent.title}
      </h1>
      <p className="text-base text-gray-400">{serviceContent.subtitle}</p>
    </>
  );
};

export default ServiceContentBlock;
