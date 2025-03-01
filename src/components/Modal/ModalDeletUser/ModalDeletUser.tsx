import { store } from "store/store"
import { User } from "../../User"
import { useDispatch } from 'react-redux'
import { deleteUser } from 'store/usersSlice'
import { closeModal } from "store/modalSlice"

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
        <h2>Удаление клиента</h2>
        <span>{user.id}</span>
        <button onClick={handleDeletUser}>Удалить</button>
    </>
} 