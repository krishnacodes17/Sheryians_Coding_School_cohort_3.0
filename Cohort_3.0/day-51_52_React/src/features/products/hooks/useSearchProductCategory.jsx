import { useQuery } from "@tanstack/react-query"
import { getAllProductCategory } from "../api/productApi"


export const  useSearchProductCategory = ()=>{
    const {data, isPending , error} = useQuery({
        queryKey:["allCategory"],
        queryFn:getAllProductCategory
    })

    return{
        data,
        isPending, 
        error
    }
}