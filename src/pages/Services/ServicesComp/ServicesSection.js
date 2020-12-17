import React, { useState, useEffect } from 'react';
import styles from './ServicesSection.module.scss';

import { getServices } from '../../../lib/api';
import { shortenString, removeTags } from '../../../lib/utils';


const ServicesSection = () => {
    const [state, setState] = useState({
        services: [],
        numberOfImagesLoading: 0,
        loading: true
    })

    useEffect(() => {
        const fetchServices = async () => {
            const services = await getServices();
            setState(state => {
                return {
                    ...state,
                    services: services,
                    numberOfImagesLoading: services.length
                }
            })
        }

        fetchServices();
    }, [])

    const imgLoadHandler = (e) => {
        console.dir(e.target.complete);
        if (e.target.complete) {
            setState(state => {
                return {
                    ...state,
                    numberOfImagesLoading: state.numberOfImagesLoading - 1
                }
            })
        }
    }

    const { services, numberOfImagesLoading } = state;

    return (
        <div className={styles.ServicesList}>
            <ul>
                {services && services.map(service => (
                    <li key={service.slug}>
                        <a href={`/services/${service.slug}`}>
                            <img
                                onLoad={imgLoadHandler}
                                src={service.serviceImages.image1.sourceUrl} alt="Service" />
                            <h3>{service.title}</h3>
                            <div
                                className={styles.Excerpt}
                                dangerouslySetInnerHTML={{ __html: shortenString(removeTags(service.content), 80) }} />
                        </a>
                    </li>
                ))}
            </ul>
            {
                numberOfImagesLoading ?
                    <div className={styles.Loading}>
                        loading...
                    </div> : ''
            }
        </div>
    )
}

export default ServicesSection
