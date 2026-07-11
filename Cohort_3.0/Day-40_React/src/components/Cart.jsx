import React from 'react'

const Cart = ({CartProduct}) => {

  return (
    <div>
      <div className="w-96 bg-white rounded-2xl shadow-lg border border-gray-200 p-5 flex gap-5">

  {/* Product Image */}
  <div className="w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center p-2">
    <img
      src={CartProduct.image}
      alt={CartProduct.title}
      className="w-full h-full object-contain"
    />
  </div>

  {/* Product Details */}
  <div className="flex-1 flex flex-col justify-between">

    <div>
      <h2 className="font-semibold text-gray-800 line-clamp-2">
        {CartProduct.title}
      </h2>

      <p className="text-sm text-gray-500 mt-1 capitalize">
        {CartProduct.category}
      </p>

      <p className="text-lg font-bold text-green-600 mt-2">
        ${CartProduct.price}
      </p>
    </div>

    {/* Bottom */}
    <div className="flex items-center justify-between mt-4">

      {/* Quantity */}
      <div className="flex items-center border rounded-lg overflow-hidden">
        <button className="px-3 py-1 text-lg hover:bg-gray-100">
          −
        </button>

        <span className="px-4 font-medium">
          1
        </span>

        <button className="px-3 py-1 text-lg hover:bg-gray-100">
          +
        </button>
      </div>

      {/* Remove */}
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
        Remove
      </button>

    </div>

  </div>

</div>
    </div>
  )
}

export default Cart
