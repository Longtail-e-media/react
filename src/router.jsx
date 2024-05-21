import { createBrowserRouter, Navigate } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Properties from "./routes/Properties";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Homepage /> },
  { path: "/properties", element: <Properties /> },
]);
