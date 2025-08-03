import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    myTheme: 'light-mode'
};

const themeSlices = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.myTheme = action.payload === 'light-mode' ? "dark-mode" : 'light-mode';
        }
    }
})

export const { toggleTheme } = themeSlices.actions;
export default themeSlices.reducer;