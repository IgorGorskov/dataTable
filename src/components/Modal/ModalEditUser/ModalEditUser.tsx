import { ChangeEvent, FormEvent, useState } from 'react'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { Link, User } from '../../User'
import { useDispatch } from 'react-redux'
import { changeUser } from 'store/usersSlice'

import * as style from '../style.module.scss'
import { closeModal } from 'store/modalSlice'
import { Button } from 'components/ui/Button/Button'

interface ModalEditUserProps {
    user: User,
}

export const ModalEditUser = ({user}:ModalEditUserProps) => {
    const [links, setLinks] = useState<Link []>(user.links)
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
        setLinks((prevLinks)=>[...prevLinks, {type: '', text: ''}])
    }

    return <>
        <h2 className={style.header}>Изменение информации клиента <span className={style.id}><br/> ID: {user.id}</span></h2>
        
        <form onSubmit={(event) => handleSubmit(event)}>
            <input className={style.input} type="text" onChange={handleChange} name='lastName' placeholder='Фамилия' value={newUser.lastName}/>
            <input className={style.input} type="text" onChange={handleChange} name='firstName' placeholder='Имя' value={newUser.firstName}/>
            <input className={style.input} type="text" onChange={handleChange} name='patronymic' placeholder='Отчество' value={newUser?.patronymic}/>
            <div className={style.linkBox}>
                {links.map((link, index) => <LinkInput link={link} id={String(index)} onChange={handleLinkChange}/>)}
                <Button className={style.linkButton} onClick={handleAddLink} type="button">+ Добавить контакт</Button>
            </div>
            <Button className={style.addButton} type="submit">Сохранить</Button>
        </form>
    </>
}