import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSingleServicePageData } from '../../lib/api';
import { scrollToTop } from '../../lib/utils';
import styles from './SingleServicePage.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import ServicesWidget from '../../components/ServicesWidget/ServicesWidget'
import ContactDetailsWidget from '../../components/ContactDetailsWidget/ContactDetailsWidget';

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
                    {service ? (
                        <React.Fragment>
                            <div className={styles.ServiceFeatureImage} style={{ backgroundImage: `url(${service.serviceImages.image1.sourceUrl})` }}>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: service.content }}></div>

                        </React.Fragment>
                    ) : (
                            <h2>Service loading ...</h2>
                        )}

                </main>
            </div>
        </div>
    )
}

export default SingleServicePage
