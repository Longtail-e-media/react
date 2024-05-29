import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientBlock from "../components/ClientBlock";
import {
  address,
  clients,
  contactContent,
  emailAddress,
  telephone,
} from "../constants/data";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error message when the input is changed
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    // If there are errors, set them in state
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Form is valid, handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <>
      <Navbar />

      <section className="section py-14" id="home">
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2">
              <div className="text-center">
                <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                  {contactContent.title}
                </h1>
                <p className="text-base text-gray-400">
                  {contactContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2">Email Address</h1>
                  <Link
                    className="text-gray-400 text-sm font-medium"
                    to={`mailto:${emailAddress}`}
                    target="_blank"
                  >
                    {emailAddress}
                  </Link>
                </div>

                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2">Telephone</h1>
                  <Link
                    className="text-gray-400 text-sm font-medium"
                    to={`tel:${telephone}`}
                    target="_blank"
                  >
                    {telephone}
                  </Link>
                </div>

                <div className="mb-6">
                  <h1 className=" text-base font-medium mb-2">Address</h1>
                  <h1 className="text-gray-400 text-sm">{address}</h1>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form
                method="post"
                name="myForm"
                id="myForm"
                onSubmit={handleSubmit}
              >
                <p id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}

                    <input
                      type="email"
                      className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>

                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p className="error">{errors.subject}</p>}

                  <textarea
                    className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3"
                    placeholder="Your Message"
                    name="message"
                    id="message"
                    rows="3"
                    spellCheck="false"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="error">{errors.message}</p>}

                  <div className="text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-4 px-6 rounded-full uppercase cursor-pointer text-sm transition-all bg-slate-800 hover:bg-black text-white"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-16">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-10">
            <ClientBlock clients={clients} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
