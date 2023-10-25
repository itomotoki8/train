import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import counter2Reducer from "./counter2Slice";
import userReducer from "./user";
import idReducer from "./idSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        counter2: counter2Reducer,
        user: userReducer,
        id: idReducer,
    },
});