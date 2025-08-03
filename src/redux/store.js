import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import productsReducer from "./slices/products";
import themeReducer from "./slices/theme";
import categoriesReducer from "./slices/categories";

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        theme: themeReducer,
        categories:categoriesReducer,
    }
})

export default store;