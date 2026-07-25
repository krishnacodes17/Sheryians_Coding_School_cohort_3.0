import React from "react";

function ProductCardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm animate-pulse">

      {/* Image */}
      <div className="h-64 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <div className="h-6 w-24 rounded-full bg-gray-200"></div>

        {/* Title */}
        <div className="mt-4 space-y-2">
          <div className="h-5 w-full rounded bg-gray-300"></div>
          <div className="h-5 w-3/4 rounded bg-gray-300"></div>
        </div>

        {/* Description */}
        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-full rounded bg-gray-200"></div>
          <div className="h-4 w-2/3 rounded bg-gray-200"></div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-5">
          <div className="w-5 h-5 rounded-full bg-gray-300"></div>
          <div className="h-4 w-10 rounded bg-gray-300"></div>
          <div className="h-4 w-24 rounded bg-gray-200"></div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          <div className="h-8 w-20 rounded bg-gray-300"></div>

          <div className="h-10 w-32 rounded-lg bg-gray-300"></div>
        </div>

      </div>

    </div>
  );
}

export default ProductCardSkeleton;