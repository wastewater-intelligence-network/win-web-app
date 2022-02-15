import { combineReducers } from "@reduxjs/toolkit";
import qrCodeTextReducer from '../features/qr-code-text-slice'


export const rootReducer = combineReducers({
    qrCodeTexts: qrCodeTextReducer,
})

export default rootReducer;