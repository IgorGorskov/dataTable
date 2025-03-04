import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ORDERS, State } from "store/types";
import { User, USERS_LIST } from "components/User";
import { sortByIdAsc, sortByIdDesc } from "components/sortFunc/sortById";
import { sortByNameAsc, sortByNameDesc } from "components/sortFunc/sortByName";

export enum SORT_TYPE {
    ID = 'id',
    NAME = 'name',
    CREATION_TIME = 'creationTime',
    CHANGE_TIME = 'changeTime'
}

const initialState: State = {
    userList: USERS_LIST,
    filteredList: USERS_LIST,
    sortOrder: ORDERS.DESC,
    currentSort: SORT_TYPE.ID
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.userList.push(action.payload)
            state.filteredList = state.userList
        },
        deleteUser: (state, action: PayloadAction<User>) => {
            state.userList = state.userList.filter(item => (item.id !== action.payload.id))
            state.filteredList = state.filteredList.filter(item => (item.id !== action.payload.id))
        },
        changeUser: (state, action: PayloadAction<User>) => {
            state.userList = state.userList.map(user => (user.id == action.payload.id ? action.payload : user))
            state.filteredList = state.filteredList.map(user => (user.id == action.payload.id ? action.payload : user))
        },
        searchUser: (state, action: PayloadAction<string>) => {
            if(!action.payload.trim()){
                state.filteredList = state.userList
            }
            else{
                state.filteredList = state.userList.filter((user) => (
                    `${user.firstName} ${user.lastName} ${user.patronymic}`.trim().includes(action.payload)
                ))
            }
        },
        sortUsers: (state, action: PayloadAction<SORT_TYPE>) => {
            switch (action.payload) {
                case (SORT_TYPE.ID):
                    state.currentSort = SORT_TYPE.ID
                    if(state.sortOrder == ORDERS.DESC){
                        state.filteredList = [...state.filteredList].sort(sortByIdDesc)
                        state.sortOrder = ORDERS.ASC
                    }
                    else if(state.sortOrder == ORDERS.ASC){
                        state.filteredList = [...state.filteredList].sort(sortByIdAsc)
                        state.sortOrder = ORDERS.DESC
                    }
                    break;
                case (SORT_TYPE.NAME):
                    state.currentSort = SORT_TYPE.NAME
                    if(state.sortOrder == ORDERS.DESC){
                        state.filteredList = [...state.filteredList].sort(sortByNameDesc)
                        state.sortOrder = ORDERS.ASC
                    }
                    else if(state.sortOrder == ORDERS.ASC){
                        state.filteredList = [...state.filteredList].sort(sortByNameAsc)
                        state.sortOrder = ORDERS.DESC
                    }
                    break;
                case (SORT_TYPE.CREATION_TIME):
                    state.currentSort = SORT_TYPE.CREATION_TIME
                    if(state.sortOrder == ORDERS.DESC){
                        state.filteredList = [...state.filteredList].sort((a: User, b: User) => (+a.createDate - +b.createDate))
                        state.sortOrder = ORDERS.ASC
                    }
                    else if(state.sortOrder == ORDERS.ASC){
                        state.filteredList = [...state.filteredList].sort((a: User, b: User) => (+b.createDate - +a.createDate))
                        state.sortOrder = ORDERS.DESC
                    }
                    break;
                case (SORT_TYPE.CHANGE_TIME):
                    state.currentSort = SORT_TYPE.CHANGE_TIME
                    if(state.sortOrder == ORDERS.DESC){
                        state.filteredList = [...state.filteredList].sort((a: User, b: User) => (+a.changeDate - +b.changeDate))
                        state.sortOrder = ORDERS.ASC
                    }
                    else if(state.sortOrder == ORDERS.ASC){
                        state.filteredList = [...state.filteredList].sort((a: User, b: User) => (+b.changeDate - +a.changeDate))
                        state.sortOrder = ORDERS.DESC
                    }
                    break;
                default:
                    break;
            }
        }
    }
})

export const { addUser, deleteUser, changeUser, searchUser, sortUsers } = userSlice.actions
export default userSlice.reducer