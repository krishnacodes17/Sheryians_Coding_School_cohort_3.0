import {createBrowserRouter} from "react-router-dom"
import PublicProtected from "./protectedRoutes/PublicProtected"
import AuthLayout from "../feature/app/layout/AuthLayout"
import Register from "../feature/auth/ui/pages/Register"
import Login from "../feature/auth/ui/pages/Login"
import MainLayout from "../feature/app/layout/MainLayout"
import MainProtected from "./protectedRoutes/MainProtected"
import MainPages from "../feature/user/ui/pages/MainPages"

const router =  createBrowserRouter([
    {
        path:"/",
        element:<PublicProtected />,
        children:[
            {
                path:"",
                element:<AuthLayout />,
                children:[
                    {
                        path:"register",
                        element:<Register />
                    },
                    {
                        path:"",
                        element:<Login />
                    }
                ]
            }
        ]

    },
    {
        path:"/main",
        element:<MainProtected />,
        children:[
            {
                element:<MainLayout />,
                children:[
                    {
                        path:"",
                        element:<MainPages />
                    }
                ]
            }
        ]
    }


])


export default router