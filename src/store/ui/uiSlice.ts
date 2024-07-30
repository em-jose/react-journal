import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
    name: "ui",
    initialState: {
        showSidebar: false,
    },
    reducers: {
        toggleSidebar: (state, action) => {
            state.showSidebar = action.payload;
        },
    },
});

export const { toggleSidebar } = uiSlice.actions;
