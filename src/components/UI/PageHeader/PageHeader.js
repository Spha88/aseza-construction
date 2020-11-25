import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './PageHeader.module.scss';

const PageHeader = ({ backgroundImg, label, singlePage }) => {

    const location = useLocation();
    const pathArr = location.pathname.split("/");

    let parentPage = pathArr[1];
    if (pathArr[1] === "page") {
        parentPage = `${parentPage}/${pathArr[2]}`
    }
    const childPage = pathArr[1] === "page" ? null : pathArr[2];


    return (
        <header className={styles.Header} style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className={styles.BackDrop}></div>
            <h2>{label}</h2>
            <ul>
                <li><Link to="/">Home</Link>/</li>
                <li><Link to={`/${parentPage}`}>{label}</Link></li>
                {childPage && (<li>/<Link to={`/${parentPage}/${childPage}`}>{singlePage}</Link></li>)}
            </ul>
        </header>
    )
}

export default PageHeader
