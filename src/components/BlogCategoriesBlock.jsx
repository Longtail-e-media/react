import React from "react";
import { Link } from "react-router-dom";

const BlogCategoriesBlock = ({ categories }) => {
  return (
    <>
      {categories.map((item) => (
        <div id={item.id}>
          <Link to={item.href}>{item.title}</Link> ({item.total})
        </div>
      ))}
    </>
  );
};

export default BlogCategoriesBlock;
