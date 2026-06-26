import React from 'react'

function Footer(props) {
    const {fotervalue , footerage} = props
    console.log(props)
  return (
    <div>
      <h1>This is a footer section</h1>
    <h2>{fotervalue}</h2>
    <h3>{footerage}</h3>
    </div>
  )
}

export default Footer
