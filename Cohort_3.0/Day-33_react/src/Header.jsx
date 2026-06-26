import React from 'react'

function Header({name,age}) {
    
  return (
    <div>
      <h1>This is a header</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
    </div>
  )
}

export default Header
