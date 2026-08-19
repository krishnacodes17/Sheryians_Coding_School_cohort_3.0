import React, { useEffect } from 'react'
import {getProduct} from '../apis/productApi';

function AboutPage() {

 useEffect(()=>{
    getProduct()
 },[])

  console.log("about chala ")


  return (
    <div>
      Aboutpage
    </div>
  )
}

export default AboutPage
