import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status  : 'complete', //authenticating
    checking: 'not-authetincated', //authenticated
    uid     : null,
    name    : null,
    email   : null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticating: ( state ) => {
            state.status = 'authenticating'
        },

        login: ( state, action ) => {
            state.checking = 'authenticated';
            state.status   = 'complete';
            state.uid      = action.payload.uid;
            state.name     = action.payload.name;
            state.email    = action.payload.email;
        },

        logout: ( state ) => {
            state.checking = 'not-authenticated';
            state.status   = 'complete';
            state.uid      = null;
            state.name     = null;
            state.email    = null;
        }
    }
});

export const { authenticating, login, logout } = authSlice.actions;