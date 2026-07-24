import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Contect from '../pages/Contect'

function NestedAppRoute() {

    let route = createBrowserRouter([
        {
            path:"/",
            element:<MainLayout />,
            children: [
                {
                    path:"",
                    element: <Home />
                },
                {
                    path:"about",
                    element:<About />
                },
                {
                    path:"contact",
                    element:<Contect />
                }
                

            ]
        },
        {},
    ])






  return <RouterProvider router={route}/>
}

export default NestedAppRoute
