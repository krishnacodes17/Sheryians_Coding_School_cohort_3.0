import React from 'react'
import {Navigate, Outlet} from "react-router"
import { localStorageGetCurrentUser, localStorageSetCurrentUser } from '../utils/localStorage'
import { toast } from 'react-toastify'
function PublicRouter() {

    // let currentUser = localStorageSetCurrentUser()
    //  if(!currentUser.email && currentUser.hasOwnProperty("email") )

    let currentUser = localStorageGetCurrentUser()




    if(currentUser?.email)
      {
    // toast.error("you are  Login")
    return <Navigate to="/main" replace />
  }

  return (
    <Outlet/>
  )
}

export default PublicRouter
