import * as style from './style.module.scss'
export const LinkInput = () => {
    return <div className={style.inputBox}>
        <datalist>
            <option value="tel">Телефон</option>
            <option value="email">Email</option>
        </datalist>
        <input type="text" />
    </div>
}