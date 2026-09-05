import { apiInstance } from "../config/axiosInstance"



export const loginUserApi = async(credentials)=>{
    try {
        let res = await apiInstance.post("/auth/login",credentials)
        return res
    } catch (error) {
        console.log(error)
    }
}



export const registerUserApi= async (credentials)=>{
    try {
        let res = await apiInstance.post("/auth/register",credentials)
        return res
    } catch (error) {
        console.log(error)
    }
}


export const getMe = async()=>{
    try {
        let res = await apiInstance.get("/auth/me")
        return res
    } catch (error) {
        console.log(error)
    }
}