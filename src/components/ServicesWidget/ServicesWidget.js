import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ServicesWidget.module.scss';

const ServicesWidget = ({ services }) => {
    return (
        <div className={styles.ServicesWidget}>
            <h3>All Services</h3>
            <ul className={styles.ServiceList}>
                {services && services.map(service => (
                    <li key={service.slug}>
                        <NavLink activeClassName={styles.Active} to={`/services/${service.slug}`}>{service.title}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ServicesWidget
