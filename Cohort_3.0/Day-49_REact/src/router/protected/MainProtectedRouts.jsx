import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function MainProteRouts() {
  let { user } = useSelector((state) => state.auth)

  if (!user) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default MainProteRouts
