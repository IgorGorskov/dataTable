import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import * as style from './style.module.scss'

interface InputLinkProps {
    id: string,
    onChange: (id: string, value: {text: string, type: string}) => void,
}

enum LinkTypes {

}

export const LinkInput = ({id, onChange}: InputLinkProps) => {
    const [type, setType] = useState('')
    const [text, setText] = useState('')

    const handleLinkChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value)
        onChange(id, {type, text})
    }

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        onChange(id, {type, text})
    }

    return <div id={id} className={style.inputBox}>
        <select onChange={handleLinkChange}>
            <option value="" disabled>
                Выберите тип
            </option>
            <option value="tel">Телефон</option>
            <option value="email">Email</option>
        </select>
        <input 
            onChange={handleTextChange} 
            value={text}
            type="text" 
        />
    </div>
}