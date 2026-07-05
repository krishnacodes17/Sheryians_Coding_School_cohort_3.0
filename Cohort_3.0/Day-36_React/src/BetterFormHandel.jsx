import React, { useState } from 'react'

// * this is better approach

function BetterFormHandel() {

    let [formData,setFormData] =useState({
        name:"",
        email:"",
        password:""
    })

    

    // console.log(formData)
  return (
    <div  className='bg-pink-200 w-screen h-screen p-.5'>
      <form action="" className='border flex flex-col gap-5'>
        <input onChange={(e)=>setFormData({...formData , name:e.target.value})}  className='border w-fit ' type="text" placeholder='Enter name' />
        <input onChange={(e)=>setFormData({...formData , email:e.target.value})}  className='border w-fit ' type="text" placeholder='Enter email' />
        <input onChange={(e)=>setFormData({...formData , password:e.target.value})} className='border w-fit ' type="text" placeholder='Enter passwod' />
        <button className='border  bg-blue-400 text-white text-2xl' type='submit'>Submit</button>
      </form>
      <h1>This is name - {formData.name} </h1>    
      <h1>This is email - {formData.email} </h1>    
      <h1>This is passwod - {formData.password} </h1>    

    </div>
  )
}

export default BetterFormHandel
