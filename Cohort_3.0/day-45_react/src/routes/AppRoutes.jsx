import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contect"


function AppRoutes() {

    let router = createBrowserRouter([
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/about",
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact />
        }
    ])


  return <RouterProvider  router={router}/>
}

export default AppRoutes
