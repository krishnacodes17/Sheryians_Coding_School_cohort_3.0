import React, { memo } from 'react'

function Greet({greetfun}) {
    console.log("Greet is running ")
    greetfun()
  return (
    <div>
      Greet
    </div>
  )
}

export default  memo(Greet);
