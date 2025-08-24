import { createSlice } from "@reduxjs/toolkit";


const loadCart = () => {
    try {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : null;
    } catch {
        return null;
    }
};

const savedCart = loadCart() || {
    addedProducts: [],
    totalPrice: 0,
    addedToCart: 0,
};

const initialState = savedCart;

const saveToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify(state));
};

// const initialState = {
//     addedProducts: [],
//     totalPrice: 0,
//     addedToCart: 0,
// }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.addedProducts.push({ ...action.payload, qty: 1, totalPrice: action.payload.price })
            state.addedToCart = state.addedProducts.reduce((prev, curr) => (prev + curr?.qty), 0);
            state.totalPrice = state.addedProducts.reduce((prev, curr) => (prev + curr?.totalPrice), 0).toFixed(2);
            saveToLocalStorage(state);
        },
        increaseProduct: (state, action) => {
            state.addedProducts = state.addedProducts.map(p => {
                if (p?.id === action.payload.id) {
                    return { ...action.payload, qty: p?.qty + 1, totalPrice: p.price * (p?.qty + 1) }
                }
                else {
                    return p
                }
            })
            state.addedToCart = state.addedProducts.reduce((prev, curr) => (prev + curr?.qty), 0);
            state.totalPrice = state.addedProducts.reduce((prev, curr) => (prev + curr?.totalPrice), 0).toFixed(2);
            saveToLocalStorage(state);
        },
        decreaseProduct: (state, action) => {
            const currentQty = action.payload.qty;
            state.addedProducts = currentQty === 1 ? state.addedProducts.filter(p => p?.id !== action?.payload?.id)
                : state.addedProducts.map(p => {
                    if (p?.id === action.payload.id) {
                        return { ...action.payload, qty: currentQty - 1, totalPrice: p.price * (currentQty - 1) }
                    }
                    else {
                        return p
                    }
                })
            state.addedToCart = state.addedProducts.reduce((prev, curr) => (prev + curr?.qty), 0);
            state.totalPrice = state.addedProducts.reduce((prev, curr) => (prev + curr?.totalPrice), 0).toFixed(2);
            saveToLocalStorage(state);
        }
    }
})


export const { addToCart, increaseProduct, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;