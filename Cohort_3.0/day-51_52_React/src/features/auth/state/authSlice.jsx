import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserAction, loginUserAction } from "./authAction";

const authSlice = createSlice({
    name:"auth",

    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false
    },

    // reducers:{
    //     addUser:(state,action)=>{
    //         state.user = action.payload
    //         state.isAuthenticated = true
    //         state.isLoading = false
    //     },

    //     removerUser: (state,action)=>{
    //         state.user = null,
    //         state.isAuthenticated = false,
    //         state.isLoading = false

    //     }


    // },


    // ! yeha ham thunk kaa access kar rahe hai 
    extraReducers:(builder)=>{
        builder

        // ? this is for login user
        .addCase(loginUserAction.pending, (state,action)=>{
            state.isLoading = true
        })
        .addCase(loginUserAction.fulfilled, (state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        })
        .addCase(loginUserAction.rejected, (state,action)=>{
            state.isLoading = false
        })


        
        // ? this is for  hydrate user

        .addCase(hydrateUserAction.pending, (state,action)=>{
            state.isLoading = true
        })
        .addCase(hydrateUserAction.fulfilled, (state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
            state.isLoading = false
        })
        .addCase(hydrateUserAction.rejected, (state,action)=>{
            state.isLoading = false
        })
        
    }

})



export const {addUser , removerUser} = authSlice.actions
export default authSlice.reducer