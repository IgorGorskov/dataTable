import { ChangeEvent, useState } from 'react'
import { Link } from 'components/User'
import * as style from './style.module.scss'

interface InputLinkProps {
    id: string,
    onChange: (id: string, value: Link) => void,
    link?: Link
}

export const LinkInput = ({id, onChange, link}: InputLinkProps) => {
    const [type, setType] = useState(link ? link.type : 'tel')
    const [text, setText] = useState(link ? link.text : '')

    const handleLinkChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setType(event.target.value)
        onChange(id, {type, text})
    }

    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
        onChange(id, {type, text})
    }

    return <div id={id} className={style.inputBox}>
        <select value={type} onChange={handleLinkChange}>
            <option value="" disabled>
                Выберите тип
            </option>
            <option value="tel">Телефон</option>
            <option value="email">Email</option>
            <option value="vk">VK</option>
        </select>
        <input 
            onChange={handleTextChange} 
            value={text}
            type="text" 
        />
    </div>
}