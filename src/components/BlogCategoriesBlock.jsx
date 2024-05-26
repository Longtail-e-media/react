import React from "react";

const BlogCategoriesBlock = ({ categories }) => {
  return (
    <>
      {categories.map((item) => (
        <div id={item.id}>
          <a href={item.href}>{item.title}</a> ({item.total})
        </div>
      ))}
    </>
  );
};

export default BlogCategoriesBlock;
