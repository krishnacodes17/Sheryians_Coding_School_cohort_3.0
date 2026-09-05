import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

function HomeLayout() {


  
  return (
    <div>
      <Nav />
      <div className='pt-15'>
      <Outlet /> 
      </div>
    </div>
  )
}

export default HomeLayout
