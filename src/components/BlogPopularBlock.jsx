import React from "react";

const BlogPopularBlock = ({ popularBlogs }) => {
  return (
    <>
      {popularBlogs.map((item) => (
        <div className="flex border-b mb-4 pb-4" id={item.id}>
          <div className="w-16">
            <a href={item.href}>
              <img src={item.img} alt={item.title} />
            </a>
          </div>
          <div className="mt-0.5 ml-4">
            <a href={item.href}>{item.title}</a>
            <span>{item.blog_date}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPopularBlock;
