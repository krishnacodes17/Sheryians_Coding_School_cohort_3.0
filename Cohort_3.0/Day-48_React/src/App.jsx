import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from './features/CountReducer'

function App() {
  const data = useSelector((store)=> store.counterhaiYe.valuehaiYE)

  let dispatch = useDispatch()

console.log(data)

  return (
    <div>
      <h1>Count value is : {data}</h1>
      
      <div id='btn'>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementByValue(5))}>increase By 5 </button>
      </div>
    </div>
  )
}

export default App
