import React, { useState } from 'react'

function BestFormhandeling() {
    let [formData,setFormData] =useState({
            name:"",
            email:"",
            password:""
        })

    let handelForm =(e)=>{
        // console.log(e)   // ? yeha saare event dikh jayege 
        const {name ,value} = e.target
        // setFormData({...formData ,[e.target.name]:e.target.value})   //? yeha hamne object distructue kiya hai 
        setFormData({...formData ,[name]:value})
    }

    // console.log(formData)
  return (
    <div  className='bg-pink-200 w-screen h-screen p-.5'>
      <form action="" className='border flex flex-col gap-5'>
        <input onChange={handelForm} name='name'  className='border w-fit ' type="text" placeholder='Enter name' />
        <input onChange={handelForm} name='email' className='border w-fit ' type="text" placeholder='Enter email' />
        <input onChange={handelForm} name='password' className='border w-fit ' type="text" placeholder='Enter passwod' />
        <button className='border  bg-blue-400 text-white text-2xl' type='submit'>Submit</button>
      </form>
      <h1>This is name - {formData.name} </h1>    
      <h1>This is email - {formData.email} </h1>    
      <h1>This is passwod - {formData.password} </h1>    

    </div>
  )
}

export default BestFormhandeling
