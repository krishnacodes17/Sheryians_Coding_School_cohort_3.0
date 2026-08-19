import {createBrowserRouter, RouterProvider,} from "react-router";
import MainLayout from '../Layouts/MainLayout'
import React, { lazy, Suspense } from 'react'
import AboutPage from '../pages/AboutPage'
import HomePages from '../pages/HomePages'
import { getProduct } from "../apis/productApi";

// let HomePages = lazy(()=> import("../pages/HomePages"))
// ! yeha pejab ham user route pe jayege tab load hoga
let Userpages = lazy(()=> import("../pages/Userpages"))
// let Userpages = lazy(()=> import("../pages/AboutPage"))


function AppRouter() {

    let route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout />,
        children:[
          {
            index:true ,
            element:<HomePages />
          },
          {
            path:"user",
            // ! yehape suspencs yekarega jabtak user kaa data nahi aa jata tabtak Loading dikhayega (dummyui )
            element: (
              <Suspense fallback= <h1>Loading</h1> >
                <Userpages />
              </Suspense>
            )
          },
          {
            path:"about",
            loader: getProduct ,
            // ! hydrateFallbackElement loader kesaath chlata hai 
            hydrateFallbackElement: <h1>Loading Product data</h1>,
            element:<AboutPage />
          }
        ]
    },
    


])


  return <RouterProvider router={route} />
}

export default AppRouter
