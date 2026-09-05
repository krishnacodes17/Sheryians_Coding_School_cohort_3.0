import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function HomeProtected() {
    console.log("thisis homeProytecd ")
    const {loading,currentUser} = useAuth()

    if(loading){
        return <h1>Loading</h1>
    }

    if(!currentUser){
        return <Navigate  to="/" replace/>
    }


  return (
    <div>
      <Outlet />
    </div>
  )
}

export default HomeProtected
