import { createContext, useState } from "react";



export const MyContext  = createContext()




export const  ProviderRouter = ({children})=>{

    const [product, setProduct] = useState([])

    return <MyContext.Provider value={{product , setProduct}}>
        {children}
    </MyContext.Provider>
}