import React from "react";
import { Link } from "react-router-dom";

const BlogPopularBlock = ({ popularBlogs }) => {
  return (
    <>
      {popularBlogs.map((item) => (
        <div className="flex border-b mb-4 pb-4" id={item.id}>
          <div className="w-16">
            <Link to={item.href}>
              <img src={item.img} alt={item.title} />
            </Link>
          </div>
          <div className="mt-0.5 ml-4">
            <Link href={item.href}>{item.title}</Link>
            <span>{item.blog_date}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogPopularBlock;
