import { useState } from "react";
import { createContext } from "react";


export const DataContext = createContext()

export const  ContextProvider = ({children})=>{

    const  [product , setProduct]= useState([])
    const  [cartProduct , setCartProduct]= useState([])


    return(
        <DataContext.Provider value={{product,setProduct ,setCartProduct,cartProduct}}>
            {children}
        </DataContext.Provider>
    )
}