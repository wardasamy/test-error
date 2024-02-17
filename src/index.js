import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Hoome from './ggod/hoome';
import Html from './ggod/html';
import Css from './ggod/css';
import Js from './ggod/js';


const router = createBrowserRouter([
  {
    path: "/hoome",
    element: <Hoome />,
  },
  {
    path: "/css",
    element: <Css />,
   
  },
  {
    path: "/html",
    element: <Html />,
   
  },
  {
    path: "/js",
    element: <Js />,
   
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

