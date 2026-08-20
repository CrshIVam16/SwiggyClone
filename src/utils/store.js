import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './toggleSlice'
import cartSlice from './cartSlice'
import filterSlice from './filterSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
        // toggleSlice: toggleSlice,  //same as below since key and value are same
        toggleSlice,
        cartSlice,
        filterSlice,
        authSlice
    }
})

export default store