import React from 'react'
import { Outlet } from 'react-router-dom'

function MainProtected() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default MainProtected