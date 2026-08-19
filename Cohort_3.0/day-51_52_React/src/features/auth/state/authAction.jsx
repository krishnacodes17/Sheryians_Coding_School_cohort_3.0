import {createAsyncThunk} from "@reduxjs/toolkit"
import {apiInstance} from "../../../config/axiosInstance"
import { toast } from 'react-toastify'


//  !  auth/login   => ye name hai    usske baad wala call back hai auriss me 2 chijh hai credentials(jodata aayega ) aur dusara  thunkme inbuild hai agar koi error aaya too oo retun karega 
  
export const loginUserAction = createAsyncThunk("auth/login" , async(credentials ,thunkApi)=>{
    try {
        console.log("thunkaction trigger ")
        let res = await apiInstance.post("/auth/login",credentials)
        let token = res.data.accessToken
        localStorage.setItem("accessToken",token)

        toast.success("User login Successfully")


        // console.log(" response form login api ",res)
        return res.data
    } catch (error) {
        console.log("Error on login api ", error)
        toast.error("login failed")
        return thunkApi.rejectWithValue("login failed")
    }
})


export const hydrateUserAction = createAsyncThunk("/auth/hydrate", async(_,thunkApi)=>{
    let token = localStorage.getItem("accessToken")
        
    try {
        let res = await apiInstance.get("/auth/me",{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })

        // console.log("hydrate user through api with access token " , res)
        return res.data
    } catch (error) {
        console.log("Error in hydrate authApi.jsx : " , error)
        toast.error("unauthorized user")
        return thunkApi.rejectWithValue("hydration failed")
    }
})
