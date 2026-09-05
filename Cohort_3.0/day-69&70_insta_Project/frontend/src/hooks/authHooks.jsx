import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getMe, loginUserApi, registerUserApi } from "../api/AuthApi";

export const useAuthHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

    // =========================
  // LOGIN MUTATION
  // =========================

  const {
    mutate: loginUser,
    data,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginUserApi,

    onSuccess:(data)=>{
             console.log("Backend Response for login:", data);
        },

        onError: (error) => {
        console.log("Backend Error:", error);
    }
  });



    // =========================
  // Register MUTATION
  // =========================

    const {mutate:registerUser} = useMutation({
        mutationFn:registerUserApi,

        onSuccess:(data)=>{
             console.log("Backend Response for register:", data);
        },

        onError: (error) => {
        console.log("Backend Error:", error);
    }
    })


  //   ! login user
  const loginForm = async (formdata) => {

    //  ? loginForm submit
    console.log("Form Data:", formdata);
    loginUser(formdata);

  };



  // ! register User
  const registerForm = async (formdata) => {
    console.log("Register Data", formdata);

    registerUser(formdata)


  };






  return {
    loginForm,
    registerForm,
    register,
    handleSubmit,
    errors,
    watch,
  };
};
