import { useDispatch } from 'react-redux'

import { User } from "components/User"
import { Button } from "components/ui/Button/Button"

import { deleteUser } from 'store/usersSlice/usersSlice'
import { closeModal } from "store/modalSlice/modalSlice"

import * as style from '../style.module.scss'

interface ModalDeletUserProps {
    user: User
}

export const ModalDeletUser = ({user}: ModalDeletUserProps) => {
    const dispatch = useDispatch()

    const handleDeletUser = () => {
        dispatch(deleteUser(user))
        dispatch(closeModal())
    }
    return <>
        <h2 className={style.header}>Удаление клиента <span className={style.id}>ID: {user.id}</span></h2> 
        <p className={style.deleteName}>{`${user.firstName} ${user.lastName} ${user.patronymic}`.trim()}</p>
        <Button onClick={handleDeletUser}>Удалить</Button>
    </>
} 