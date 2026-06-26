import React from 'react'

function Sidebar({name, children}) {
    console.log(children)
  return (
    <div>
      <h1>This is sidebar</h1>
      <h3>{name}</h3>
      {children}
      

    </div>
  )
}

export default Sidebar
