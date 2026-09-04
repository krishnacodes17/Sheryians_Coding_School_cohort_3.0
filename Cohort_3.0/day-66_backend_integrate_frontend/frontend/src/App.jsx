import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  const [toggle, setToggle] =useState(true)
  return (
    <div className=''>
      <Login />
      <Register />

    </div>
  )
}

export default App
