import { ReactNode } from "react"
import * as style from './style.module.scss' 
import classNames from "classnames"

interface ButtonProps{
    children?: ReactNode,
    onClick?: () => void,
    className?: string
}

export const Button = ({children, onClick, className} : ButtonProps) => {
    return <>
        <div>
            <button
                className={classNames(style.button, className)}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    </>
}