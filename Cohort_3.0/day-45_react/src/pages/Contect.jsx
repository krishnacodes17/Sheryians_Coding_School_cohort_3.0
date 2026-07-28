import React from 'react'
import { axiosInstance } from '../config/axios.instance'

function Contect() {

  let getUser = async ()=>{
    try {
      let user = await axiosInstance.get("/users")
      let data =  user.data
      console.log(data)

    } catch (error) {
      console.log("error : ", error)
    }
  }

  getUser()

  return (
    <div>
      contect
    </div>
  )
}

export default Contect
