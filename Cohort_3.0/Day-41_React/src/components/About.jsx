import React, { useContext, useEffect } from 'react'
import { MyStore } from '../context/MyStore'

function About() {
    console.log("about rendering")

    let {count, setCount} = useContext(MyStore)
    useEffect(()=>{
      console.log("app rendeing 222222")
    },[count])

  return (
    <div>
      <h1>Count : {count }</h1>
      <button onClick={()=> setCount((prev)=> prev + 1)}>increase</button>
    </div>
  )
}

export default About
