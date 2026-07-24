import React, { useContext, useEffect } from 'react'
import axios from "axios"
import { MyContext } from '../context/Mycontext'
import ProductCard from '../components/ProductCard'


function Home() {

    const {product,setProduct} = useContext(MyContext)

    let getData = async ()=>{
        try {
            const product = await axios.get("https://fakestoreapi.com/products")
            // console.log(product.data)

            setProduct(product.data)
        } catch (error) {
            console.log("Error : ", error)
        }
    }


    useEffect(()=>{
        getData()
    },[])


  return (
    <div className='w-full  flex flex-wrap gap-3 pt-4 items-center justify-center'>
      {product.map((prod)=>{
        return <ProductCard key={prod.id}  product={prod}  />
      })}
    </div>
  )
}

export default Home
