

export const getCurrentUser =()=>{
    let user =  JSON.parse(localStorage.getItem("currentUser"))
    return user
}

