import React from "react";

const Title = ({ mainTitle, subTitle }) => {
  return (
    <div className="txt__title text-center py-20">
      <h1 className="font-bold text-4xl mb-5">{mainTitle}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Title;
