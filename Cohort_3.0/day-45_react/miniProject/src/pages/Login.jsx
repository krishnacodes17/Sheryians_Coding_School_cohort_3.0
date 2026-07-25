import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { localStorageGetUser, localStorageSetCurrentUser } from "../utils/localStorage";

const Login = () => {

  const {currentUser,setCurrentUser}=  useContext(UserContext)

   let [error ,setError] = useState({})
   let navigate = useNavigate()
   
   const [formData, setFormData] = useState({
     email: "",
     password: "",
   });

   let validate = ()=>{
      let newError = {}

    if(!formData.email.trim()){
      newError.email  = "email is required "
    }

    if(!formData.password.trim()){
      newError.password ="password is required"
    }
    setError(newError)
    return Object.keys(newError).length === 0
   }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validate()) return

    let user = localStorageGetUser()

    let isUSerExist = user.find((val)=> val.email === formData.email && val.password === formData.password)
    
    if(!isUSerExist){
      toast.error("User not exist pls Login ")
      return
    }

    let arr = [...currentUser , formData]
    // console.log(arr)
    setCurrentUser(arr)

  localStorageSetCurrentUser(isUSerExist)






    // let existUser = users.find((val)=> val.email === formData.email && val.password ===formData.password)

    // if(!existUser){
    //   toast.error("User not exists")
    //   return
    // }


    navigate("/main")
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>
          <p className="text-gray-500 mt-2">
            Login to continue shopping
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm">{error.email}</p>

          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <p className="text-red-500 text-sm">{error.password}</p>

          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-indigo-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        {/* Signup */}
        <Link to={"/signup"} className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <span className="text-indigo-600 cursor-pointer hover:underline">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Login;