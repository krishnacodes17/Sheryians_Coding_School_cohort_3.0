import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { decrement, increment } from '../feature/counter/counterSlice'


function HomePage() {

  let dispatch = useDispatch()
  let value = useSelector((state)=> state.counter.value)



  return (
    <div>
      HomePage  

      <h1>Count : {value} </h1>

      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default HomePage
