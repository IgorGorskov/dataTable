import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addUser } from 'store/usersSlice'
import { closeModal } from 'store/modalSlice'

import { LinkInput } from 'components/ui/LinkInput/LinkInput'
import { emptyUser, Link, User } from 'components/User'
import { Button } from 'components/ui/Button/Button'

import * as style from '../style.module.scss'
import { useForm } from 'react-hook-form'

export const ModalAddUser = () => {
    const dispatch = useDispatch()
    const [links, setLinks] = useState<Link[]>([])
    const { register,
            handleSubmit,
            getValues,
            setValue,
            formState: { errors },
    } = useForm<User>({
        defaultValues: {
            id: '',
            lastName: '',
            firstName: '',
            patronymic: '',
            links: [],
        }
    })
    
    const handleAddLink = () => {
        const links = getValues('links')
        const newLinkArr = [...links, {type: 'tel', text: ''}]
        setLinks(newLinkArr)
        setValue('links', newLinkArr)
    }

    const handleLinkChange = (id: string, value: {text: string, type: string}) => {
        const links = getValues('links')
        const newLinkArr = links.map((item, index) => (index === +id ? value : item))
        setLinks(newLinkArr)
        setValue('links', newLinkArr)
    }

    const onSubmit =() => {
        const data = getValues()
        const newUser = {
            ...data,
            id: (Date.now() % 1000000 + Math.floor(Math.random() * 1000)) + '',
            changeDate: new Date(),
            createDate: new Date(),
        }
        dispatch(addUser(newUser))
        dispatch(closeModal())
    }

    return <>
        <h2 className={style.header}>Добавление клиента</h2>
        <form id='newUserForm' onSubmit={handleSubmit(onSubmit)}>
            <input {...register('lastName', {required: "Фамилия является обязательным полем"})} className={style.input} name='lastName' type="text" placeholder='Фамилия'/>
            <input {...register('firstName', {required: "Имя является обязательным полем"})} className={style.input} name='firstName' type="text" placeholder='Имя'/>
            <input {...register('patronymic', {required: "Отчество является обязательным полем"})} className={style.input} name='patronymic' type="text" placeholder='Отчество'/>
            <div className={style.linkBox}>
                {links.map((link, index) => <LinkInput id={String(index)} onChange={handleLinkChange}/>)}
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