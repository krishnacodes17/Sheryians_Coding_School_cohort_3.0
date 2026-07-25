import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProtectedRoutes from "../routers/ProtectedRoutes";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../Layout/AuthLayout";
import PublicRouter from "./PublicRouter";

function AppRouters() {
  let route = createBrowserRouter([
    {
      element: <ProtectedRoutes />,
      children: [
        {
          path: "/main",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
    {
      path: "/",
      element: <PublicRouter />,
      children: [
        {
          
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={route} />;
}

export default AppRouters;
