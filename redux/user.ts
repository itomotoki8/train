import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: false,
    },
    reducers: {
        changeUser: (state,/*action*/) => {
            state.user = /*action.payload*/state.user = true;
        },
    },
});

export const {changeUser} = userSlice.actions;
export default userSlice.reducer;