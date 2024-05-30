import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogBlock from "../components/BlogBlock";
import BlogCategoriesBlock from "../components/BlogCategoriesBlock";
import BlogPopularBlock from "../components/BlogPopularBlock";
import BlogTagsBlock from "../components/BlogTagsBlock";
import {
  blogArchives,
  blogCategories,
  blogContent,
  blogTags,
  blogTextWidget,
  blogs,
  popularBlogs,
} from "../constants/data";
import { Link } from "react-router-dom";

const tags = [
  { id: 1, title: "logo", href: "#" },
  { id: 2, title: "business", href: "#" },
  { id: 3, title: "corporate", href: "#" },
  { id: 4, title: "e-commerce", href: "#" },
  { id: 5, title: "agency", href: "#" },
  { id: 6, title: "responsive", href: "#" },
];

const Blog = () => {
  return (
    <>
      <Navbar />

      <section className="section py-10">
        <div className="container">
          <div className="flex">
            <div className="lg:w-9/12 flex">
              <div>
                <h4 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 underline decoration-blue-400 underline-offset-4 mb-10">
                  {blogContent.title}
                </h4>

                <h4 className="text-base font-light text-gray-400">
                  {blogContent.subtitle}
                </h4>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="prose max-w-full">
                <BlogBlock blogs={blogs} />
              </div>

              <div className="flex mt-6">
                <Link
                  to="#"
                  className="flex items-centzer justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white border rounded cursor-not-allowed"
                >
                  <i className="icofont-rounded-left"></i>
                </Link>
                <Link
                  to="#"
                  className="hidden px-4 py-2 mx-1 transition-colors duration-200 transform border rounded sm:inline bg-gray-600 text-white"
                >
                  1
                </Link>
                <Link
                  to="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  2
                </Link>
                <Link
                  to="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  3
                </Link>
                <Link
                  to="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  4
                </Link>
                <Link
                  to="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  5
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded hover:bg-gray-600 hover:text-white"
                >
                  <i className="icofont-rounded-right"></i>
                </Link>
              </div>
            </div>

            <div className="lg:ml-8 ml-0 mt-8">
              <div className="flex bg-transparent border items-center pr-4 mb-10">
                <input
                  type="search"
                  className="border-0 focus:border-0 focus:ring-0 text-black bg-transparent w-full"
                  placeholder="Search"
                />
                <button type="submit" className="text-xl text-black">
                  <span className="icofont-search-1"></span>
                </button>
              </div>

              <aside className="mb-10">
                <div className="text-base font-medium">Categories</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>
                <div className="space-y-5">
                  <BlogCategoriesBlock categories={blogCategories} />
                </div>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Popular Posts</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>
                <div>
                  <BlogPopularBlock popularBlogs={popularBlogs} />
                </div>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">
                  {blogTextWidget.title}
                </div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>

                <p className="text-muted text-widget-des">
                  {blogTextWidget.subtitle}
                </p>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Archives</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>

                <div className="space-y-5">
                  <BlogCategoriesBlock categories={blogArchives} />
                </div>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Tags</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <BlogTagsBlock tags={blogTags} />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
