import React, { useState } from 'react'

function App() {
  const [val , setVal] = useState(0)    // ? val is a actual value  & setval is a function which update the value and also rerender the page 
  const [flag , setFlag] = useState(false)
  // console.log("hellow")
  // setVal(val+1)    // ? we can't set value hee because its set value +1 then its render and again value incrae its count so its unlimited rerender  Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop. 
  

  console.log(flag)     // ? here flag will be set true and again click on button its rerender again but in thired time its cant rerender because value is seme when value is seme its avoid to unneccesarey rerender
  return (
    <div>
      <p>{val}</p>
      <p>Boolean - {flag.toString()}</p>
      <button onClick={()=> setVal(val + 1)} >Increase</button>
      <button onClick={()=> setVal(val - 1)} >Decrease</button>

      <button onClick={()=>setFlag(true)}>SetFlagvalue</button>
    </div>
  )
}

export default App
