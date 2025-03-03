import { User } from "../../User"
import { useDispatch } from 'react-redux'
import { deleteUser } from 'store/usersSlice'
import { closeModal } from "store/modalSlice"
import { Button } from "components/ui/Button/Button"

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