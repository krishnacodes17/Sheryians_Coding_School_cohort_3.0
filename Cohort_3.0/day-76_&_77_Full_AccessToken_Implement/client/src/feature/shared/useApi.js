import { useAuthContext } from "../auth/state/useAuthContext";
import axios from "axios"


function useApi (){

    const authContext = useAuthContext()

    const api = axios.create({
        baseURL:"http://localhost:5173/api/v1",
        withCredentials:true
    })


    api.interceptors.request.use((config)=>{
        config.headers.Authorization = `Bearer ${authContext.accessToken}`
        return config
    })


    api.interceptors.response.use(
    (response) => {
      return response; 
    },
    (error) => {
      return Promise.reject(error);
    }
  );


return api
}


export default useApi