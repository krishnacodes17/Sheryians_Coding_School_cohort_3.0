const UserCard = ({ user }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-5">User Details</h2>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="text-lg font-semibold text-gray-800">{user.name}</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p className="text-lg font-semibold text-gray-800">{user.email}</p>
        </div>

        {/* Password */}
        <div>
          <p className="text-sm text-gray-500">Password</p>
          <p className="text-gray-700 truncate">{user.password}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
