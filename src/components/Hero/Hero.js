import React from 'react';
import styles from './Hero.module.scss';
import HeroSlide from './HeroSlide/HeroSlide';

const Hero = () => {
    return (
        <div className={styles.Hero}>
            <div className={styles.HeroContent}>
                <HeroSlide />
            </div>
        </div>
    )
}

export default Hero
