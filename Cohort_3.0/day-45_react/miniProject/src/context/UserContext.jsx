import { createContext, useEffect, useState } from "react";
import { localStorageGetCurrentUser, localStorageGetUser, localStorageSetCurrentUser, localStorageSetUser } from "../utils/localStorage";


export let UserContext = createContext()

export let UserContextProvider = ({children})=>{

    const [users,setUsers] = useState(localStorageGetUser())
    
    const [currentUser , setCurrentUser] =useState([])

    

    useEffect(()=>{
        localStorageSetUser(users)
    },[users])

    return <UserContext.Provider value={{users , setUsers ,currentUser ,setCurrentUser}}>
        {children}
    </UserContext.Provider> 
}