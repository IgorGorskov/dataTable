import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, USERS_LIST } from "components/User";
import { State } from "./types";

const initialState: State = {UserList: USERS_LIST}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.UserList.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<User>) => {
            state.UserList = state.UserList.filter(item => (item.id !== action.payload.id))
        },
        changeUser: (state, action: PayloadAction<User>) => {
            state.UserList = state.UserList.map(user => (user.id == action.payload.id ? action.payload : user))
        }
    }
})

export const { addUser, deleteUser, changeUser } = userSlice.actions
export default userSlice.reducer