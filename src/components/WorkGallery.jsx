import React, { useEffect, useState } from "react";
import { workImages } from "../constants/data";

const WorkGallery = ({ images }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // getting gallery from backend
  const [workImages, setWorkImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost/react/backend/api/gallery.php")
      .then((response) => response.text())
      .then((data) => {
        try {
          const safeData = (code) => {
            const func = new Function(code + "return galleryDetails ;");
            return func();
          };
          const actualData = safeData(data);
          setWorkImages(actualData);
        } catch (error) {
          console.error(error);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? workImages
      : workImages.filter((image) => image.category === activeCategory);

  const categories = [
    "All",
    ...new Set(workImages.map((image) => image.category)),
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full filters-group-wrap mb-3">
          <div className="flex justify-center mb-5">
            <ul className="filter-options flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <li
                  key={category}
                  className={` ${activeCategory === category ? "active" : ""} `}
                  onClick={() => handleCategoryClick(category)}
                >
                  <a>{category}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="grid" className="grid grid-cols-3">
        {filteredImages.map((item) => (
          <div className="md:w-full p-3 picture-item" key={item.id}>
            <div className="relative block overflow-hidden rounded group transition-all duration-500">
              <img
                src={item.url}
                className="rounded transition-all duration-500 group-hover:scale-105"
                alt={item.title}
              />
              <a className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                <div>
                  <p className="text-sm text-gray-400">{item.subTitle}</p>
                  <h6 className="text-base text-black font-medium">
                    {item.title}
                  </h6>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkGallery;
