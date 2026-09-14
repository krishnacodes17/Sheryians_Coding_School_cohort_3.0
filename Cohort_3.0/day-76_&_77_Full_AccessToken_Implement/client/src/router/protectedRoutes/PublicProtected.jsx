import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicProtected() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PublicProtected