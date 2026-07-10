import React from 'react'
import { useState } from 'react'

function Signup({toggle,setUser,user}) {
    const [formData,setFormData] = useState({
        name:"",
        email:""
    })

    let handelForm =(e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
        // console.log(e.target.name)
    }
    // console.log(formData)

    let handelSubmit = (e)=>{
        e.preventDefault()

        setUser((prev)=> [...prev,formData])
        setFormData({
            name:"",
            email:""
        })
        // console.log(formData)
    }

  return (
    <div className='bg-pink-300  flex justify-center items-center'>
      <form onSubmit={handelSubmit} className='bg-white rounded flex gap-3 border p-10 flex-col w-[350px] h-fit' action="">
            <h1 className='text-2xl font-semibold'>Signup</h1>
        <input onChange={handelForm} value={formData.name}  name='name' className='border text-2xl p-1 rounded' placeholder='enter name' type="text" />
        <input onChange={handelForm} value={formData.email} name='email' className='border text-2xl p-1 rounded' placeholder='enter email' type="text" />
        <button className='border text-2xl cursor-pointer hover:bg-black  duration-100 ease-in-out hover:text-white transition-shadow trans font-semibold uppercase' type='submit'>submit</button>

        <p>did't have an account  <span onClick={()=> toggle(prev=>!prev)} className='text-blue-600 font-semibold cursor-pointer'>login</span></p>
      
      <h1>name is - {formData.name}</h1>
      <h1>name is - {formData.email}</h1>
      </form>
    </div>
  )
}

export default Signup
