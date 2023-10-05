import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import CartSlice from './Cart-slice'


const Store=configureStore({
    reducer:{
        cart:CartSlice,
    },
    
})

export default Store;

