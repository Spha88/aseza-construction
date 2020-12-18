import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSingleServicePageData } from '../../lib/api';
import { scrollToTop } from '../../lib/utils';
import styles from './SingleServicePage.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import ServicesWidget from '../../components/ServicesWidget/ServicesWidget'
import ContactDetailsWidget from '../../components/ContactDetailsWidget/ContactDetailsWidget';
import ArticleFooter from '../../components/UI/ArticleFooter/ArticleFooter';
import Loader from '../../components/UI/Loader/Loader';
import Img from '../../components/UI/Img/Img';

const SingleServicePage = () => {
    const { slug } = useParams();

    const [state, setState] = useState({
        loading: true,
        slug: slug,
        service: '',
        services: ''
    })

    useEffect(() => {
        const getPageData = async () => {
            const data = await getSingleServicePageData(slug);
            setState(state => {
                return {
                    ...state,
                    slug: slug,
                    service: data.service,
                    services: data.services.nodes,
                    loading: false
                }
            })
            scrollToTop();
        }
        getPageData();
    }, [slug])

    const { loading, service, services } = state;

    return (
        <div className={styles.SingleServicePage}>
            <PageHeader
                label="Services"
                singlePage={service && service.title}
                backgroundImg={service && service.serviceImages.image1.sourceUrl}
            />

            <div className={styles.Container}>
                <aside className={styles.Aside}>
                    <ServicesWidget services={services && services} />
                    <ContactDetailsWidget />
                </aside>
                <main className={styles.Main}>
                    {service && (
                        <React.Fragment>
                            <div className={styles.ServiceFeatureImage}>
                                <Img imgUrl={service.serviceImages.image1.sourceUrl} alt="service" />
                            </div>
                            <div className={styles.ServiceItemContent} dangerouslySetInnerHTML={{ __html: service.content }}></div>
                        </React.Fragment>
                    )}
                </main>
            </div>
            <ArticleFooter />

            <Loader loading={loading} />
        </div>
    )
}

export default SingleServicePage
