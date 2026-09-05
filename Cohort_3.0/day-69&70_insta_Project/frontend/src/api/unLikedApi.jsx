import { apiInstance } from "../config/axiosInstance"



export const unLikedApi = async (id)=>{
    try {
        let res = await apiInstance.get(`/post/like/${id}`)
    } catch (error) {
        console.log(error)
    }
}