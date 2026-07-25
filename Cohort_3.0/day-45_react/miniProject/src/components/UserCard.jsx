import React from "react";

function UserCard({ user }) {
    console.log(user)
  return (
    <div className="max-w-md w-full rounded-2xl bg-white shadow-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-4 border-b pb-4">
        <div className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center text-2xl font-bold uppercase">
          {user.name.firstname[0]}
          {user.name.lastname[0]}
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-gray-500">@{user.username}</p>
        </div>
      </div>

      {/* User Details */}
      <div className="mt-5 space-y-3">

        <div>
          <p className="text-xs text-gray-500">Email</p>
          <p className="font-medium text-gray-800">{user.email}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Phone</p>
          <p className="font-medium text-gray-800">{user.phone}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Address</p>
          <p className="font-medium text-gray-800 capitalize">
            {user.address.number}, {user.address.street}
          </p>

          <p className="text-gray-600 capitalize">
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Location</p>
          <p className="text-gray-700">
            🌍 {user.address.geolocation.lat},{" "}
            {user.address.geolocation.long}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <span className="text-sm text-gray-500">
          User ID: #{user.id}
        </span>

        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          View Profile
        </button>
      </div>

    </div>
  );
}

export default UserCard;