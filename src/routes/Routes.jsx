import React from 'react';
import Home from '../components/Home';
import Main from '../components/Main';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from '../components/Login';
import Registration from '../components/Registration';
import Addtoy from '../components/Addtoy';
import PrivateRoute from './PrivateRoute';
import Mytoy from '../components/Mytoy';
import Alltoy from '../components/Alltoy';
import Herodetails from '../components/Herodetails';

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
        },
        {
            path: "/herodetails/:id",
            element: <PrivateRoute><Herodetails></Herodetails></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
        },
        {
            path: "/alltoy",
            element: <Alltoy></Alltoy>
        },
        {
            path: "/addtoy",
            element:<PrivateRoute><Addtoy></Addtoy></PrivateRoute>
        },
        {
            path: "/mytoy",
            element:<PrivateRoute><Mytoy></Mytoy></PrivateRoute>
        },
      ]
    },

]);

export default Routes;