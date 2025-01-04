import { User } from "../User"
import * as style from './style.module.scss'
import TelIcon from '../../assets/telephone.svg'

interface TableUserRowProps {
    user: User
}



export const TableUserRow = ({user} : TableUserRowProps) => {
    const createDay = String(user.createDate.getDate()).padStart(2, '0')
    const createMonth = String(user.createDate.getMonth() + 1).padStart(2, '0')
    const createYear = String(user.createDate.getFullYear())
    const createHours = String(user.createDate.getHours()).padStart(2, '0')
    const createMinutes = String(user.createDate.getMinutes()).padStart(2, '0')

    const formattedCreateDate = `${createDay}.${createMonth}.${createYear} `
    const formattedCreateTime = `${createHours}:${createMinutes}`

    const changeDay = String(user.changeDate.getDate()).padStart(2, '0')
    const changeMonth = String(user.changeDate.getMonth() + 1).padStart(2, '0')
    const changeYear = String(user.changeDate.getFullYear())
    const changeHours = String(user.changeDate.getHours()).padStart(2, '0')
    const changeMinutes = String(user.changeDate.getMinutes()).padStart(2, '0')

    const formattedChangeDate = `${changeDay}.${changeMonth}.${changeYear} `
    const formattedChangeTime = `${changeHours}:${changeMinutes}`

    return <tr className={style.userRow}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{formattedCreateDate}<span className={style.time}>{formattedCreateTime}</span></td>
        <td>{formattedChangeDate}<span className={style.time}>{formattedChangeTime}</span> </td>
        <td>{user.links.map(link => (<a key={link} href={link}><TelIcon/></a>))}</td>
        <td>
            <button>Изменить</button>
            <button>Удалить</button>
        </td>
    </tr>
}