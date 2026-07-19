import React from 'react'
import { Outlet } from 'react-router'

function Home() {
  return (
    <div>
      this is home page

      <Outlet />
    </div>
  )
}

export default Home
