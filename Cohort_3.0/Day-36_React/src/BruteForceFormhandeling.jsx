import React, { useState } from 'react'

// * this method is brutFoce forhandeling 

function FormHandeling() {
    let [name,setName] =useState()
    let [email,setEmail] =useState()
    let [passwod,setPassword] =useState()
    console.log(name)

    let handelInput = (e)=>{
        //* console.log(e.target.value)
        setName(e.target.value)
    } 

    function formhandel (e){
        setPassword(e.target.value)
        // * console.log(e.target.value)
        
    }
  return (
    <div  className='bg-pink-200 w-screen h-screen p-.5'>
      <form action="" className='border flex flex-col gap-5'>
        <input onChange={handelInput} className='border w-fit ' type="text" placeholder='Enter name' />
        <input onChange={(e)=>setEmail(e.target.value)} className='border w-fit ' type="text" placeholder='Enter email' />
        <input onChange={formhandel} className='border w-fit ' type="text" placeholder='Enter passwod' />
        <button className='border  bg-blue-400 text-white text-2xl' type='submit'>Submit</button>
      </form>
      <h1>This is name -  {name}</h1>    
      <h1>This is email -  {email}</h1>    
      <h1>This is passwod -  {passwod}</h1>    

    </div>
  )
}

export default FormHandeling
