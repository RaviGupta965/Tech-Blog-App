import { createSlice } from "@reduxjs/toolkit";


const initialState={
    status:false,
    username:null
}
const authslice=createSlice({
    name: "auth",
    initialState,
    reducers:{ 
        login:(state,action)=>{
            state.status=true,
            state.username=action.payload.username;
        },
        logout:(state)=>{
            state.status=false,
            state.username=null;
        }
    }
    }
)

export default authslice.reducer

export const {login,logout} = authslice.actions