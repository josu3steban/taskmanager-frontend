import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { projectSlice } from "./slices/project";
import { taskSlice } from "./slices/task/taskSlice";
import { modalTaskSlice } from "./slices/ui";



export const store = configureStore({
    reducer: {
        auth      : authSlice.reducer,
        project   : projectSlice.reducer,
        modalTask : modalTaskSlice.reducer,
        task      : taskSlice.reducer
    }
});