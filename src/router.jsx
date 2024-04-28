import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Contact from "./routes/Contact";
import Service from "./routes/Service";
import Work from "./routes/Work";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/service", element: <Service /> },
  { path: "/work", element: <Work /> },
]);
