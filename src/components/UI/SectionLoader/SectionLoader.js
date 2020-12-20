import React from 'react';
import styles from './SectionLoader.module.scss';

const SectionLoader = () => {
    return (
        <div className={styles.SectionLoader}>
            <div className={styles.Spinner}></div>
        </div>
    )
}

export default SectionLoader
