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

const updateCartTotals = (state) => {
    state.addedToCart = state.addedProducts.reduce((sum, item) => sum + item.qty, 0);
    state.totalPrice = parseFloat(
        state.addedProducts.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)
    );
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.addedProducts.find((p) => p.id === action.payload.id);

            if (exists) {
                exists.qty += 1;
                exists.totalPrice = exists.price * exists.qty;
            } else {
                state.addedProducts.push({ ...action.payload, qty: 1, totalPrice: action.payload.price });
            }

            updateCartTotals(state);
            saveToLocalStorage(state);
        },
        increaseProduct: (state, action) => {
            const product = state.addedProducts.find((p) => p.id === action.payload.id);
            if (product) {
                product.qty += 1;
                product.totalPrice = product.price * product.qty;
            }

            updateCartTotals(state);
            saveToLocalStorage(state);
        },
        decreaseProduct: (state, action) => {
            const product = state.addedProducts.find((p) => p.id === action.payload.id);

            if (product) {
                if (product.qty === 1) {
                    state.addedProducts = state.addedProducts.filter((p) => p.id !== product.id);
                } else {
                    product.qty -= 1;
                    product.totalPrice = product.price * product.qty;
                }
            }

            updateCartTotals(state);
            saveToLocalStorage(state);
        },
        payProductsHandle: (state) => {
            state.addedToCart = 0;
            state.addedProducts = [];
            state.totalPrice = 0;
            localStorage.removeItem('cart');
        }
    }
})


export const { addToCart, increaseProduct, decreaseProduct, payProductsHandle } = cartSlice.actions;
export default cartSlice.reducer;