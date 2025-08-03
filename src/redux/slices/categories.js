import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

const fetchcategories = createAsyncThunk('categories/fetchcategoriesStatus', async (_, { rejectWithValue }) => {
    try {
        const res = await api.get('/api/v1/categories');
        console.log(res?.data);
        return res?.data;
    } catch (error) {
        return rejectWithValue(error?.response?.data);
    }
})
const initialState = {
    categories: [],
    loading: true,
    error: null,
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        // get categories
        builder.addCase(fetchcategories.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchcategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = false;
            state.error = null;
        })
        builder.addCase(fetchcategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default categoriesSlice.reducer;