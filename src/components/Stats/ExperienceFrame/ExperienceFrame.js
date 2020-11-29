import React from 'react';
import styles from './ExperienceFrame.module.scss';
import bg from '../../../assets/images/bg.jpg';

const ExperienceFrame = () => {
    return (
        <div className={styles.ContentContainer}>
            <div className={styles.Background} style={{ backgroundImage: `url(${bg})` }}>
            </div>
            <div className={styles.Content}>

                <h2>20</h2>
                <h5>Years of experience in the industry</h5>

            </div>
        </div>
    )
}

export default ExperienceFrame
