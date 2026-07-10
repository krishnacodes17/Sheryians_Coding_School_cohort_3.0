import React from 'react'

function Navbar({props}) {
  return (
    <div className='p-4 hover:shadow-lg  duration-300 px-6 w-full flex items-center justify-between border-b-1 bg-zinc-100 font-medium '>
      <h1>Logo</h1>
      <div className='flex gap-6'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contect</h4>
      </div>
      <button onClick={()=>props((p)=> !p)} className='border py-2 px-6 hover:shadow-lg rounded bg-black text-zinc-100 hover:text-black hover:bg-transparent duration-300 cursor-pointer transition-all '>Create Now</button>
    </div>
  )
}   

export default Navbar
