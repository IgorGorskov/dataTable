import { ChangeEvent, FormEvent, useState } from 'react'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { emptyUser, Link, User } from '../../User'
import { useDispatch } from 'react-redux'
import { addUser } from 'store/usersSlice'
import { closeModal } from 'store/modalSlice'
import * as style from '../style.module.scss'
import { Button } from 'components/ui/Button/Button'

export const ModalAddUser = () => {
    const [links, setLinks] = useState<Link []>([])
    const [newUser, setNewUser] = useState<User>(emptyUser)
    const dispatch = useDispatch()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setNewUser((prevNewUser) => ({...prevNewUser, [name]: value}))
    }

    const handleLinkChange = (id: string, value: Link) => {
        const updateLinks = [...links]
        updateLinks[Number(id)] = value
        setLinks(updateLinks)
        setNewUser((prevNewUser) => ({...prevNewUser, links}))
    }
    
    const handleAddLink = () => {
        setLinks((prevLinks)=>[...prevLinks, {text: '', type: ''}])
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setNewUser((prevNewUser) => ({...prevNewUser, id: crypto.randomUUID(), changeDate: new Date(), createDate: new Date()}))
        dispatch(addUser(newUser))
        dispatch(closeModal())
    }

    return <>
        <h2 className={style.header}>Добавление клиента</h2>
        <form id='newUserForm' onSubmit={handleSubmit}>
            <input className={style.input} onChange={handleChange} name='lastName' type="text" placeholder='Фамилия'/>
            <input className={style.input} onChange={handleChange} name='firstName' type="text" placeholder='Имя'/>
            <input className={style.input} onChange={handleChange} name='patronymic' type="text" placeholder='Отчество'/>
            <div className={style.linkBox}>
                {links.map((link, index) => <LinkInput id={String(index)} onChange={handleLinkChange}/>)}
                <Button className={style.linkButton} onClick={handleAddLink} type="button">+ Добавить контакт</Button>
            </div>
            <Button className={style.addButton} type="submit">Сохранить</Button>
        </form>
    </>
}