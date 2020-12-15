import React, { useState } from 'react';
import styles from './Img.module.scss';

const Img = ({ imgUrl, alt }) => {
    const [state, setState] = useState({
        loading: true
    })

    const imgLoadHandler = () => {
        setState(state => {
            return { ...state, loading: false }
        })
    }

    let { loading } = state;

    return (
        <div>
            { loading && <h2>Loading...</h2>}
            <img
                className={`${styles.DisplayNone} ${!loading && styles.Display}`}
                onLoad={imgLoadHandler}
                src={imgUrl}
                alt={alt && alt} />
        </div>
    )
}

export default Img
