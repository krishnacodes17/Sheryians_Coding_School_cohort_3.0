
import React from 'react'
import {
    createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from '../layout/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomeLayout from '../layout/HomeLayout';
import HomePage from '../pages/HomePage';
import AuthProtected from './protectedRoutes/AuthProtected';
import HomeProtected from './protectedRoutes/HomeProtected';
import CreatePost from '../pages/CreatePost';

function AppRoutes() {


    const router = createBrowserRouter([
        {
            path:"/",
            element:<AuthProtected />,
            children:[
                {
                    path:"",
                    element:<AuthLayout />,
                    children:[
                        {
                            path:"",
                            element:<LoginPage />
                        },
                        {
                            path:"/register",
                            element:<RegisterPage />
                        }
                    ]
                }
            ]
        },
        {
            path:"/home",
            element:<HomeProtected />,
            children:[
                {
                    path:"",
                    element:<HomeLayout />,
                    children:[
                        {
                            path:"",
                            element:<HomePage />
                        },
                        {
                            path:"create-post",
                            element:<CreatePost />
                        }
                    ]
                }
            ]
        }
    ])





  return (
  <RouterProvider router={router} >

  </RouterProvider>
  )
}

export default AppRoutes
