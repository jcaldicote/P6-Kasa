import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 page not found</h1>,
  },
  {
    path: "/logement",
    element: <h1>Logement</h1>,
  },
  {
    path: "/about",
    element: <h1>A propos</h1>,
  },
]);
