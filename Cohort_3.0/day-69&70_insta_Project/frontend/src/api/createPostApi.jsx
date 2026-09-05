import { apiInstance } from "../config/axiosInstance"



export const createPostApi = async(data)=>{
    try {
        let res =await apiInstance.post("/post",data)
        return res
    } catch (error) {
        console.log(error)
    }
}