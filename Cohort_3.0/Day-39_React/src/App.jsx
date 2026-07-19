import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
  const [toggle,setToggle]= useState(true)
  const [user,setUser] =useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || []
  })

   const [userUpdate,setUserUpdate] = useState(null)
   console.log(userUpdate)

  let deleteUser = (id)=>{
    let userData = user.filter((data)=> data.id !== id)
    setUser(userData)
    localStorage.setItem("users",JSON.stringify(userData))
  }

  return (
    <div className="bg-emerald-200 min-h-screen w-full h-full  ">
      <Navbar props={setToggle} />
      
      <div className="flex flex-wrap">
        {(toggle) ? (user.map((e)=> <Card key={e.id} e={e} setToggle={setToggle} deleteUser={deleteUser} setUserUpdate={setUserUpdate} />)) : (
        <div className="flex items-center align-bottom justify-center w-full h-full gap-2 flex-wrap">
          <Form setUser={setUser} users={user} userUpdate={userUpdate} setToggle={setToggle} />
          </div> )}
      </div>
      

      
    </div>
  );
}

export default App;
