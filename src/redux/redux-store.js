import { configureStore } from "@reduxjs/toolkit";
import { authreducers } from "./auth-slic";
import { categoriesReducer } from "./categories-slic";
import { tasksReducer } from "./tasks-slic";

export const reduxStore = configureStore({
    reducer: {
        tasks: tasksReducer,
        categories: categoriesReducer,
        appAuth: authreducers,
    },
});