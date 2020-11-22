import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderElement.module.scss';

const HeaderElement = ({ label }) => {
    return (
        <header className={styles.Header}>
            <h2>{label}</h2>
        </header>
    )
}

HeaderElement.propType = {
    label: PropTypes.string
}

export default HeaderElement
