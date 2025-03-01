import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./usersSlice"
import modalReducer from "./modalSlice"

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        users: userReducer,
        modal: modalReducer
    }
})