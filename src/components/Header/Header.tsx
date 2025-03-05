import { ChangeEvent, FC, useState } from "react"
import Logo from "assets/data_icon.svg"
import { useDispatch } from "react-redux"
import { searchUser } from "store/usersSlice/usersSlice"

import * as style from './style.module.scss'

export const Header: FC = () => {
    const [searchLine, setSearchLine] = useState<string>('')
    const dispatch = useDispatch()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value
        setSearchLine(newValue)
        dispatch(searchUser(newValue))
    }

    const handleBlur = () => {
        dispatch(searchUser(searchLine))
    }

    return <div className={style.wrapper}>
        <header className={style.header}>
            <a className={style.logo} href="#">
                <Logo className={style.img}/> 
                <span className={style.logoText}>DataTable</span>
            </a>
            <input 
                placeholder="поиск по имени"
                value={searchLine} 
                onChange={(event) => handleChange(event)}
                onBlur={handleBlur}
                className={style.input}
                />
        </header>
    </div>
}