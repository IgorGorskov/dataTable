import { User } from "components/User"

export const sortByNameDesc = (a: User, b: User) => {
    const fullNameA = `${a.firstName} ${a.lastName} ${a.patronymic}`.trim()
    const fullNameB = `${b.firstName} ${b.lastName} ${b.patronymic}`.trim()
    if(fullNameA < fullNameB){
        return 1
    }
    if(fullNameA > fullNameB){
        return -1
    }
    return 0
}


export const sortByNameAsc = (a: User, b: User) => {
    const fullNameA = `${a.firstName} ${a.lastName} ${a.patronymic}`.trim()
    const fullNameB = `${b.firstName} ${b.lastName} ${b.patronymic}`.trim()
    if(fullNameA < fullNameB){
        return -1
    }
    if(fullNameA > fullNameB){
        return 1
    }
    return 0
}

