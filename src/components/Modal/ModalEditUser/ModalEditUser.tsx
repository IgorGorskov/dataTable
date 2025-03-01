import { ChangeEvent, FormEvent, useState } from 'react'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { User } from '../../User'
import { useDispatch } from 'react-redux'
import { changeUser } from 'store/usersSlice'

import * as style from './style.module.scss'
import { closeModal } from 'store/modalSlice'

interface ModalEditUserProps {
    user: User,
}

export const ModalEditUser = ({user}:ModalEditUserProps) => {
    const [links, setLinks] = useState<String []>([])
    const [newUser, setChangedUser] = useState<User>(user)
    const dispatch = useDispatch()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(changeUser(newUser))
        dispatch(closeModal())
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setChangedUser((prevNewUser) => ({...prevNewUser, [name]: value}))
    }
    
    const handleLinkChange = (id: string, value: {text: string, type: string}) => {
        setChangedUser((prevNewUser) => ({...prevNewUser, links: [...prevNewUser.links, value]}))
    }

    const handleAddLink = () => {
        setLinks((prevLinks)=>[...prevLinks, String(Date.now())])
    }

    return <>
        <h2>Изменение информации клиента</h2>
        <span>{user.id}</span>
        <form onSubmit={(event) => handleSubmit(event)}>
            <input type="text" onChange={handleChange} name='lastName' placeholder='Фамилия' value={newUser.lastName}/>
            <input type="text" onChange={handleChange} name='firstName' placeholder='Имя' value={newUser.firstName}/>
            <input type="text" onChange={handleChange} name='patronymic' placeholder='Отчество' value={newUser?.patronymic}/>
            <div className={style.linkBox}>
                {links.map((link, index) => <LinkInput id={String(index)} onChange={handleLinkChange}/>)}
                <button onClick={handleAddLink}>Добавить контакт</button>
            </div>
            <button type="submit">Сохранить</button>
        </form>
    </>
}