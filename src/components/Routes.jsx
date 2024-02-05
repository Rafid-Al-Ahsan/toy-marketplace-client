import React from 'react';
import Home from './Home';
import Main from './Main';
import {
    createBrowserRouter,
  } from "react-router-dom";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        }
      ]
    },

]);

export default Routes;