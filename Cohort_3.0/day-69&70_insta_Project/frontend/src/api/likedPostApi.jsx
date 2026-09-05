import { apiInstance } from "../config/axiosInstance"

export const likedPostApi = async(id)=>{
    try {
        let res = await apiInstance.get(`/post/unlike/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}