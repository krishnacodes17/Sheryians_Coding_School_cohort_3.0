import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import uniqid from 'uniqid';
import { localStorageGetUser, localStorageSetUser } from "../utils/localStorage";
import { toast } from "react-toastify";



const Signup = () => {
  let {users ,setUsers} = useContext(UserContext);
  let navigate = useNavigate()

  const [error, setError] = useState({});
  const [form, setform] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    let newError = {};

    if (!form.fullname.trim()) {
      newError.name = "Name is required";
    }

    if (!form.email.trim()) {
      newError.email = "Email is required";
    }

    if (!form.password.trim()) {
      newError.password = "Password is required";
    }

    if (!form.confirmPassword.trim()) {
      newError.confirmPassword = "Password is required";
    }

    if(form.password !== form.confirmPassword){
      newError.confirmPassword = "Password do not match"
    }

    setError(newError);

    return Object.keys(newError).length === 0;
  };

  let chanageHandeler = (e) => {
    setform((val) => ({ ...val, [e.target.name]: e.target.value }));
  };

  let submitHandeler = (e) => {
    e.preventDefault();
    if (!validate()) return;

    let user = users.find((u)=>u.email === form.email)

    if(user){
      toast.error("user already exists")
      return
    }

    let newUser = {...form, id: uniqid()}
    setUsers((prev)=> [...prev, newUser])
     e.target.reset();
     navigate("/")
  };
  
// console.log(users)
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account 🚀
          </h1>
          <p className="text-gray-500 mt-2">Sign up to start shopping</p>
        </div>

        {/* Form */}
        <form onSubmit={submitHandeler} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              onChange={chanageHandeler}
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm">{error.name}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              onChange={chanageHandeler}
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm">{error.email}</p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              onChange={chanageHandeler}
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm">{error.password}</p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              onChange={chanageHandeler}
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm">{error.confirmPassword}</p>

          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to={"/"}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
