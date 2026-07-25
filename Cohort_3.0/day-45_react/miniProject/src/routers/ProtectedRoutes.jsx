import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { toast } from 'react-toastify';
import { localStorageGetCurrentUser } from '../utils/localStorage';

function ProtectedRoutes() {

  let currentUser = localStorageGetCurrentUser()

  if(!currentUser.email && currentUser.hasOwnProperty("email") ){
    toast.error("you are not Login")
    return <Navigate to="/" replace />
  }


  return (
      <Outlet />
  )
}

export default ProtectedRoutes
