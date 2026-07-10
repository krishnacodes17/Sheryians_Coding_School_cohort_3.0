import React from 'react'
import {useForm} from "react-hook-form" ;
import { nanoid } from 'nanoid';

function Form({setUser,setToggle,users,userUpdate}) {
    
   
  
  // console.log("render")

    const { register,handleSubmit,reset , formState:{errors}} =  useForm({defaultValues: userUpdate})

    let id  = nanoid()

    let onSubmit = (data)=>{
      // console.log(data)
      if(userUpdate){
        setUser((prev)=>{
          return prev.map((val)=>{
            return val.id === userUpdate.id ? {...data} : val
          })
        })
      }else{
         let arr = [...users,{...data ,id}]
          setUser(arr)
         localStorage.setItem("users",JSON.stringify(arr))
      }


     


      setToggle((prev)=>!prev)
      reset()

    } 

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Add New User
  </h2> 

  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

    {/* Product Name */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        User Name
      </label>
      <input
      {...register("userName",{
        setValueAs:(val=>val.trim()),
        required:"User name is required" ,
        minLength:{
          value: 3,
          message: "User name must be at least 3 characters"
        },
        maxLength:{
          value: 20,
          message: "User name must be at most 20 characters"
        }
      })}
        type="text"
        placeholder="Enter Usert name"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
      <p>{errors.userName?.message}</p>
    </div>

    {/* email */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Email
      </label>
      <input
      {...register("email",{
        required:"Email is required",
        setValueAs: (value) => value.trim(),
        pattern:{
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message:"please enter a valid email"
        }
      })}
        type="input"
        placeholder=" Enter Email"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
      <p>{errors.email?.message}</p>
    </div>


    {/* contect */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Mobail
      </label>

      <input
      {...register("mobail",{
        required: "Mobile number is required",
         pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10 digit mobile number"
              }
      })}
        type="text"
        placeholder="Enter Mobil No"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
      <p>{errors.mobail?.message}</p>
    </div>



    {/* Image */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Image URL
      </label>

      <input
      {...register("image",{
        required:"image url is required",
        pattern: {
          value: /^https?:\/\/.+/,
          message: "Enter a valid image URL"
        }
      })}
        type="text"
        placeholder="Paste image URL"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
      <p>{errors.image?.message}</p>
    </div>

    {/* Button */}
    <button
      type="submit"
      className="mt-3 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
    >
      Add Product
    </button>

  </form>
</div>
  )
}

export default Form
