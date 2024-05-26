import React from "react";

const BlogTagsBlock = ({ tags }) => {
  return (
    <>
      {tags.map((item) => (
        <a
          id={item.id}
          className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
          href={item.href}
        >
          {item.title}
        </a>
      ))}
    </>
  );
};

export default BlogTagsBlock;
