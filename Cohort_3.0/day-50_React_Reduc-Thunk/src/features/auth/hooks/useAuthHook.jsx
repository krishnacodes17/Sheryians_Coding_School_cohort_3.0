import {useNavigate} from 'react-router'
import { useForm } from "react-hook-form"
// import { loginUserApi } from '../api/authApi'
import {useDispatch} from "react-redux"
// import { addUser } from '../state/authSlice'
// import { toast } from 'react-toastify'
import { loginUserAction } from '../state/authAction'



export const useAuthHook = ()=>{

    let dispatch = useDispatch()
    let navigate = useNavigate()

    let {register,handleSubmit,watch,formState:{errors},reset} = useForm()


    let registerForm = (data)=>{
        console.log( "registerform",data)
    }



    let loginForm = async (data)=>{
        
        try {
            console.log( "Loginform",data)

        // * Api call
        // let response = await loginUserApi(data)
        // console.log(response.data)
        
        // dispatch(addUser(response.data))
        // let token = response.data.accessToken
        // localStorage.setItem("accessToken",token)


        // ! yeha per ham authAction (redux thunk se connect kar rahehai )
        dispatch(loginUserAction(data))

        // toast.success("User login Successfully")

        // reset()
        } catch (error) {
            console.log("LoginForm api call Error : ", error)
        }

    }


    return {
        navigate,
        register,
        handleSubmit,
        watch,
        errors,
        registerForm,
        loginForm,

    }
}