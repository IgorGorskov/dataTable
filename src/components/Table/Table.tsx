import { TableUserRow } from "../TableUserRow/TableUserRow"
import { RootState } from "store/store"
import { useDispatch, useSelector } from "react-redux"
import { SORT_TYPE, sortUsers } from "store/usersSlice"
import SortArrow from "assets/sortArrow.svg"
import classNames from "classnames"
import { ORDERS } from "store/types"
import * as style from "./style.module.scss"

export const Table = () => {
    const users = useSelector((state: RootState) => state.users.filteredList)
    const currentSort = useSelector((state: RootState) => state.users.currentSort)
    const currentOrder = useSelector((state: RootState) => state.users.sortOrder)
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
                    <th 
                        onClick={handleClickID} 
                        className={classNames(style.idHead, currentSort == SORT_TYPE.ID && style.active)}
                        >
                            <span className={style.text}>ID</span> {currentSort == SORT_TYPE.ID && <SortArrow className={currentOrder == ORDERS.ASC ? style.upArrow : style.downArrow}/>}
                    </th>
                    <th 
                        onClick={handleClickName} 
                        className={classNames(style.nameHead, currentSort == SORT_TYPE.NAME && style.active)}>
                            <span className={style.text}>Фамилия Имя Отчество</span> {currentSort == SORT_TYPE.NAME && <SortArrow className={currentOrder == ORDERS.ASC ? style.upArrow : style.downArrow}/>}
                    </th>
                    <th 
                        onClick={handleClickCreation} 
                        className={classNames(style.creationTimeHead, currentSort == SORT_TYPE.CREATION_TIME && style.active)}>
                            <span className={style.text}>Дата и время создания</span> {currentSort == SORT_TYPE.CREATION_TIME && <SortArrow className={currentOrder == ORDERS.ASC ? style.upArrow : style.downArrow}/>}
                    </th>
                    <th 
                        onClick={handleClickChange} 
                        className={classNames(style.changeTimeHead, currentSort == SORT_TYPE.CHANGE_TIME && style.active)}>
                            <span className={style.text}>Последнее изменеимя</span>{currentSort == SORT_TYPE.CHANGE_TIME && <SortArrow className={currentOrder == ORDERS.ASC ? style.upArrow : style.downArrow}/>}
                    </th>
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