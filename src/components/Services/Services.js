import React, { useState, useEffect } from 'react'
import { getFeaturedServices } from '../../lib/api';
import { removeTags, extractor } from '../../lib/utils';
import { Link } from 'react-router-dom';
import SectionLoader from '../../components/UI/SectionLoader/SectionLoader';
import Container from '../UI/Container';
import styles from './Services.module.scss';
import HeaderElement from '../UI/HeaderElement/HeaderElement';

const Services = () => {
    const [state, setState] = useState({
        loading: true,
        services: []
    })

    useEffect(() => {
        const fetchFeaturedServices = async () => {
            const featuredServices = await getFeaturedServices();
            setState(state => ({ ...state, loading: false, services: featuredServices }))
        }
        fetchFeaturedServices();
    }, [])

    const { loading, services } = state;

    return (
        <div className={styles.Services}>
            { !loading &&
                <Container>
                    <HeaderElement label="Our Services" />

                    <div className={styles.ServicesContainer}>
                        {services && services.map(service => (
                            <div className={styles.ServiceItem} style={{ backgroundImage: `url(${service.serviceImages.image1.sourceUrl})` }}>
                                <div className={styles.Bg}></div>
                                <Link to={`/services/${service.slug}`} className={styles.Content}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>

                                    <h3>{service.title}</h3>
                                    <p>{extractor(removeTags(service.content), 13)}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            }

            { loading &&
                <SectionLoader />
            }
        </div>
    )
}

export default Services
