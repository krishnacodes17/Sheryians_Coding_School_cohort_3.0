import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { localStorageGetCurrentUser,  } from '../utils/localStorage';

function ProtectedRoutes() {

  let admin = localStorageGetCurrentUser()

  if(!admin){
    alert("you are not admin");
    return <Navigate to="/" replace />
  }


  return (
      <Outlet />
  )
}

export default ProtectedRoutes
