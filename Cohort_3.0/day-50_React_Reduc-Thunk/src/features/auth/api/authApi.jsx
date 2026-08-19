// import { apiInstance } from "../../../config/axiosInstance"

// export const loginUserApi =async (credentials)=>{
//     try {
//         let res = await apiInstance.post("/auth/login",credentials)
//         // console.log(" response form login api ",res)
//         return res
//     } catch (error) {
//         console.log("Error on login api ", error)
//     }
// }



// export let hydrateUser = async()=>{
//     let token = localStorage.getItem("accessToken")

//     try {
//         let res = await apiInstance.get("/auth/me",{
//             headers:{
//                 "Authorization": `Bearer ${token}`
//             }
//         })

//         // console.log("hydrate user through api with access token " , res)
//         return res
//     } catch (error) {
//         console.log("Error in hydrate authApi.jsx : " , error)
//     }
// } 