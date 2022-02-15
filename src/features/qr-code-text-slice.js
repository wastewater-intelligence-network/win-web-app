import { createSlice } from "@reduxjs/toolkit";

const initialState = {codes: []};

export const qrCodeTextSlice = createSlice({
    name: "qrCodeTexts",
    initialState,
    reducers: {
        addQrCodeTexts: (state, action) =>{
            state.codes = action.payload;
        },
        clearQrCodeTexts: (state) =>{
            state.codes = [];
        }
    }
});

export const {addQrCodeTexts, clearQrCodeTexts} = qrCodeTextSlice.actions;
export default qrCodeTextSlice.reducer;