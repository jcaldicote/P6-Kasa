import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

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
    element: (
      <>
        <Navbar />
        <h1>A propos</h1>
        <Footer />
      </>
    ),
  },
]);
