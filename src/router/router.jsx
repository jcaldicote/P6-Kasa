import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Home from "../pages/Home.jsx";
import Logement from "../pages/Logement.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import About from "../pages/About.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },

  {
    path: "/logement/:logementId",
    element: (
      <Layout>
        <Logement />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);
