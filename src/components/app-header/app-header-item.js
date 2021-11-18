import React from 'react';
import PropTypes from 'prop-types';
import styles from './app-header.module.css';
function HeaderItem(props){     

    return(<div className="pl-5 pr-5 pt-4" onClick={props.onClick}>
        <nobr className={styles.nav}>
    {props.children}
    <p className="ml-2 text text_type_main-default">{props.text}</p>
    </nobr>
    </div>)
}
HeaderItem.propTypes={
    text:PropTypes.string,
    children:PropTypes.any,
    onClick:PropTypes.func
}
export default HeaderItem