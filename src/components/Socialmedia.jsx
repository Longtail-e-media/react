import React from "react";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
  } from "react-icons/ti";
  import { SlSocialInstagram } from "react-icons/sl";

const Socialmedia = () => {
  return (
    <div className="social flex items-center  gap-3">
      <a href="">
        <TiSocialFacebook className="text-3xl" />
      </a>
      <a href="">
        <TiSocialLinkedin className="text-3xl" />
      </a>
      <a href="">
        <TiSocialTwitter className="text-3xl" />
      </a>
      <a href="">
        <SlSocialInstagram className="text-2xl" />
      </a>
    </div>
  );
};

export default Socialmedia;
