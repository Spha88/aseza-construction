import React, { useState, useEffect } from 'react';
import styles from './ServicesSection.module.scss';

import { getServices } from '../../../lib/api';


const ServicesSection = () => {
    const [state, setState] = useState({
        services: [],
        loading: true
    })

    useEffect(() => {
        const fetchServices = async () => {
            const services = await getServices();
            setState(state => {
                return {
                    ...state,
                    services: services,
                    loading: false
                }
            })
        }

        fetchServices();
    }, [])

    const { services, loading } = state;

    return (
        <div className={styles.Services}>
            <div className={styles.Lead}>
                <div>
                    <h2>Our Services</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sit quasi, facere expedita, tempore animi blanditiis adipisci minima obcaecati consequuntur ea quisquam, natus saepe rem modi iusto.
                    </p>
                </div>
            </div>
            <div className={styles.ServicesList}>

                <ul>
                    {!loading && services.map(service => (
                        <li key={service.slug}>
                            <a href={`/services/${service.slug}`}>
                                <img src={service.serviceImages.image1.sourceUrl} alt="service" />
                                <span>{service.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServicesSection
