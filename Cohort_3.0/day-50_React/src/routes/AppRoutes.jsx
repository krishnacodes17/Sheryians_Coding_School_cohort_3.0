import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../features/app/layout/authLayout";
import Login from "../features/auth/ui/pages/LoginPage";
import Register from "../features/auth/ui/pages/RegisterPage";
import PublicProtected from "./protectedRoutes/PublicProtected";
import MainProtected from "./protectedRoutes/MainProtected";
import MainLayout from "../features/app/layout/MainLayout";
import HomePage from "../shared/ui/pages/HomePage"
import ProductPage from '../features/products/ui/pages/ProductPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'
// import { hydrateUser } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice";
import { hydrateUserAction } from "../features/auth/state/authAction";




function AppRoutes() {
  let dispatch = useDispatch()

  // ! Hydrate user 
    // useEffect(()=>{
    //   (async()=>{
    //     try {
    //       let res = await hydrateUser()
    //       // console.log(res.data)

    //       dispatch(addUser(res.data))

    //     } catch (error) {
    //       console.log("Errorin hydration on AppRouter : ", error)
    //     }
    //   })()
    // },[])


    //  !  using redux thunk
        useEffect(()=>{
      (()=>{
        try {

          dispatch(hydrateUserAction())

        } catch (error) {
          console.log("Errorin hydration on AppRouter : ", error)
        }
      })()
    },[])


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
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
        path:"/main",
        element:<MainProtected />,
        children:[
            {
                path:"",
                element:<MainLayout />,
                children:[
                    {
                        path:"",
                        element:<HomePage/>
                    },
                    {
                        path:"product",
                        element: <ProductPage />
                    },
                    {
                        path:"cart",
                        element:<CartPage/>
                    },
                    {
                        path:"orders",
                        element:<OrderPage/>
                    },
                ]
            }
        ]
    }





  ]);

  return <RouterProvider router={routes} />;
}

export default AppRoutes;
