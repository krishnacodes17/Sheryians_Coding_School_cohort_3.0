import React from 'react'

let About = ()=>{
    console.log("About rendering")
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default React.memo(About)    //! here its store refference   remmber here we store this function into variable  not with function keyword

// ! here function is reference data types so when its rerenderits change its valur(refference Value) so react memo() store its value anot update jabtak ussmekoi valueupdatenaa hoo 