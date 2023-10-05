import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const Cartslice=createSlice({
    name:"cartdata",
    initialState:[],
    reducers:{
        additem:(state,action)=>{
           
           return state=[...state,action.payload] 
        },
        removeitem:(state,action)=>{
            return state= void state.splice(action.payload,1)
        }
    },

})



export const{additem}=Cartslice.actions
export const{removeitem}=Cartslice.actions


export default Cartslice.reducer


