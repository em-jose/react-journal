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
        openSidebar: (state) => {
            state.showSidebar = true;
        },
        closeSidebar: (state) => {
            state.showSidebar = false;
        },
    },
});

export const { toggleSidebar, openSidebar, closeSidebar } = uiSlice.actions;
