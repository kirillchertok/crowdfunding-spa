import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openedModal: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        openModal: (state, action) => {
            state.openedModal = action.payload;
        },
        closeModal: state => {
            state.openedModal = null;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
