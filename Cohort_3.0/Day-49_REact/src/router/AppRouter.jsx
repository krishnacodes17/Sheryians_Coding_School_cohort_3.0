import React, { useEffect } from "react";
import { createBrowserRouter, Navigate, RouterProvider, useNavigate } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/auth/authSlice";
import PublicProtectedRoutes from "./protected/PublicProtectedRoutes";
import MainProteRouts from "./protected/MainProtectedRouts";
import ProductsPage from "../pages/ProductsPage";
import AboutPage from "../pages/AboutPage";

function AppRouter() {
  let dispatch = useDispatch();
  let navigate = useNavigate()
  

  let hydrateUser = () => {
    let isCurrent = localStorage.getItem("currentUser");

    if (!isCurrent) {

      navigate("/")
      return
    }

    try {
      dispatch(addUser(JSON.parse(isCurrent)));
    } catch (error) {
      console.error("Failed to parse current user", error);
      localStorage.removeItem("currentUser");
    }

    
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtectedRoutes />,
      children: [
        {
          // index:true,
          path: "",
          element: <AuthLayout />,
          children: [
            {
              // index:true,
              path: "",
              element: <LoginPage />,
            },
            {
              path: "/register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProteRouts />,
      children: [
        {
          path:"",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path:"products",
              element:<ProductsPage />
            },
            {
              path:"about",
              element:<AboutPage />
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRouter;
