import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";


export const fetchProducts = createAsyncThunk("Products/fetchProductsStatus", async (_, { rejectWithValue }) => {
    try {
        const res = await api.get(`/api/v1/products/`);
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
    myProduct: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.myProduct = action.payload;
        }
    },
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
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error=action.payload
        })
    }
})

const { setProduct } = productsSlice.actions;
export default productsSlice.reducer;