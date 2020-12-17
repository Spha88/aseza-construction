import React from 'react';
import styles from './MenuIcon.module.scss';

const MenuIcon = ({ open, click }) => {
    return (
        <div className={`${styles.MenuIcon} ${open && styles.Open}`} onClick={click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MenuIcon
