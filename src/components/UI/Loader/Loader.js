import React from 'react'
import styles from './Loader.module.scss'

const Loader = ({ loading }) => {
    return (
        <div className={`${styles.Loader} ${!loading && styles.CompleteLoading}`}>
            <div className={styles.Spinner}></div>
        </div>
    )
}

export default Loader 
