import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { MODALS_TYPE, openAddModal } from 'store/modalSlice/modalSlice'
import { Modal } from 'components/Modal/Modal'
import { Table } from 'components/Table/Table'
import { ModalAddUser } from 'components/Modal/ModalAddUser/ModalAddUser'
import { ModalEditUser } from 'components/Modal/ModalEditUser/ModalEditUser'
import { ModalDeletUser } from 'components/Modal/ModalDeletUser/ModalDeletUser'
import { Button } from 'components/ui/Button/Button'
import * as style from './style.module.scss' 

export const TableView = () => {
    const modalState = useSelector((state: RootState) => state.modal)
    const dispatch = useDispatch()

    const handleAddButton = () => {
        dispatch(openAddModal())
    }

    return <main className={style.main}>
        <h1 className={style.title}>Клиенты</h1>
        <Table />

        <Button
            className={style.addUser}
            onClick={handleAddButton}
        >
            Добавить клиента
        </Button>
        {modalState.isOpen && 
        <Modal>
            {(modalState.modalType == MODALS_TYPE.ADD) && <ModalAddUser />}
            {(modalState.modalType == MODALS_TYPE.CHANGE && modalState.user) && <ModalEditUser user={modalState.user}/>}
            {(modalState.modalType == MODALS_TYPE.DELETE && modalState.user) && <ModalDeletUser user={modalState.user}/>}
        </Modal>}
    </main>
}