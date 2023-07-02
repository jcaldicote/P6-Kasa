import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.jsx';
import Home from '../pages/Home.jsx';
import Logement from '../pages/Logement.jsx';
import ErrorPage from '../pages/ErrorPage.jsx';
import About from '../pages/About.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: '/logement',
    element: <Logement />,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
]);
