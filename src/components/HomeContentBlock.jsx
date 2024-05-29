import React from "react";
import { homeContent } from "../constants/data";

const HomeContentBlock = ({ isInner }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
        {homeContent.title}
      </h1>
      <p className="text-base text-gray-400">{homeContent.subtitle}</p>
      {isInner && <h4 className="text-black mt-8" dangerouslySetInnerHTML={{ __html: homeContent.subtext }} />}
    </>
  );
};

export default HomeContentBlock;
