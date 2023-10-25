import { configureStore } from "@reduxjs/toolkit";
import idReducer from "./idSlice";

export const store = configureStore({
    reducer: {
        id: idReducer,
    },
});