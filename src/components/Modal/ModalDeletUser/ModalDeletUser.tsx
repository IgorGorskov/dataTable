import { User } from "../../User"

interface ModalDeletUserProps {
    user: User
}

export const ModalDeletUser = ({user}: ModalDeletUserProps) => {
    return <>
        <h2>Удаление клиента</h2>
        <span>{user.id}</span>
        <button>Удалить</button>
    </>
} 