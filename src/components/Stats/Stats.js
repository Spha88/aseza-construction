import React from 'react';
import Container from '../UI/Container';
import styles from './Stats.module.scss';
import bg from '../../assets/images/bg.jpg';

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
                            <div>
                                <h3>90</h3>
                                <h5>Projects Completed</h5>
                            </div>
                            <div>
                                <h3>20</h3>
                                <h5>Happy Clients</h5>
                            </div>
                            <div>
                                <h3>50</h3>
                                <h5>Won Awards</h5>
                            </div>
                            <div>
                                <h3>240</h3>
                                <h5>Engineer Employers</h5>
                            </div>
                        </div>
                    </div>
                    <div className={styles.Experience}>
                        <div className={styles.ContentContainer}>
                            <div className={styles.Background} style={{ backgroundImage: `url(${bg})` }}>
                            </div>
                            <div className={styles.Content}>

                                <h2>20</h2>
                                <h5>Years of experience in the industry</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Stats
