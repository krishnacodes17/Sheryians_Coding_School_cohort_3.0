import React, { useContext } from 'react'
import { MyContext } from '../context/MyContex'

function CardProduct({product}) {

  let {setCarts} = useContext(MyContext)

  return (
    <div>
      <div className="w-72 rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-200 hover:shadow-xl transition duration-300">

  {/* Product Image */}
  <div className="h-60 bg-gray-100 flex items-center justify-center p-5">
    <img
      src={product.image}
      alt={product.title}
      className="h-full object-contain hover:scale-105 transition duration-300"
    />
  </div>

  {/* Product Details */}
  <div className="p-4 flex flex-col gap-3">

    {/* Category */}
    <span className="w-fit rounded-full bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 capitalize">
      {product.category}
    </span>

    {/* Title */}
    <h2
      className="font-semibold text-gray-800 line-clamp-2"
      title={product.title}
    >
      {product.title}
    </h2>

    {/* Description */}
    <p className="text-sm text-gray-500 line-clamp-2">
      {product.description}
    </p>

    {/* Rating */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        ⭐
        <span className="font-medium">{product.rating.rate}</span>
        <span className="text-sm text-gray-500">
          ({product.rating.count})
        </span>
      </div>

      <span className="text-2xl font-bold text-green-600">
        ${product.price}
      </span>
    </div>

    {/* Button */}
    <button onClick={()=> setCarts((prev)=> [...prev , product])} className="mt-2 w-full rounded-lg bg-black py-3 text-white font-semibold hover:bg-gray-800 transition">
      Add to Cart
    </button>

  </div>

</div>
    </div>
  )
}

export default CardProduct
