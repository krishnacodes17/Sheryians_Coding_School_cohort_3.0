import React from 'react'
import { Navigate } from "react-router-dom";


function ProtectedRoutes({children}) {
    let isAdmin = false

    if(!isAdmin){
        alert("you are not admin so you can't  go to about")
        return <Navigate to="/" replace />;
        
    }

  return children
}
export default ProtectedRoutes
