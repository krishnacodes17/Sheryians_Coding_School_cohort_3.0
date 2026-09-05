import { useMutation } from "@tanstack/react-query";
import { likedPostApi } from "../api/likedPostApi";
import { useState } from "react";
import { unLikedApi } from "../api/unLikedApi";

export const likedPostHook = () => {

  const [isLiked,setIsliked] = useState(false)

    const {mutate:likePostApi} = useMutation({
        mutationFn:likedPostApi,

        onSuccess:(data)=>{
            console.log(data)
        },
        onError:(data)=>{
            console.log(data)
        }
    })

    // ? unliked 
        const {mutate:unlikedClick} = useMutation({
        mutationFn:unLikedApi,

        onSuccess:(data)=>{
            console.log(data)
        },
        onError:(data)=>{
            console.log(data)
        }
    })

  const likePostClick = (id) => {
    // console.log("liked post click ",id)
    likePostApi(id)
  };


  const unlikedPostClick = (id)=>{
    // console.log("unliked Post click : ", id)
    unlikedClick(id)
  }




  return {
    likePostClick,
    unlikedPostClick
  };
};
