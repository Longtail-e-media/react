import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
