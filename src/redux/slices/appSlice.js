import { createSlice } from '@reduxjs/toolkit';

const initialSlice = {
    state: true,
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialSlice,
    reducers: {
        setState: (state, action) => {
            state.state = action.payload;
        },
    },
});

export const { setState } = appSlice.actions;

export default appSlice.reducer;
