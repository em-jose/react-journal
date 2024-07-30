import { createSlice } from "@reduxjs/toolkit";
import { AuthStatus } from "@/store/auth/authStatus";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: AuthStatus.CHECKING,
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = AuthStatus.AUTHENTICATED;
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = AuthStatus.NOT_AUTHENTICATED;
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        checkingCredentials: (state) => {
            state.status = AuthStatus.CHECKING;
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
