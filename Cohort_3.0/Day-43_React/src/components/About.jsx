import React from 'react'
import { Outlet, useNavigate } from 'react-router'

function About() {
   let  navigate =  useNavigate()
  return (
    <div>
      About

      <button onClick={()=> navigate("/about/contact") } className='border px-4 py-2 cursor-pointer text-2xl m-2 '>show Outlet</button>

      <Outlet />
    </div>
  )
}

export default About
