import React from 'react'

let contect = React.memo(
  ()=>{
    console.log("Contect Rendering")
  return (
    <div>
      <h1>Contect</h1>
    </div>
  )
}
)

export default contect
