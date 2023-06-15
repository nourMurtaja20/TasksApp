import { createSlice } from "@reduxjs/toolkit";

let authSlic = createSlice({
    name: "auth-slic",
    initialState: { loggedin: localStorage.getItem('loggedin'), token: localStorage.getItem('token') },
    reducers: {
        login(state, action) {
            state.loggedin = true;
            state.token = action.payload;
        },
        register(state, action) {
            state.loggedin = true;
            state.token = action.payload;
        },
        logout(state, action) {
            state.loggedin = false;
            state.token = "";
        },
    },
});
export const authreducers = authSlic.reducer;
export const authActions = authSlic.actions;
