import { useEffect, useState } from 'react'
import { Link } from 'components/User'
import TelIcon from 'assets/telephone.svg'
import MailIcon from 'assets/mail.svg'
import LinkIcon from 'assets/link.svg'
import VkIcon from 'assets/vk.svg'
import * as style from './style.module.scss'

interface ContactLinkProps {
    link: Link
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
        <span className={style.icon} onClick={() => copy(link.text)}>
            {link.type == 'email' && <MailIcon/>}
            {link.type == 'tel' && <TelIcon/>}
            {link.type == 'link' && <LinkIcon/>}
            {link.type == 'vk' && <VkIcon/>}
        </span>
        <div className={style.tooltip}>{link.text}</div>
        {isCopy && <div className={style.copyTooltip}>Ссылка скопирована</div>}
    </div>
}