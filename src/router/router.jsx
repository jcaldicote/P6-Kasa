import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import TestErrorPage from "../pages/TestErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <TestErrorPage />,
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
