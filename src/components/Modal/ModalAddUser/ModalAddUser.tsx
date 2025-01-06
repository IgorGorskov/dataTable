import { useState } from 'react'
import * as style from './style.module.scss'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { User } from '../../User'

interface ModalAddUserProps {
    user?: User
}

export const ModalAddUser = ({user}:ModalAddUserProps) => {
    const [links, setLinks] = useState<String []>([])
    
    const handleAddLink = () => {
        setLinks((prevLinks)=>[...prevLinks, String(Date.now())])
    }
    return <>
            <h2>Добавление клиента</h2>
            <form action="">
                <input type="text" placeholder='Фамилия'/>
                <input type="text" placeholder='Имя'/>
                <input type="text" placeholder='Отчество'/>
                <div className={style.linkBox}>
                    {links.map(link => <LinkInput/>)}
                    <button onClick={handleAddLink}>Добавить контакт</button>
                </div>
                <button>Сохранить</button>
            </form>
    </>
}