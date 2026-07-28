import React from 'react'
import { axiosInstance } from '../config/axios.instance'

function Home() {


  let getProductData = async ()=>{
    try {
      let  product = await axiosInstance.get("/products")
      let data = product.data
      console.log(data)
    } catch (error) {
      console.log("error", error)
    }
  }

getProductData()

  return (
    <div>
      Home
    </div>
  )
}

export default Home
