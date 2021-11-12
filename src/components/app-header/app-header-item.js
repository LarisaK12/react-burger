import React from 'react';
import styles from './app-header.module.css';
class HeaderItem extends React.Component{
render(){
    return<div className="pl-5 pr-5 pt-4">
        <nobr className={styles.nav}>
    {this.props.children}

    <p className="ml-2 text text_type_main-default">{this.props.text}</p>
    </nobr>
    </div>
}

}
export default HeaderItem