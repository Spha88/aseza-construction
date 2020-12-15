import React from 'react';
import Container from '../UI/Container';
import styles from './Stats.module.scss';
import StatFigure from './StatFigure/StatFigure';
import ExperienceFrame from './ExperienceFrame/ExperienceFrame';

const Stats = () => {
    return (
        <div className={styles.Stats}>
            <Container>
                <div className={styles.Row}>
                    <div className={styles.Content}>
                        <h2>We Are Always Ready To Help You</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsam nostrum obcaecati architecto? Non, ipsum? Expedita eum reiciendis reprehenderit cum? </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum reiciendis reprehenderit cum? </p>

                        <div className={styles.StatsContainer}>
                            <StatFigure label="Project Completed" figure={90} />
                            <StatFigure label="Happy Clients" figure={20} />
                            <StatFigure label="Won Awards" figure={50} />
                            <StatFigure label="Engineer Employers" figure={240} />
                        </div>
                    </div>
                    <div className={styles.Experience}>
                        <ExperienceFrame />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Stats
