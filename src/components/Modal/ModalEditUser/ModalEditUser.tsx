import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { closeModal } from 'store/modalSlice'
import { changeUser } from 'store/usersSlice'

import { LinkInput } from 'components/ui/LinkInput/LinkInput'
import { Link, User } from 'components/User'
import { Button } from 'components/ui/Button/Button'

import * as style from '../style.module.scss'
import { useForm } from 'react-hook-form'

interface ModalEditUserProps {
    user: User,
}

export const ModalEditUser = ({user}:ModalEditUserProps) => {
    const [links, setLinks] = useState<Link []>(user.links)
    const dispatch = useDispatch()

    const {
        handleSubmit,
        setValue,
        getValues,
        register,
        formState: {errors}
    } = useForm<User>({defaultValues: user})

    const onSubmit = () => {
        const data = getValues()
        const newUser = {
            ...data,
            changeDate: new Date(),
        }
        dispatch(changeUser({...newUser, changeDate: new Date()}))
        dispatch(closeModal())
    }
    
    const handleLinkChange = (id: string, value: {text: string, type: string}) => {
        const links = getValues('links')
        const newLinkArr = links.map((item, index) => (index === +id ? value : item))
        setValue('links', newLinkArr)
    }

    const handleAddLink = () => {
        const links = getValues('links')
        const newLink = {text: '', type: 'tel'}
        setLinks((prevLinks) => [...prevLinks, newLink])
        const newLinkArr = [...links, newLink]
        setValue('links', newLinkArr)
    }

    return <>
        <h2 className={style.header}>Изменение информации клиента <span className={style.id}><br/> ID: {user.id}</span></h2>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className={style.input} {...register('lastName', {required: 'Фамилия является обязательным полем'})} type="text" name='lastName' placeholder='Фамилия' />
            <input className={style.input} {...register('firstName', {required: 'Имя является обязательным полем'})} type="text" name='firstName' placeholder='Имя' />
            <input className={style.input} {...register('patronymic', {required: 'Отчество является обязательным полем'})} type="text" name='patronymic' placeholder='Отчество'/>
            <div className={style.linkBox}>
                {links.map((link, index) => <LinkInput link={link} id={String(index)} onChange={handleLinkChange}/>)}
                <Button className={style.linkButton} onClick={handleAddLink} type="button">+ Добавить контакт</Button>
            </div>
            <div>
                {errors && <p className={style.error}>{errors.firstName?.message}</p>}
                {errors && <p className={style.error}>{errors.lastName?.message}</p>}
                {errors && <p className={style.error}>{errors.patronymic?.message}</p>}
            </div>
            <Button className={style.addButton} type="submit">Сохранить</Button>
        </form>
    </>
}