import { ChangeEvent, useState } from 'react'
import * as style from './style.module.scss'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { emptyUser, User } from '../../User'

interface ModalEditUserProps {
    user: User
}

export const ModalEditUser = ({user}:ModalEditUserProps) => {
    const [links, setLinks] = useState<String []>([])
    const [changedUser, setChangedUser] = useState<User>(user)

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
            <form action="">
                <input type="text" placeholder='Фамилия' value={user?.lastName}/>
                <input type="text" placeholder='Имя' value={user?.firstName}/>
                <input type="text" placeholder='Отчество' value={user?.patronymic}/>
                <div className={style.linkBox}>
                    {links.map((link, index) => <LinkInput id={String(index)} onChange={handleLinkChange}/>)}
                    <button onClick={handleAddLink}>Добавить контакт</button>
                </div>
                <button>Сохранить</button>
            </form>
    </>
}