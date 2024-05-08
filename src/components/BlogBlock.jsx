import React from "react";

const BlogBlock = ({ blogs }) => {
  return (
    <>
      {blogs.map((item) => (
        <article key={item.id}>
          <div>
            <a href={item.link}>
              <img src={item.img} alt={item.title} className="rounded" />
            </a>
          </div>

          <div>
            <h2>
              <a href={item.link}>{item.title}</a>
            </h2>
            <div className="flex space-x-6">
              <div>
                <i className="icofont-ui-calendar"></i> {item.blog_date}
              </div>
              <div>
                <i className="icofont-tags"></i>
                {item.tags.map((tag, index) => (
                  <a href="#" key={index}>
                    {tag}
                    {index != item.tags.length - 1 && " , "}
                  </a>
                ))}
              </div>
              <div>
                <i className="icofont-comment"></i>{" "}
                <a href="#">{item.comments}</a>
              </div>
            </div>
          </div>

          <div>
            <p>{item.brief}</p>
          </div>

          <a href={item.link}>
            Read More <i className="mdi mdi-arrow-right"></i>
          </a>
        </article>
      ))}
    </>
  );
};

export default BlogBlock;
