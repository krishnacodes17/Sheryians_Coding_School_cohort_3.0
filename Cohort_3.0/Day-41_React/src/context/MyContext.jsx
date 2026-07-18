import { useState } from "react";
import { MyStore } from './MyStore'

export let  ContextProvider = ({ children })=>{

    const [count , setCount] = useState(0)
    console.log("context")

    return( <MyStore.Provider value={{count , setCount}}>
        {children}</MyStore.Provider>
        )
}