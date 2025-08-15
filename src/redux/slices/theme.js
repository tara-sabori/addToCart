import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myTheme: localStorage.getItem('theme') || 'light-mode'
};

const themeSlices = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.myTheme = action.payload === 'light-mode' ? "dark-mode" : 'light-mode';
            localStorage.setItem('theme', state.myTheme);
        }
    }
})

export const { toggleTheme } = themeSlices.actions;
export default themeSlices.reducer;