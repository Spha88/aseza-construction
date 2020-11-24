import React from 'react';
import styles from './PageHeader.module.scss';

const PageHeader = ({ backgroundImg, label }) => {
    return (
        <header className={styles.Header} style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className={styles.BackDrop}></div>
            <h2>{label}</h2>
        </header>
    )
}

export default PageHeader
