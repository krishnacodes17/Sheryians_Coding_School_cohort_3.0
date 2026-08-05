

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "Counter",

    // ! this is our state which is give our store value
    initialState:{
        valuehaiYE: 0
    },

    // ! yeha ham iss reducer ko action bolte hai 
    reducers:{

        // ! yeha state hamare initialState ko point karta hai
        increment : (state , action)=>{
            state.valuehaiYE ++
        },

        decrement: (state , action)=>{
            state.valuehaiYE --
        },

        incrementByValue : (state, action)=>{
            state.valuehaiYE += action.payload
        }




    }

})


// console.log("counter : " , counterSlice) // ? yeha ek object milega 
// console.log("counter.action  : " , counterSlice.actions) // ? yeha hamare  sarre reducers milege (increment , decrement)



// ! yeha jo export hioo raha hai oo ui me access kare ne ke liye hai  (counterSlice -- <hamare file kaa name>   .action -- (yehamare counterSliceke andar kaa reducer hai jisko action bolte hai))
export const {increment , decrement, incrementByValue}   = counterSlice.actions


// console.log("counterSlice.Reducer : ", counterSlice.reducer)
// ! yeha per  counterSlice ke andar "reducer" inbuild milta hai  aur ye reducer hai naa ki "reducers" 
export default counterSlice.reducer