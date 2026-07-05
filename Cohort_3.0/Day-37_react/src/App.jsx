import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { useState } from 'react'

function App() {

  const [toggle, setToggle] =useState(true)
    const [user,setUser] = useState([])
    console.log(user)


  return (
    <div className='flex gap-1 justify-center items-center bg-pink-700 w-screen h-screen'>
      
      {toggle ?<Login toggle={setToggle} /> : <Signup toggle={setToggle} user={user} setUser={setUser} />}
      
    </div>
  )
}

export default App
