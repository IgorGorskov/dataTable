import { useDispatch } from "react-redux"
import { User } from "components/User"
import { Button } from "components/ui/Button/Button"
import { ContactLink } from "components/ui/ContactLink/ContactLink"
import { openEditModal, openDeleteModal } from "store/modalSlice"

import * as style from './style.module.scss'

interface TableUserRowProps {
    user: User
}

export const TableUserRow = ({user} : TableUserRowProps) => {
    const createDay = String(user.createDate.getDate()).padStart(2, '0')
    const createMonth = String(user.createDate.getMonth() + 1).padStart(2, '0')
    const createYear = String(user.createDate.getFullYear())
    const createHours = String(user.createDate.getHours()).padStart(2, '0')
    const createMinutes = String(user.createDate.getMinutes()).padStart(2, '0')

    const formattedCreateDate = `${createDay}.${createMonth}.${createYear} `
    const formattedCreateTime = `${createHours}:${createMinutes}`

    const changeDay = String(user.changeDate.getDate()).padStart(2, '0')
    const changeMonth = String(user.changeDate.getMonth() + 1).padStart(2, '0')
    const changeYear = String(user.changeDate.getFullYear())
    const changeHours = String(user.changeDate.getHours()).padStart(2, '0')
    const changeMinutes = String(user.changeDate.getMinutes()).padStart(2, '0')

    const formattedChangeDate = `${changeDay}.${changeMonth}.${changeYear} `
    const formattedChangeTime = `${changeHours}:${changeMinutes}`

    const dispatch = useDispatch()

    const handleEditButton = () => {
        dispatch(openEditModal(user))
    }

    const handleDeletButton = () => {
        dispatch(openDeleteModal(user))
    }

    return <>
        <tr className={style.userRow}>
            <td>{user.id}</td>
            <td>
                {`${user.lastName} ${user.firstName} ${user.patronymic}`}
            </td>
            <td>
                {formattedCreateDate}
                <span className={style.time}>{formattedCreateTime}</span>
            </td>
            <td>
                {formattedChangeDate}
                <span className={style.time}>{formattedChangeTime}</span> 
            </td>
            <td>
                {user.links.map(link => (<ContactLink key={link.text} link={link.text}/>))}
            </td>
            <td className={style.buttons}>
                <Button onClick={handleEditButton}>Изменить</Button>
                <Button onClick={handleDeletButton}>Удалить</Button>
            </td>
        </tr>
    </>
}