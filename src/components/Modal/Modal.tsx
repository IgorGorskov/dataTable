import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from 'store/modalSlice/modalSlice'
import CrossIcon from 'assets/cross.svg'

import * as style from './style.module.scss'

interface ModalProps {
    children?: ReactNode
}

export const Modal = ({children}: ModalProps) => {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeModal())
    }
    return <div className={style.modalBack}>
        <div className={style.modalWindow}>
            <button className={style.closeButton} onClick={() => handleClose()}><CrossIcon/></button>
            {children}
        </div>
    </div>
}