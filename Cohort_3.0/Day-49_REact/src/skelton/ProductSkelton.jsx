import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">

      {/* Image */}
      <div className="h-64 bg-gray-200"></div>

      {/* Content */}
      <div className="p-4">

        {/* Brand */}
        <div className="h-4 w-20 bg-gray-200 rounded"></div>

        {/* Title */}
        <div className="mt-3 h-5 w-full bg-gray-200 rounded"></div>
        <div className="mt-2 h-5 w-3/4 bg-gray-200 rounded"></div>

        {/* Rating */}
        <div className="flex gap-2 mt-4">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Price */}
        <div className="flex gap-3 mt-5">
          <div className="h-6 w-20 bg-gray-200 rounded"></div>
          <div className="h-6 w-14 bg-gray-200 rounded"></div>
        </div>

        {/* Stock */}
        <div className="mt-4 h-4 w-28 bg-gray-200 rounded"></div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <div className="flex-1 h-11 bg-gray-200 rounded-lg"></div>
          <div className="flex-1 h-11 bg-gray-200 rounded-lg"></div>
        </div>

      </div>
    </div>
  );
}

export default ProductCardSkeleton;