import React, { useEffect } from 'react'

function Contect() {
    console.log("contect rendering")

   let interval =  setInterval(()=>{
      console.log("this is memeory leak example after contect components unmounut its continue ")
    },1000)

    useEffect(()=>{
      console.log("i am contect page and i print when contect components render(mount)")


      // ! ye callack function ta chalega jab hamara ye components unmount hoga 
      return ()=>{
        console.log("i am print when contect components (unmount )")
        clearInterval(interval)   // jab hamara contect unmount hoo raha hai tabye interval ko clear kar de raha hai 
      }
    },[])

  return (
    <div>
      <h1 className='bg-red-300 text-4xl'>this is contect page </h1>
    </div>
  )
}

export default Contect
