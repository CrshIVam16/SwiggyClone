import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cartItems: JSON.parse(localStorage.getItem("cartData")) || [],
        restaurantData: JSON.parse(localStorage.getItem("restaurantData")) || []
    },
    reducers: {
        addToCart: (state, action) => {
            // console.log(action.payload);
            const { info, restaurantData } = action.payload

            // setCartData(prev => [...prev, info]);
            state.cartItems = [...state.cartItems, info]

            localStorage.setItem("cartData", JSON.stringify(state.cartItems))
            localStorage.setItem("restaurantData", JSON.stringify(restaurantData))
        },
        deleteItem: (state, action) => {
            state.cartItems = action.payload
            localStorage.setItem("cartData", JSON.stringify(state.cartItems))
        },
        clearCart: (state) => {
            state.cartItems = [];
            localStorage.removeItem("cartData");
            localStorage.removeItem("restaurantData");
        }

    }
})

export const { addToCart, deleteItem, clearCart } = cartSlice.actions
export default cartSlice.reducer