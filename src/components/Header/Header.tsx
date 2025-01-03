import { FC } from "react"
import * as style from './style.module.scss'
console.log('style:', style)

const Header: FC = () => {
    return <header className={style.header}>
        logo
        <input className={style.input}/>
    </header>
}

export default Header