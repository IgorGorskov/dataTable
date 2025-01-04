import { TableUserRow } from "../TableUserRow/TableUserRow"
import { USERS_LIST } from "../User"
import * as style from "./style.module.scss"

export const Table = () => {
    return <div className={style.container}>
        <table className={style.table}>
            <thead className={style.tableHeader}>
                <tr>
                    <th>ID</th>
                    <th>Фамилия Имя Отчество</th>
                    <th>Дата и время создания</th>
                    <th>Последнее изменеимя</th>
                    <th>Контакты</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody className={style.tableBody}>
                {USERS_LIST.map(user => <TableUserRow key={user.id} user={user}/>)}
            </tbody>
        </table>
    </div>
}