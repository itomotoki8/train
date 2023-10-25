import { createSlice } from '@reduxjs/toolkit';

export const idSlice = createSlice({
    name: 'id',
    initialState: {
        id: 0,
    },
    reducers: {
        getId: (state,actions) => {
            state.id = actions.payload;
        },
    },
});

export const { getId } = idSlice.actions;
export default idSlice.reducer;