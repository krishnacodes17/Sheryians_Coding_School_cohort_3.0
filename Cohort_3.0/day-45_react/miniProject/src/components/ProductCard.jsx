import React from "react";
import { Star } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="group w-full max-w-sm rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* Product Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center overflow-hidden p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-600 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-medium">
            {product.rating.rate}
          </span>

          <span className="text-sm text-gray-500">
            ({product.rating.count} Reviews)
          </span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">

          <h3 className="text-2xl font-bold text-indigo-600">
            ${product.price}
          </h3>

          <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;