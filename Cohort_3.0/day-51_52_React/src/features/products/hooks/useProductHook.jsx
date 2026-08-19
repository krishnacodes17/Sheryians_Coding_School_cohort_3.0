import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getProductByCategory } from "../api/productApi";
import { useEffect, useState, } from "react";


export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounce, setDebounce] = useState(null);
  const [category, setCategory] = useState(null);
  const [mode, setMode] = useState("all");


  // console.log("mai mode hu ree : ",mode)
useEffect(()=>{
  let timeOut = setTimeout(()=>{
    setDebounce(search)
  },1000)

  return ()=> clearTimeout(timeOut)

},[search])

  let { data, isPending, error } = useQuery({
    queryKey: ["products", mode === "search" ? debounce : category],
    queryFn: () => {

      if(mode === "category"){
      return  getProductByCategory(category)
    }

    if(mode === "search"){
      return getAllProduct(debounce);
    }

    return getAllProduct(debounce);
  },

    staleTime: 1000 * 5,
  });

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
    category,
    setCategory,
    mode,
    setMode
  };
};


// export const useProductByCategory = ()=>{
//   const [category, setCategory] = useState(null);

//   let {data  } = useQuery({
//     queryKey:["productByCategory",category],
//     queryFn: ()=> getProductByCategory(category)
//   })


//   return{
//     data,
//     category,
//     setCategory
//   }

// }