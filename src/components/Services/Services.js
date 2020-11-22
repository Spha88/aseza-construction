import React from 'react'
import Container from '../UI/Container';
import styles from './Services.module.scss';
import bg1 from '../../assets/images/service1.jpg';
import bg2 from '../../assets/images/service2.jpeg';
import bg3 from '../../assets/images/service3.jpg';
import HeaderElement from '../UI/HeaderElement.js/HeaderElement';

const Services = () => {
    return (
        <div className={styles.Services}>
            <Container>

                <HeaderElement label="Our Services" />

                <div className={styles.ServicesContainer}>
                    <div className={styles.ServiceItem} style={{ backgroundImage: `url(${bg1})` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>

                        <h3>Exterior Design</h3>
                        <p>Excepteur sint acc Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores?</p>
                    </div>
                    <div className={styles.ServiceItem} style={{ backgroundImage: `url(${bg2})` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                        <h3>Home Building</h3>
                        <p>Excepteur sint acc Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores?</p>
                    </div>
                    <div className={styles.ServiceItem} style={{ backgroundImage: `url(${bg3})` }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        <h3>Building Renovation</h3>
                        <p>Excepteur sint acc Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, asperiores?</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services
