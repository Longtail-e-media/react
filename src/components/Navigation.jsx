import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="flex gap-8  items-center">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/properties"}>Properties</Link>
      </li>
    </ul>
  );
};

export default Navigation;
