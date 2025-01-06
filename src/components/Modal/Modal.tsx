import * as style from './style.module.scss'
import CrossIcon from '../../assets/cross.svg'
import { ReactNode } from 'react'

interface ModalProps {
    children?: ReactNode
    handleClose: Function
}

export const Modal = ({children, handleClose}: ModalProps) => {
    return <div className={style.modalBack}>
        <div className={style.modalWindow}>
            <button className={style.closeButton} onClick={() => handleClose()}><CrossIcon/></button>
            {children}
        </div>
    </div>
}