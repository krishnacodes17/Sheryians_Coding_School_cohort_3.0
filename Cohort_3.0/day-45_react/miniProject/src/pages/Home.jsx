import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import UserCardSkeleton from "../skletons/UserCardSkeleton";
function Home() {
  const [users , setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  let getUserData = async () => {
    try {
      let data = await axios.get("https://fakestoreapi.com/users");
      setUsers(data.data)
      setIsLoading(false)
    } catch (error) {
      console.log("User data api Error : ", error);
    }
  };



  useEffect(()=>{
    getUserData()
  },[])


  return <div className="flex flex-wrap w-full justify-center gap-3 py-3 ">

    { isLoading ?   Array.from({length:8 }).map((_ , ind)=>{
     return <UserCardSkeleton key={ind} />
    })
     : 
     (users.map((val)=>{
     return <UserCard user={val} />
    }))}
  </div>;
}

export default Home;
