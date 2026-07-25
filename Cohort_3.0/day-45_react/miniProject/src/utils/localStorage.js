

export let localStorageSetUser = (user)=>{
     localStorage.setItem("users",JSON.stringify(user))
}

export let localStorageGetUser = ()=>{
    return JSON.parse(localStorage.getItem("users") || "[]")
}

export let localStorageGetCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem("currentUser") || "[]")
}

export const localStorageSetCurrentUser = (user)=>{
    localStorage.setItem("currentUser", JSON.stringify(user))
}