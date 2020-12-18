import React from 'react'
import styles from './CallToAction.module.scss';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className={styles.CallToAction}>
            <div className={styles.Container}>
                <div className={styles.Content}>
                    <h2>Engineer your dream with us.</h2>
                    <p>We construct buildings that define our time!</p>
                </div>
                <div>
                    <Link to="/page/contact" className={styles.CallToActionBtn}>GET A QUOTE</Link>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
