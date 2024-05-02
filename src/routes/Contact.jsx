import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientBlock from "../components/ClientBlock";

const Contact = () => {
  const clients = [
    { id: 1, img: "images/clients/clients-1.png", title: "Essence" },
    { id: 2, img: "images/clients/clients-2.png", title: "Black Swan" },
    { id: 3, img: "images/clients/clients-3.png", title: "Toykids" },
    { id: 4, img: "images/clients/clients-4.png", title: "Quadra" },
  ];

  return (
    <>
      <Navbar />

      <section class="section py-14" id="home">
        <div class="container">
          <div class="lg:flex justify-center">
            <div class="lg:w-2/3 mx-2">
              <div class="text-center">
                <h1 class="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  Let's keep in touch.
                </h1>
                <p class="text-base text-gray-400">
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit. Proin gravida
                  nibh vel velit auctor Aenean sollicitudin, adipisicing elit
                  sed lorem quis bibendum auctor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section py-10">
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div class="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                <div class="mb-6">
                  <h1 class=" text-base font-medium mb-2">Email Address</h1>
                  <a
                    class="text-gray-400 text-sm font-medium"
                    href="mailto:support.yourdomain@email.com"
                  >
                    support.yourdomain@email.com
                  </a>
                </div>

                <div class="mb-6">
                  <h1 class=" text-base font-medium mb-2">Telephone</h1>
                  <a
                    class="text-gray-400 text-sm font-medium"
                    href="tel:+(123) 456-7890"
                  >
                    +(123) 456-7890
                  </a>
                </div>

                <div class="mb-6">
                  <h1 class=" text-base font-medium mb-2">Address</h1>
                  <h1 class="text-gray-400 text-sm">
                    09 Design Street, Downtown Victoria, Australia
                  </h1>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2">
              <form method="post" name="myForm" id="myForm">
                <p id="error-msg"></p>
                <div id="simple-msg"></div>
                <div class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                      placeholder="Your Name"
                    />

                    <input
                      type="email"
                      class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                  />

                  <textarea
                    class="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    placeholder="Your Message"
                    name="comments"
                    id="comments"
                    rows="3"
                    spellcheck="false"
                  ></textarea>

                  <div class="text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      class="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section py-16">
        <div class="container">
          <div class="grid lg:grid-cols-4 gap-10">
            <ClientBlock clients={clients} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
