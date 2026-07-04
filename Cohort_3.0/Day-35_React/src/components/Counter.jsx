import React, { useState } from 'react'

function Counter() {

    console.log("rendering....")
      
      const [count , setCount] =useState(0)
    
      function increment (){
        // * what happen whwn we call 3 time or more its rerender 3 time ?
        //  ? no its only run 1 time because of batching that is on so its only run one time 
        // ! but i need ki my value is updated 3 time because we call setCount 3time 
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
    
    
        // * here setCount have also a function which store pevious value 
        setCount((prev)=> prev +1 )
        setCount((prev)=> prev +1 )
        setCount((prev)=> prev +1 )
    
      }


  return (
    <div className='w-screen h-screen  text-amber-950 '>
      <h1>Value of count - {count}</h1>
      <button onClick={()=> {
        increment()
        
      }} className='border py-2 px-4 text-2xl font-medium uppercase'>Incement</button>
    </div>
  )
}

export default Counter
