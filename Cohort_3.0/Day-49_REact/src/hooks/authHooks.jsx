import { useState } from "react"
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import { addUser } from "../feature/auth/authSlice"


export const useAuth = ()=>{
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const  [registerUSer , setRegisterUser] = useState(JSON.parse(localStorage.getItem("database") || "[]"))
    const {register, handleSubmit , watch,formState:{errors} , reset} = useForm()


    let loginForm = (data)=>{
        let databasee = JSON.parse(localStorage.getItem("database"))
        let isUserExist = databasee.find((e)=>{
            return e.email === data.email && e.password === data.password
        })

        if(!isUserExist){
            toast.error("User not exist")
            return
        }

        dispatch(addUser(isUserExist))

        localStorage.setItem("currentUser" , JSON.stringify(isUserExist))

        toast.success("User Login successfully ")
        reset()
        navigate("/main")
    }



    let registerForm = (data)=>{

        let isUserAlreadyExist = registerUSer.find((e)=>{
            return e.email === data.email
        })

        if(isUserAlreadyExist) {
            toast.error("User already exist ")
            return
        }

        let arr = [...registerUSer ,data]
        setRegisterUser(arr)
        toast.success("User register successfully")

        localStorage.setItem("database", JSON.stringify(arr))
    }


    return{
        register,
        handleSubmit,
        errors,
        reset,
        watch,
        loginForm,
        registerForm
    }
}