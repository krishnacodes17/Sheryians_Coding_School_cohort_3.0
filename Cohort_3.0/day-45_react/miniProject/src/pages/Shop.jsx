import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from "../components/ProductCard"
import ProductCardSkeleton from '../skletons/ProductCardSkeleton'

function Shop() {

   const [product , setProduct] = useState([])
   const [isLoading , setIsLoading] = useState(true)


  let getProduct =  async ()=>{
    let data = await axios.get('https://fakestoreapi.com/products')
    setProduct(data.data)
    setIsLoading(false)
  }

  useEffect(()=>{
    getProduct()
  },[])



  return (
    <div className='flex flex-wrap w-full justify-center gap-3 py-3'>
      {
        isLoading ? Array.from({length:8}).map((_,ind)=>{
          return <ProductCardSkeleton key={ind} />
        }) :
        (product.map((prod)=>{
         return <ProductCard key={prod.id} product={prod} />
        }))
      }
    </div>
  )
}

export default Shop
