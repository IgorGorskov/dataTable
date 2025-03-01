import { Modal } from '../Modal/Modal'
import { Table } from '../Table/Table'
import * as style from './style.module.scss' 
import { ModalAddUser } from '../Modal/ModalAddUser/ModalAddUser'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { MODALS_TYPE, openAddModal } from 'store/modalSlice'
import { ModalEditUser } from 'components/Modal/ModalEditUser/ModalEditUser'
import { ModalDeletUser } from 'components/Modal/ModalDeletUser/ModalDeletUser'

export const TableView = () => {
    const modalState = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    const handleAddButton = () => {
        dispatch(openAddModal())
    }

    return <main className={style.main}>
        <h1 className={style.title}>Клиенты</h1>
        <Table />
        <button onClick={handleAddButton} className={style.addUser}>Добавить клиента</button>
        {modalState.isOpen && 
        <Modal>
            {(modalState.modalType == MODALS_TYPE.ADD) && <ModalAddUser />}
            {(modalState.modalType == MODALS_TYPE.CHANGE && modalState.user) && <ModalEditUser user={modalState.user}/>}
            {(modalState.modalType == MODALS_TYPE.DELETE && modalState.user) && <ModalDeletUser user={modalState.user}/>}
        </Modal>}
    </main>
}