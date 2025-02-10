import { User } from "../User"
import { Modal } from "../Modal/Modal"
import { ModalEditUser } from "../Modal/ModalEditUser/ModalEditUser"
import { useState } from "react"
import { ModalDeletUser } from "../Modal/ModalDeletUser/ModalDeletUser"
import * as style from './style.module.scss'
import { ContactLink } from "../ui/ContactLink/ContactLink"

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

    const [isEditUser, setIsEditUser] = useState<Boolean>(false)
    const [isDelUser, setIsDelUser] = useState<Boolean>(false)

    const handleEditButton = () => {
        setIsEditUser(true)
    }

    const handleDeletButton = () => {
        setIsDelUser(true)
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
            <td>
                <button onClick={handleEditButton}>Изменить</button>
                <button onClick={handleDeletButton}>Удалить</button>
            </td>
        </tr>
        {isEditUser && 
        <Modal handleClose={()=>{setIsEditUser(false)}}>
            <ModalEditUser user={user}/>
        </Modal>}
        {isDelUser && 
        <Modal handleClose={()=>{setIsDelUser(false)}}>
            <ModalDeletUser user={user}/>
        </Modal>}
    </>
}