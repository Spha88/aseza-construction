import React, { useState, useEffect } from 'react';

import { getSinglePage } from '../../lib/api';
import styles from './Services.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Services from './ServicesComp/ServicesSection';
import WhyUs from '../../components/WhyUs/WhyUs';
import Loader from '../../components/UI/Loader/Loader';

const ServicesPage = () => {

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();

    useEffect(() => {
        const getPage = async () => {
            // TO-DO: handle what happens if the page is not found
            const myPage = await getSinglePage("services");
            setPage(myPage);
            setLoading(false);
            console.log(myPage);
        }

        getPage();

    }, [])

    return (
        <div className={styles.ServicesPage}>
            <PageHeader
                label={page && page.title}
                backgroundImg={page && page.featuredImage && page.featuredImage.node.sourceUrl} />

            <Services />

            <WhyUs />

            <Loader loading={loading} />
        </div>
    )
}

export default ServicesPage;
