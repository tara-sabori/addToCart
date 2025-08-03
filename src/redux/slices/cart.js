import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addedProducts: [],
    totalPrice: 0,
    addedToCart: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

        },
        increaseProduct: (state, action) => {

        }
    }
})


export const { addToCart, increaseProduct } = cartSlice.actions;
export default cartSlice.reducer;