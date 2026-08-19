import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import HomeSkeleton from "../../shared/skeleton/HomeSkeleton"

function MainProtected() {

  let {isAuthenticated , isLoading} = useSelector((state)=> state.auth)


  if(isLoading) return <HomeSkeleton />


  if(!isAuthenticated){
   return <Navigate to="/" replace />
  }


  return (
    <div>
        <h1>MainProtected</h1>
      <Outlet />
    </div>
  )
}

export default MainProtected
