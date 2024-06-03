import React from "react";
import { company } from "../data/data";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/ti";
  import { SlSocialInstagram } from "react-icons/sl";


const Socialmedia = () => {
  const social = company.social;
  //console.log( typeof Icons );
  
  return (
    <div className="social flex items-center  gap-3">
      
      {social.map((item, index) => 
      <Link to={item.link} >
        <Icon icon={item.icon} className="text-3xl" />
      </Link>
      )}
      
    </div>
  );
};


const Icon = ({ icon, className }) => {
  
  const NewIcon = Icons[icon];
  //console.log(typeof Icons[icon]);
  return <NewIcon className={className} />;
};

export default Socialmedia;




