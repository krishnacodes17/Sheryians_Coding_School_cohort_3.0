import React from 'react'

function Card({e,deleteUser,setUserUpdate,setToggle}) {
  const {userName,email,mobail,image} = e
  return (
    <div className='w-55 border h-100  m-4 hover:shadow-2xl duration-300 rounded '>
      <div className='w-full h-[55%] rounded bg-red-300' >
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className='pt-5 w-full h-fit p-2 flex flex-col gap-4'>
        <h4>{userName}</h4>
        <h4 className='w-45 truncate'>{email}</h4>
        <h4>{mobail}</h4>
        <div className='flex justify-between px-3'>
            <button onClick={()=>{
              setUserUpdate(e)
              setToggle((prev)=>!prev)
            }} className='border px-3 py-1 rounded font-medium cursor-pointer bg-orange-300'>Update</button>
            <button onClick={()=>deleteUser(e.id)} className='border px-3 py-1 rounded font-medium cursor-pointer bg-red-400'>delete</button>
        </div>
      </div>
    </div>
  )
}

export default Card
