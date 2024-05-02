import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
]);
