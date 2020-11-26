import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArticleFooter.module.scss';

const ArticleFooter = ({ to, label }) => {
    return (
        <footer className={styles.Footer}>
            <Link to={to}>{label}</Link>
        </footer>
    )
}

export default ArticleFooter
