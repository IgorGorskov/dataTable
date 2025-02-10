import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { LinkInput } from '../../ui/LinkInput/LinkInput'
import { emptyUser, Link, User } from '../../User'
import * as style from './style.module.scss'

export const ModalAddUser = () => {
    const [links, setLinks] = useState<Link []>([])
    const [newUser, setNewUser] = useState<User>(emptyUser)

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
        console.log(newUser)
    }

    return <>
            <h2>Добавление клиента</h2>
            <form id='newUserForm' onSubmit={handleSubmit} action="https://jsonplaceholder.typicode.com/post" method="POST">
                <input onChange={handleChange} name='lastName' type="text" placeholder='Фамилия'/>
                <input onChange={handleChange} name='firstName' type="text" placeholder='Имя'/>
                <input onChange={handleChange} name='patronymic' type="text" placeholder='Отчество'/>
                <div className={style.linkBox}>
                    {links.map((link, index) => <LinkInput id={String(index)} onChange={handleLinkChange}/>)}
                    <button type="button" onClick={handleAddLink}>Добавить контакт</button>
                </div>
                <button type="submit">Сохранить</button>
            </form>
    </>
}