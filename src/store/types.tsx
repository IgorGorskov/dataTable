import { User } from "components/User"

export type State = {
    UserList: User []
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