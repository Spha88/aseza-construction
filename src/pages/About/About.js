import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSinglePage } from '../../lib/api';
import styles from './About.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Container from '../../components/UI/Container';
import Loader from '../../components/UI/Loader/Loader';

const SinglePage = () => {

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();

    const { id } = useParams();

    console.log(id);

    useEffect(() => {
        const getPage = async () => {
            // TO-DO: handle what happens if the page is not found
            const myPage = await getSinglePage("about-page");
            setPage(myPage);
            setLoading(false);
            // console.log(myPage);
        }

        getPage();

    }, [id])

    return (
        <div className={styles.AboutPage}>
            <PageHeader
                label={page && page.title}
                backgroundImg={page && page.featuredImage && page.featuredImage.node.sourceUrl} />

            { !loading &&
                <Container>
                    <div className={styles.AboutContent}>
                        <div className={styles.AboutParagraph}>
                            <div dangerouslySetInnerHTML={{ __html: page.content }} />
                            <div className={styles.Signature}>

                                <div className={styles.SignatureImg}></div>
                                <h3>Mr Sipho Ntozakhe</h3>
                                <h5>CED of Aseza PM</h5>
                            </div>
                        </div>
                        <div className={styles.AboutFeatureImg}>
                            <div
                                className={styles.Img}
                                style={{ backgroundImage: `url(${page.featuredImage.node.sourceUrl})` }}
                            >
                            </div>
                        </div>
                    </div>
                </Container>
            }

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
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span>Construction</span></li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg><span>Painting</span></li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg><span>Remodeling</span></li>
                        <li>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg><span>Refurbishment</span></li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg><span>Hardwood flooring</span></li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg><span>House extensions</span></li>
                    </ul>
                </div>
            </div>

            <Loader loading={loading} />
        </div>
    )
}

export default SinglePage
