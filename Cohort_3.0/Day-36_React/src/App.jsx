import React from 'react'
import { useState } from 'react'
import BruteForceFormhandeling from './BruteForceFormhandeling'
import BetterFormHandel from './BetterFormHandel'
import BestFormhandeling from './BestFormhandeling'

function App() {

  const [count,setCount] = useState(0)

  const [user,setUser]=  useState({
    name:"Krishna"
    
  })

  let handelUser = ()=>{
    console.log("hhhhh")
    // setUser(user.name="anup")  

    user.name = "anup"   //* yeha per change hoo aha hai but erender nahi hoo aha hai jiske wajh se oo ui pe dikh nahi raha hai abb issko check kaise kare hamae pass doo button hai jab ye change hoo jaaye too couonter bittoon pe click karo oo ek baar eender kaegga too value aapne aap show hoo jayegi
    // setUser({name:"krishna"})
    // setUser({...user, user})

    // setUser({name:"anup"})   // ? yeha pe ye object new bana au ye chala gaya user me

    // setUser({...user , name:"anup"})

    // ! jab seme value rahega to rerender nahi karega but yeha pe kar aha hai because of ha baa ek object kaa reference alag jaa raha hai 
    
  }

  let handelCount = ()=>{
    setCount(1)
  }


  return (
    // <div>
    //   <h1>{count}</h1>
    //   <h1>User is - {user.name} </h1>
    //   <button onClick={handelCount}>Change count</button>
    //   <button onClick={handelUser}>Change user</button>
    // </div>

    // <BruteForceFormhandeling />

    // <BetterFormHandel />

    <BestFormhandeling />
  )
}

export default App
