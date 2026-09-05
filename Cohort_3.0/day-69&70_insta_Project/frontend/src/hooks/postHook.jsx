import {useQuery} from "@tanstack/react-query"
import { postFeedApi } from "../api/postApi"
import { useState } from "react"


export const postFeed = ()=>{

    const {data,isLoading,error} = useQuery({
        queryKey:["postfeed"],
        queryFn:postFeedApi
    })

    console.log(data?.data?.post)

    return{
        data,
        isLoading,
        error,
        feedData: data?.data?.post || [],

    } 

}