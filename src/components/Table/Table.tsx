import { TableUserRow } from "../TableUserRow/TableUserRow"
import { RootState } from "store/store"
import { useDispatch, useSelector } from "react-redux"

import * as style from "./style.module.scss"
import { SORT_TYPE, sortUsers } from "store/usersSlice"

export const Table = () => {
    const users = useSelector((state: RootState) => state.users.filteredList)
    const dispatch = useDispatch()

    const handleClickID = () => {
        dispatch(sortUsers(SORT_TYPE.ID))
    }
    const handleClickName = () => {
        dispatch(sortUsers(SORT_TYPE.NAME))
    }
    const handleClickCreation = () => {
        dispatch(sortUsers(SORT_TYPE.CREATION_TIME))
    }
    const handleClickChange = () => {
        dispatch(sortUsers(SORT_TYPE.CHANGE_TIME))
    }

    return <div className={style.container}>
        <table className={style.table}>
            <thead className={style.tableHeader}>
                <tr>
                    <th onClick={handleClickID} className={style.idHead}>ID</th>
                    <th onClick={handleClickName} className={style.nameHead}>Фамилия Имя Отчество</th>
                    <th onClick={handleClickCreation} className={style.creationTimeHead}>Дата и время создания</th>
                    <th onClick={handleClickChange} className={style.changeTimeHead}>Последнее изменеимя</th>
                    <th className={style.contactsHead}>Контакты</th>
                    <th className={style.actionHead}>Действия</th>
                </tr>
            </thead>
            {users && <tbody className={style.tableBody}>
                {users.map(user => <TableUserRow key={user.id} user={user}/>)}
            </tbody>}
        </table>
    </div>
}