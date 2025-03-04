import { SORT_TYPE } from "store/usersSlice"
import { User } from "components/User"

export type State = {
    userList: User [],
    filteredList: User [],
    sortOrder: ORDERS,
    currentSort: SORT_TYPE
}

type SaveUsers = {
    type: "save",
    user: User
}

type ChangeUser = {
    type: 'change',
    user: User, 
}

type DeletUser = {
    type: "delete",
    user: User
}

export type UserAction = ChangeUser | DeletUser | SaveUsers

export enum ORDERS {
    DESC = 'desc',
    ASC = 'ASC'
}