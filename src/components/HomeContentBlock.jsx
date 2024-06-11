import React, { useEffect, useState } from "react";
import { homeContent } from "../constants/data";

const HomeContentBlock = ({ isInner }) => {
  // getting homepage from backend
  const [homeContent, setHomeContent] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/article.php?id=1")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return articleDetail ;");
            return func();
          };
          const actualData = safeData(data);
          setHomeContent(actualData);
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
        {homeContent.title}
      </h1>
      <p className="text-base text-gray-400">{homeContent.subtitle}</p>
      {isInner && (
        <h4
          className="text-black mt-8"
          dangerouslySetInnerHTML={{ __html: homeContent.subtext }}
        />
      )}
    </>
  );
};

export default HomeContentBlock;
