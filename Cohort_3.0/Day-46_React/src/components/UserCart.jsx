import React from 'react'


// !  yeha hamne  user ko use nahi kiya  kiya firbhi UserCard rerender hooraha hai aur isska reason hai kyu ku user ki value update hoo rahi hai app me button click pe issliye ye components rerenderhoga

function UserCart({user}) {
    console.log("UserCard rendering")
  return (
    <div>
      UserCard
    </div>
  )
}

export default React.memo(UserCart , (prevProps, nextProps)=>{
    //  ! yeha per id change nahi hoo rahi thi too ham yeha id ko target kiye aurissbasis  pe rerendering rokege 
    return prevProps.user.id === nextProps.user.id
})
