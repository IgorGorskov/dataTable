import { TableUserRow } from "../TableUserRow/TableUserRow"
import { RootState } from "store/store"
import { useSelector } from "react-redux"

import * as style from "./style.module.scss"

export const Table = () => {
    const users = useSelector((state: RootState) => state.users.UserList)

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
            {users && <tbody className={style.tableBody}>
                {users.map(user => <TableUserRow key={user.id} user={user}/>)}
            </tbody>}
        </table>
    </div>
}