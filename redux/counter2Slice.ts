import {createSlice} from "@reduxjs/toolkit";

export const counter2Slice = createSlice({
    name: 'counter2',
    initialState: {
        count: 10,
    },
    reducers: {
        increment10: (state) => {
            state.count += 10;
        },
        decrement10: (state) => {
            state.count -= 10;
        },
    },
});

export const { increment10, decrement10} = counter2Slice.actions;
export default counter2Slice.reducer;