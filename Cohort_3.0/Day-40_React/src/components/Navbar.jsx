import React, { useContext } from 'react'
import { MyContext } from '../context/MyContex'

function Navbar() {

    const {setToggle} = useContext(MyContext)

  return (
    <div className='flex item-center border  bg-black text-zinc-100 font-semibold justify-between p-5'>
      <div className="logo text-2xl">E Cart</div>
      <div className='flex gap-5'>
        <h4 onClick={()=> setToggle(()=> true)} className='border cursor-pointer text-2xl px-4 rounded hover:bg-zinc-300 hover:text-black py-2 border-white '>Home</h4>
        <h4 onClick={()=> setToggle(()=> false)} className='border cursor-pointer text-2xl px-4 rounded hover:bg-zinc-300 hover:text-black py-2 border-white '>Cart</h4>
      </div>
      <div>Login</div>
    </div>
  )
}

export default Navbar
