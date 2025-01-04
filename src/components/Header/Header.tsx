import { FC } from "react"
import * as style from './style.module.scss'
import Logo from "../../assets/data_icon.svg"

export const Header: FC = () => {
    return <div className={style.wrapper}>
        <header className={style.header}>
            <a className={style.logo} href="#">
                <Logo className={style.img}/> 
                <span className={style.logoText}>DataTable</span>
            </a>
            <input className={style.input}/>
        </header>
    </div>
}