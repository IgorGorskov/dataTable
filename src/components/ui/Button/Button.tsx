import { ReactNode } from "react"
import * as style from './style.module.scss' 
import classNames from "classnames"

interface ButtonProps{
    children?: ReactNode,
    onClick?: () => void,
    className?: string
    type?: "submit" | "button" | "reset"
}

export const Button = ({children, onClick, className, type} : ButtonProps) => {
    return <>
        <button
            type={type}
            className={classNames(style.button, className)}
            onClick={onClick}
        >
            {children}
        </button>
    </>
}