import React, { useState } from 'react';
import styles from './Img.module.scss';

const Img = ({ imgUrl, alt }) => {

    const [loading, setLoading] = useState(true)

    const imgLoadHandler = () => setLoading(false);

    return (
        <div className={styles.ImageContainer}>
            <img
                className={`${styles.DisplayNone} ${!loading && styles.Display}`}
                onLoad={imgLoadHandler}
                src={imgUrl}
                alt={alt && alt} />
            <div className={`${styles.SpinnerContainer} ${!loading && styles.CompleteLoad}`}>
                <div className={styles.Spinner}></div>
            </div>
        </div>
    )
}

export default Img
