import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ArticleFooter.module.scss';

const ArticleFooter = () => {
    const { goBack } = useHistory();
    return (
        <footer className={styles.Footer}>
            <button onClick={goBack}>Back</button>
        </footer>
    )
}

export default ArticleFooter
