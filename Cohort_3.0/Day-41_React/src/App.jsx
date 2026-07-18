import Home from './components/Home'
import About from './components/About'
import Contect from './components/Contect'
import { useEffect, useState } from 'react'
import axios from "axios"

function App() {
    console.log("app rendering")

    const [toggle ,setToggle] = useState(true)
    const [data ,setData] = useState([])
  


    let getData = async ()=>{
      let dattta = await axios.get("https://fakestoreapi.com/products")

      // console.log(dattta.data)
      setData(dattta.data)
    }
    
    // getData()   //! ja ham bina useEffect ke call karege too ye baar baar call hoga because of ham dataget karege aur setData() me set karege too fir se compontets rerender hogga aur fir se getdata chalega

    useEffect(()=>{
      getData()  // ! yeha ek aar useEffect call hoga aur getdata one time chalega
    },[])

console.log(data)

  return (
    <div>
      <button onClick={()=> setToggle((prev)=> !prev)} className='border p-2 ' >change toggle</button>
      <About /> 
      {toggle ? <Home /> :<Contect /> }
      
      
      
    </div>
  )
}

export default App
