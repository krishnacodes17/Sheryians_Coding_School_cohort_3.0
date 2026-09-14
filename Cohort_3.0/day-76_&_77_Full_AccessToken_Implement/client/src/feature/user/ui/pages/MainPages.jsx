import React from 'react'
import { useAuthContext } from '../../../auth/state/useAuthContext'
import refreshApi from '../../../shared/refreshApi'
import useApi from '../../../shared/useApi'

function MainPages() {

  const authContext = useAuthContext()
  const api = useApi()

  const getUser =async ()=>{
    try {
      const response = await api.get("/userDetail")
    console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  
  return (
    <div>MainPages 

      <h1>Show user </h1>

      <button className='border px-5 py-2 bg-black text-white' onClick={getUser}>click To show user </button>
    </div>
  )
}

export default MainPages