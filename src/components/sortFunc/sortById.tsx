import { User } from "components/User"

export const sortByIdDesc = (a: User, b: User) => {
    if(Number(a.id) < Number(b.id)){
        return 1
    }
    if(Number(a.id) > Number(b.id)){
        return -1
    }
    return 0
}


export const sortByIdAsc = (a: User, b: User) => {
    if(Number(a.id) < Number(b.id)){
        return -1
    }
    if(Number(a.id) > Number(b.id)){
        return 1
    }
    return 0
}

