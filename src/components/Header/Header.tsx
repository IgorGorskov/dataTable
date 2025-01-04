import { FC } from "react"
import * as style from './style.module.scss'
import logo from "../../assets/data_icon.svg"

const Header: FC = () => {
    return <div className={style.wrapper}>
        <header className={style.header}>
            <a className={style.logo} href="#">
                <img className={style.img} src={logo}/> 
                <span className={style.logoText}>DataTable</span>
            </a>
            <input className={style.input}/>
        </header>
    </div>
}

export default Header