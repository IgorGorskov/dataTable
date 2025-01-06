import { useState } from 'react'
import * as style from './style.module.scss'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { User } from '../../User'

interface ModalEditUserProps {
    user: User
}

export const ModalEditUser = ({user}:ModalEditUserProps) => {
    const [links, setLinks] = useState<String []>(user.links)
    
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
                    {links.map(link => <LinkInput/>)}
                    <button onClick={handleAddLink}>Добавить контакт</button>
                </div>
                <button>Сохранить</button>
            </form>
    </>
}