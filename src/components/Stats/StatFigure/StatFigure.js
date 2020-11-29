import React from 'react';
import styles from './StatFigure.module.scss';

const StatFigure = ({ figure, label }) => {
    return (
        <div className={styles.StatFigure}>
            <h3>{figure}</h3>
            <h5>{label}</h5>
        </div>
    )
}

export default StatFigure
