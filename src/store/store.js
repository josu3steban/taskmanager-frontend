import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { projectSlice } from "./slices/project";



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        project: projectSlice.reducer
    }
});