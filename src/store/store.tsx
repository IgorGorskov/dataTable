import { configureStore } from "@reduxjs/toolkit"
import userReducer from "store/usersSlice"
import modalReducer from "store/modalSlice"

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        users: userReducer,
        modal: modalReducer
    }
})