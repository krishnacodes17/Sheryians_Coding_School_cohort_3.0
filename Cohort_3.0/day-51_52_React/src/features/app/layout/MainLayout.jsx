import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../../../shared/ui/components/Navbar'

function MainLayout() {
  return (

    <>
      <div className=''>
        <Navbar />
      </div>
      <div className='mx-7 my-5 mt-25'>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
