import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";


export const fetchProducts = createAsyncThunk("Products/fetchProductsStatus", async (_, { rejectWithValue }) => {
    try {
        const res = await api.get(`/products`);
        console.log(res?.data);
        return res?.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})

export const fetchProductById=createAsyncThunk("Products/fetchProductByIdStatus",async(id,{rejectWithValue})=>{
    try {
        const res = await api.get(`/products/${id}`);
        console.log(res?.data);
        return res?.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data)
    }
})

const initialState = {
    products: [],
    loading: true,
    error:null,
    productItem: null,
    loadingItem: true,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        //fetch Products
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products=action.payload;
            state.error=null;
        })
        builder.addCase(fetchProductById.rejected, (state, action) => {
            state.loading = false;
            state.error=action.payload
        })
        //fetch Products By id
        builder.addCase(fetchProductById.pending, (state, action) => {
            state.loadingItem = true;
        })
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            state.loadingItem = false;
            state.productItem=action.payload;
            state.error=null;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loadingItem = false;
            state.error=action.payload
        })
    }
})

export default productsSlice.reducer;