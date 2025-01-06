import * as style from './style.module.scss'
import TelIcon from '../../../assets/telephone.svg'
interface ContactLinkProps {
    link: string
}

export const ContactLink = ({link}:ContactLinkProps) => {
    return <div className={style.container}>
        <span className={style.icon}><TelIcon/></span>
        <div className={style.tooltip}>{link}</div>
    </div>
}