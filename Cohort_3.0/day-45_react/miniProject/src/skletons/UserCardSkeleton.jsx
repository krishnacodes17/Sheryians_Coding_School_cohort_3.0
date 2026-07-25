import React from "react";

function UserCardSkeleton() {
  return (
    <div className="max-w-md w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-lg animate-pulse">
      
      {/* Header */}
      <div className="flex items-center gap-4 border-b pb-4">
        <div className="w-16 h-16 rounded-full bg-gray-300"></div>

        <div className="flex-1 space-y-2">
          <div className="h-5 w-40 rounded bg-gray-300"></div>
          <div className="h-4 w-24 rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Body */}
      <div className="mt-5 space-y-4">

        <div>
          <div className="h-3 w-16 rounded bg-gray-200 mb-2"></div>
          <div className="h-4 w-full rounded bg-gray-300"></div>
        </div>

        <div>
          <div className="h-3 w-16 rounded bg-gray-200 mb-2"></div>
          <div className="h-4 w-36 rounded bg-gray-300"></div>
        </div>

        <div>
          <div className="h-3 w-20 rounded bg-gray-200 mb-2"></div>
          <div className="h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-2/3 rounded bg-gray-200 mt-2"></div>
        </div>

        <div>
          <div className="h-3 w-20 rounded bg-gray-200 mb-2"></div>
          <div className="h-4 w-40 rounded bg-gray-300"></div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <div className="h-4 w-20 rounded bg-gray-300"></div>

        <div className="h-10 w-28 rounded-lg bg-gray-300"></div>
      </div>

    </div>
  );
}

export default UserCardSkeleton;