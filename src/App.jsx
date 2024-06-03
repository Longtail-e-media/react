import React, {useState} from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Layout from "./routes/Layout";

const App = () => {

  return (
    <div>
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </div>
  );
};

export default App;
