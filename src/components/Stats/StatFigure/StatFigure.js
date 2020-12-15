import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './StatFigure.module.scss';


const StatFigure = ({ figure, label }) => {
    const props = useSpring({ number: figure, from: { number: 0 } });
    return (

        <div className={styles.StatFigure}>
            <animated.h3>{props.number.interpolate(x => x.toFixed(0))}</animated.h3>
            <h5>{label}</h5>
        </div>

    )
}

export default StatFigure
