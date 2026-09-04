import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Login from '../components/Login';
import Register from '../components/Register';
import Users from '../components/Users';

function AppRouter() {

    const router = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/register",
            element:<Register />
        },
        {
          path:"/user",
          element:<Users />
        }
    ])


  return (
    <RouterProvider  router={router} />
  )
}

export default AppRouter
