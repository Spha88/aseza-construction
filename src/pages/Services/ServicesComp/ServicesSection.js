import React, { useState, useEffect } from 'react';
import styles from './ServicesSection.module.scss';

import { getServices } from '../../../lib/api';
import { shortenString } from '../../../lib/utils';


const ServicesSection = () => {
    const [state, setState] = useState({
        services: [],
        loading: true
    })

    const removeTags = (str) => {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();

        // Regular expression to identify HTML tags in  
        // the input string. Replacing the identified  
        // HTML tag with a null string. 
        return str.replace(/(<([^>]+)>)/ig, '');
    }

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
        <div className={styles.ServicesList}>
            <ul>
                {!loading && services.map(service => (
                    <li key={service.slug}>
                        <a href={`/page/services/${service.slug}`}>
                            <img src={service.serviceImages.image1.sourceUrl} alt="service" />
                            <h3>{service.title}</h3>
                            <div className={styles.Excerpt} dangerouslySetInnerHTML={{ __html: shortenString(removeTags(service.content), 80) }} />
                        </a>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesSection
