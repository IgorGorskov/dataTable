import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "components/User"

export enum MODALS_TYPE {
    CHANGE = "change",
    DELETE = "delete",
    ADD = "add"
}

type State = {
    isOpen: boolean,
    modalType?: MODALS_TYPE,
    user?: User
}

const initialState: State = {isOpen: false}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openAddModal: (state) => {
            state.isOpen = true
            state.modalType = MODALS_TYPE.ADD
        },
        openEditModal: (state, action: PayloadAction<User>) => {
            state.isOpen = true,
            state.user = action.payload,
            state.modalType = MODALS_TYPE.CHANGE
        },
        openDeleteModal: (state, action: PayloadAction<User>) => {
            state.isOpen = true,
            state.user = action.payload,
            state.modalType = MODALS_TYPE.DELETE
        },
        closeModal: (state) => {state.isOpen = false}
    }
})

export const {openAddModal, openEditModal, openDeleteModal, closeModal } = modalSlice.actions
export default modalSlice.reducer