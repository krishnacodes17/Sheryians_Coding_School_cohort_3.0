import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {

  const [product , setProduct] = useState([])
  const [serch , setsearch] = useState(null)
  const [filter , setFilter] = useState([])



  let getProduct = async()=>{
    try {
      let data = await axios.get("https://fakestoreapi.com/products")
      setProduct(data.data)
    } catch (error) {
      console.log("Error on product api calling ", error)
    }
  }

  let filterData = ()=>{
    let result = product.filter((val)=>{
     return val.title.toLowerCase().includes(serch.toLowerCase())
    })

    setFilter(result)
    // setProduct(result)
  }

  
// !! debouncing 
  useEffect(()=>{

   let timeout = setTimeout(()=>{
      console.log("jdfsjglkjfsg")
    filterData()
  },1000)

  return ()=>clearTimeout(timeout)

  },[serch])


  


  // useEffect(()=>{
  //   getProduct()
  // },[])

let change =(e)=>{
  setsearch(e.target.value)
  
}
  return (
    <div>
      <div>
        <h1>Debouncing</h1>
      <hr />
      <input  onChange={change}  className='border px-4 py-2 mt-5 m-3 ' placeholder='search Product' type="text" />
      </div>
    <div className='text-white'>
      {filter.length > 0 ? filter.map((val)=> <h1 key={val.id}>{val.title}</h1>)  : product.map((val)=>{
       return <h1 key={val.id} className='p-2'>{val.title}</h1>
      })}
    </div>

    </div>
  )
}

export default App
