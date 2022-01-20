import {FC} from 'react';
import styles from './app-header.module.css';
type THeaderItemProps={
    onClick:()=>void,
    text:string
}
const HeaderItem : FC<THeaderItemProps> =  (props)=>{     

    return(<div className="pl-5 pr-5 pt-4" onClick={props.onClick}>
    <span className={styles.nav}>
    {props.children}
    <p className="ml-2 text text_type_main-default">{props.text}</p>
    </span>
    </div>)
}
export default HeaderItem