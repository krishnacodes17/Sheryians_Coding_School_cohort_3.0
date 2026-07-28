import React, { useCallback, useMemo } from "react";
import About from "./components/About";
import Contect from "./components/Contect";
import { useState } from "react";
import UserCart from "./components/UserCart";
import Greet from "./components/Greet";

function App() {
  const [count, setCount] = useState(0);

  let [user, setUser] = useState({name:"krishna" , id: 12});

  console.log("App count ", count);



  // let greet = ()=>{
  //   console.log("greet function running ")
  // }

   let greet = useCallback(()=>{
    console.log("greet function running ")
  },[user])


  // ! useMemo .. >> isska use tab karte hai jab ek function hai aur ussm kuch return kar raha aur oo function kaa hame kaamsirf ek baar chalana hai  but UI render hone ke wajh se oo baar baar chalta hai usskorokne ke liye useMemo kaa husekarege   

    let looping =  useMemo(()=>{
      let sum = 0
      for(let i = 0 ; i < 1000 ; i ++){
        console.log("looping run")
        sum ++
      }
      return sum
    },[])

    // looping()

  return (
    // <div>
    //   {/*  ! React.memo() */}
    //   <h1 >Memoization</h1>
    //   {/* <button
    //     onClick={() => setCount(count + 1)}
    //     className="border px-4 py-1 m-3 cursor-pointer"
    //   >
    //     Increse
    //   </button>
    //   <About />
    //   <Contect /> */}

    //   {/*   */}
      // <h2 className="mt-10">{user.name}</h2>
      // <button onClick={()=> setUser({...user , name:"ranjeet"})} className="border px-4 py-1 m-3 cursor-pointer">ChangeUSer</button>

    //   <UserCart user= {user} /> 



    // </div>




    



//  ! useCall Back 

    <div>

      <h1>Lopping : {looping}</h1>
      <Greet greetfun = {greet}/>
      <button onClick={()=> setUser({...user , name:"ranjeet"})} className="border px-4 py-1 m-3 cursor-pointer">ChangeUSer</button>

    </div>
  );
}

export default App;
