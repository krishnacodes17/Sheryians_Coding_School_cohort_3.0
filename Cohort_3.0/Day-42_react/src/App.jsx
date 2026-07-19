import React, { useState } from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContex'
import axios from "axios"
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Cart from '../components/Cart'

function App() {

  const [toggle , setToggle] = useState(true)

let {product, setProduct , cartProduct,} = useContext(DataContext)

  let getProduct = async ()=>{
    let data = await axios.get('https://fakestoreapi.com/products')
    setProduct(data.data)
  }
  
  useEffect(()=>{
    getProduct()
  },[])



  return (
    <div>
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className=' w-full flex flex-wrap gap-4 px-4'>
         {
          product.map((elem,ind)=>{
            return <ProductCard key={ind} product={elem} />
          })
         }
      </div>
      )   : (
        <div>
           <Cart  />
        </div>
      )  }
      
       



    </div>
  )
}

export default App
