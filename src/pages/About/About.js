import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSinglePage } from '../../lib/api';
import styles from './About.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Container from '../../components/UI/Container';
import Loader from '../../components/UI/Loader/Loader';
import ServicesSection from './ServicesSection/ServicesSection';
import Team from './Team/Team';

const SinglePage = () => {

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();

    const { id } = useParams();

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
                    <header className={styles.AboutHeader}>
                        <h2>About Us</h2>
                    </header>
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

            <ServicesSection />

            <Team />

            <Loader loading={loading} />
        </div>
    )
}

export default SinglePage
