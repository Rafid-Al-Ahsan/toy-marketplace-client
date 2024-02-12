import React from 'react';
import Home from '../components/Home';
import Main from '../components/Main';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from '../components/Login';
import Registration from '../components/Registration';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/registration",
            element:<Registration></Registration>
        }
      ]
    },

]);

export default Routes;