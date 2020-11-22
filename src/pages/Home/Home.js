import React from 'react';
import Hero from '../../components/Hero/Hero';
import Stats from '../../components/Stats/Stats';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Hero />
            <Stats />
        </div>
    )
}

export default Home
