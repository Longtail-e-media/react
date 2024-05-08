import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogBlock from "../components/BlogBlock";

const blogs = [
  {
    id: 1,
    img: "images/blog/blog-1.jpg",
    title: "Beautiful Day With Friends In Paris",
    href: "#",
    blog_date: "Mar 03, 2020",
    tags: ["Branding", "Design"],
    comments: "3 Comments",
    brief:
      "Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.",
  },
  {
    id: 2,
    img: "images/blog/blog-3.jpg",
    title: "Nature valley with cooling environment",
    href: "#",
    blog_date: "Mar 03, 2020",
    tags: ["Branding", "Design"],
    comments: "3 Comments",
    brief:
      "Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.",
  },
  {
    id: 3,
    img: "images/blog/blog-2.jpg",
    title: "Elegant, Simple & Minimalist Blog Made With Love",
    href: "#",
    blog_date: "Mar 03, 2020",
    tags: ["Branding", "Design"],
    comments: "3 Comments",
    brief:
      "Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.",
  },
  {
    id: 4,
    img: "images/blog/blog-4.jpg",
    title: "15 Best Healthy and Easy Salad Recipes",
    href: "#",
    blog_date: "Mar 03, 2020",
    tags: ["Branding", "Design"],
    comments: "3 Comments",
    brief:
      "Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.",
  },
  {
    id: 5,
    img: "images/blog/blog-5.jpg",
    title: "Easy Homemade Candy Recipes and Ideas",
    href: "#",
    blog_date: "Mar 03, 2020",
    tags: ["Branding", "Design"],
    comments: "3 Comments",
    brief:
      "Whether an identity or campaign, we make your brand visible, relevant and effective by placing the digital at the center of its ecosystem, without underestimating the power of traditional media. Whether an identity or campaign, we make your brand visible.",
  },
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
                  News and Stories
                </h4>

                <h4 className="text-base font-light text-gray-400">
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit. Proin gravida
                  nibh vel velit auctor Aenean sollicitudin, adipisicing elit
                  sed lorem quis bibendum auctor.
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
                <a
                  href="#"
                  className="flex items-centzer justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white border rounded cursor-not-allowed"
                >
                  <i className="icofont-rounded-left"></i>
                </a>

                <a
                  href="#"
                  className="hidden px-4 py-2 mx-1 transition-colors duration-200 transform border rounded sm:inline bg-gray-600 text-white"
                >
                  1
                </a>

                <a
                  href="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  2
                </a>

                <a
                  href="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  3
                </a>

                <a
                  href="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  4
                </a>

                <a
                  href="#"
                  className="hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded sm:inline hover:bg-gray-600 hover:text-white"
                >
                  5
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white border rounded hover:bg-gray-600 hover:text-white"
                >
                  <i className="icofont-rounded-right"></i>
                </a>
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
                  <div>
                    <a href="#">Journey</a> (40)
                  </div>
                  <div>
                    <a href="#">Photography</a> (08)
                  </div>
                  <div>
                    <a href="#">Lifestyle</a> (11)
                  </div>
                  <div>
                    <a href="#">Food &amp; Drinks</a> (21)
                  </div>
                </div>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Popular Posts</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>
                <div>
                  <div className="flex border-b mb-4 pb-4">
                    <div className="w-16">
                      <a href="#">
                        <img src="assets/images/works/img10.jpg" alt="" />
                      </a>
                    </div>
                    <div className="mt-0.5 ml-4">
                      <a href="#">Beautiful Day With Friends..</a>
                      <span>Feb 15, 2020</span>
                    </div>
                  </div>

                  <div className="flex border-b mb-4 pb-4">
                    <div className="w-16">
                      <a href="#">
                        <img src="assets/images/works/img2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="mt-0.5 ml-4">
                      <a href="#">Nature valley with cooling..</a>
                      <span>Feb 10, 2020</span>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-16">
                      <a href="#">
                        <img src="assets/images/works/img3.jpg" alt="" />
                      </a>
                    </div>
                    <div className="mt-0.5 ml-4">
                      <a href="#">15 Best Healthy and Easy Salad..</a>
                      <span>Feb 8, 2020</span>
                    </div>
                  </div>
                </div>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Text Widget</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>

                <p className="text-muted text-widget-des">
                  Exercitation photo booth stumptown tote bag Banksy, elit small
                  batch freegan sed. Craft beer elit seitan exercitation, photo
                  booth et 8-bit kale chips proident chillwave deep v laborum.
                  Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami
                  readymade swag.{" "}
                </p>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Archives</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>

                <div className="space-y-5">
                  <div>
                    <a href="#">March 2020</a> (40)
                  </div>
                  <div>
                    <a href="#">April 2020</a> (08)
                  </div>
                  <div>
                    <a href="#">May 2020</a> (11)
                  </div>
                  <div>
                    <a href="#">Feb 2020</a> (21)
                  </div>
                </div>
              </aside>

              <aside className="mb-10">
                <div className="text-base font-medium">Tags</div>
                <div className="relative flex items-center my-5">
                  <div className="h-px bg-gray-200 w-full absolute rounded-l-full"></div>
                  <div className="h-px bg-blue-700 w-8 absolute rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                    href="#"
                  >
                    logo
                  </a>
                  <a
                    className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                    href="#"
                  >
                    business
                  </a>
                  <a
                    className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                    href="#"
                  >
                    corporate
                  </a>
                  <a
                    className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                    href="#"
                  >
                    e-commerce
                  </a>
                  <a
                    className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                    href="#"
                  >
                    agency
                  </a>
                  <a
                    className="px-2 py-1.5 bg-gray-100 text-[10px] hover:bg-blue-500 hover:text-white uppercase rounded-sm"
                    href="#"
                  >
                    responsive
                  </a>
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
