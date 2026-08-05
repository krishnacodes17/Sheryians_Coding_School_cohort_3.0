import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const {
    id,
    thumbnail,
    title,
    brand,
    category,
    price,
    rating,
    stock,
    availabilityStatus,
    discountPercentage,
  } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Image */}
      <div className="relative bg-gray-100 h-64 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full capitalize">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Brand */}
        <p className="text-sm text-gray-500">{brand}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-1 line-clamp-2">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating}</span>
          <span className="text-gray-500 text-sm">
            ({stock} in stock)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-green-600">
            ${price}
          </span>

          <span className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded">
            -{discountPercentage}%
          </span>
        </div>

        {/* Availability */}
        <p
          className={`mt-3 text-sm font-medium ${
            stock > 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {availabilityStatus}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">

          <button className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            <ShoppingCart size={18} />
            Add
          </button>

          <Link
            to={`/main/products/${id}`}
            className="flex-1 text-center border border-black py-2 rounded-lg hover:bg-black hover:text-white transition"
          >
            Details
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;