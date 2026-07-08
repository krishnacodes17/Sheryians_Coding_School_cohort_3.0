import React, { useState } from 'react'
import { useForm } from "react-hook-form"


function ReactHookFom() {
    const [form , setFormData] = useState([])
    console.log(form)

    // let data = useForm()
    // console.log(data)

    const {register , handleSubmit ,reset , formState:{errors} } = useForm()

    let onsubmit = (e)=>{
        const {product,price,category,image} = e
        
        let info = {
            product,
            price,
            category,
            image
        }

        setFormData((prev)=> [...prev , info])
        reset()
    }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Add New Product
  </h2>

  <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5">

    {/* Product Name */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Product Name
      </label>
      <input
        {...register("product",{required:true})}
        type="text"
        placeholder="Enter product name"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
      <p className='text-red-500'>Product name is required</p>
    </div>

    {/* Price */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Price
      </label>
      <input
        {...register("price")}
        type="number"
        placeholder="₹ Enter price"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
    </div>

    {/* Category */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Category
      </label>

      <select className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        {...register("category")}
      >
        <option value="">Select Category</option>
        <option value="mens">Mens</option>
        <option value="womens">Womens</option>
        <option value="children">Children</option>
      </select>
    </div>

    {/* Image */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Image URL
      </label>

      <input
      {...register("image")}
        type="text"
        placeholder="Paste image URL"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
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

export default ReactHookFom
