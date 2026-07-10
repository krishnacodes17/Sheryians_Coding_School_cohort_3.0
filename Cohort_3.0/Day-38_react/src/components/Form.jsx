import React, { useRef, useState } from 'react'

function Form() {
  const [form , setForm] = useState([])
  console.log(form)
  console.log("app re rendering")
    let formRef = useRef({})

  let handelSubmit = (e)=>{
    e.preventDefault()
    const {ProductName,ProductPrice,category,image} = formRef.current;
    let obj = {

      // pName : formRef.currentform.ProductName.value,
      // Price: formRef.current.ProductPrice.value,
      // category: formRef.current.category.value,
      // image : formRef.current.image.value
      
      pname: ProductName.value,
      price: ProductPrice.value,
      category: category.value,
      image:image.value
    }
    setForm((prev)=> [...prev , obj])
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Add New Product
  </h2>

  <form onSubmit={handelSubmit} className="flex flex-col gap-5">

    {/* Product Name */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Product Name
      </label>
      <input
      ref={(e)=> formRef.current.ProductName = e }         
        type="text"
        placeholder="Enter product name"
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
      />
    </div>

    {/* Price */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">
        Price
      </label>
      <input
      ref={(e)=> formRef.current.ProductPrice = e }         

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
      ref={(e)=> formRef.current.category = e}
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
      ref={(e)=> formRef.current.image = e}
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

export default Form
