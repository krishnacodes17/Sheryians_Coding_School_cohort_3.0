import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {createPostApi} from "../api/createPostApi"


export const createPostHook =  () => {
  const [preview, setPreview] = useState("");
  const [value, setValue] = useState("");

  
  const {mutate:createPost } = useMutation({
    mutationFn:createPostApi,

    onSuccess: (data)=>{
        console.log(data)
    },
    onError:(error)=>{
        console.log(error)
    }

})


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      caption: "",
      image: null,
    },
  });

//    remove image
  const removeImage = () => {
    console.log("sfdgdfg")
    setPreview("");
  };

    // Image select hone par preview
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview("");
    }
  };


    // Submit
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("caption", data.caption);
      formData.append("image", data.image[0]);

    //   for (const [key, value] of formData.entries()) {
    //     console.log(key, value);
    //   }
    createPost(formData)

      setPreview("");
      reset();
    } catch (error) {
      console.error("Create post error:", error);
      alert(error.message);
    }
  };


  return {
    removeImage,
    handleImageChange,
    handleSubmit,
    register,
    onSubmit,
    errors,
    isSubmitting,
    preview,setPreview,value,setValue
  };
};
