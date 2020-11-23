import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import Services from '../../components/Services/Services';
import Stats from '../../components/Stats/Stats';
import WhyUs from '../../components/WhyUs/WhyUs';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Hero />
            <Stats />
            <Services />
            <WhyUs />
            <ProjectsSection />
        </div>
    )
}

export default Home
