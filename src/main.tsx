import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home/Home.tsx';
import About from './pages/About/About.tsx';
import Projects from './pages/Projects/Projects.tsx';
import Contact from './pages/Contact/Contact.tsx';
import NotFound from './pages/ErrorPages/NotFound.tsx';

import Header from './components/Header/Navbar.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';
import Footer from './components/Footer/Footer.tsx';

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
