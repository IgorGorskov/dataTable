import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { Table } from '../Table/Table'
import * as style from './style.module.scss' 
import { ModalAddUser } from '../Modal/ModalAddUser/ModalAddUser'
import { ContactLink } from '../ui/ContactLink/ContactLink'

export const Main = () => {
    const [isNewUser, setIsNewUser] = useState<Boolean>(false)
    const handleAddButton = () => {
        setIsNewUser(true)
    }
    const handleClose = () => {
        setIsNewUser(false)
    }

    return <main className={style.main}>
        <h1 className={style.title}>Клиенты</h1>
        <Table />
        <button onClick={handleAddButton} className={style.addUser}>Добавить клиента</button>
        {isNewUser && 
        <Modal handleClose={handleClose}>
            <ModalAddUser/>
        </Modal>}
    </main>
}