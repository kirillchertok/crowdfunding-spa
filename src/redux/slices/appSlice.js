import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpenFilterModal: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        openFilterModal: state => {
            state.isOpenFilterModal = true;
        },
        closeFilterModal: state => {
            state.isOpenFilterModal = false;
        },
        toogleFilterModal: state => {
            state.isOpenFilterModal = !state.isOpenFilterModal;
        },
    },
});

export const { openFilterModal, closeFilterModal, toogleFilterModal } = appSlice.actions;

export default appSlice.reducer;
