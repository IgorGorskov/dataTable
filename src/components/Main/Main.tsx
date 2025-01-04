import { Table } from '../Table/Table'
import * as style from './style.module.scss' 

export const Main = () => {
    return <main className={style.main}>
        <h1 className={style.title}>Клиенты</h1>
        <Table />
        <button className={style.addUser}>Добавить клиента</button>
    </main>
}