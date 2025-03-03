import { useEffect, useState } from 'react'
import * as style from './style.module.scss'
import TelIcon from 'assets/telephone.svg'
interface ContactLinkProps {
    link: string
}

export const ContactLink = ({link}:ContactLinkProps) => {
    const [isCopy, setIsCopy] = useState(false)
    useEffect(()=>{

    },
        [isCopy])
    const copy = (text: string) => {
        navigator.clipboard.writeText(text)
        console.log('copy text')
        setIsCopy(true);
        const timer = setTimeout(() => setIsCopy(false), 2000)
        return () => clearTimeout(timer)
    }

    return <div className={style.container}>
        <span className={style.icon} onClick={() => copy(link)}><TelIcon/></span>
        <div className={style.tooltip}>{link}</div>
        {isCopy && <div className={style.copyTooltip}>Ссылка скопирована</div>}
    </div>
}