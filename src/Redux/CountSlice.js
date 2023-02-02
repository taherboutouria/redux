import { createSlice } from "@reduxjs/toolkit";

const CountSlice= createSlice({
    name:'count',
    initialState:{
        count:0
    },

    reducers:{
        Increment :(state, action)=>{
            state.count++
        },
        Decrement: (state,action)=>{
            if(state.count>0){
                state.count--
            }
        },
        Reset: (state,action)=>{
            state.count = 0
        },
        Increment_with_value:(state,action)=>{
            state.count += action.payload
        }
    }
})

export default CountSlice.reducer
export const {Increment, Decrement,Reset,Increment_with_value} = CountSlice.actions