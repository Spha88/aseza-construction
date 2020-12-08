import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getSinglePage } from '../../lib/api';
import styles from './SinglePage.module.scss';
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
            const myPage = await getSinglePage(id);
            setPage(myPage);
            setLoading(false);
            // console.log(myPage);
        }

        getPage();

    }, [id])

    return (
        <div className={styles.SinglePage}>
            <PageHeader
                label={page && page.title}
                backgroundImg={page && page.featuredImage && page.featuredImage.node.sourceUrl} />

            { !loading &&
                <Container>
                    {page.featuredImage &&
                        <figure>
                            <img
                                src={page.featuredImage.node.sourceUrl}
                                alt={page.featuredImage.node.altText ? page.featuredImage.node.altText : ""} />

                            {page.featuredImage.node.caption && (
                                <figcaption dangerouslySetInnerHTML={{ __html: page.featuredImage.node.caption }} />
                            )}
                        </figure>
                    }
                    <div dangerouslySetInnerHTML={{ __html: page.content }} />
                    <footer>
                        <Link to="/">Back</Link>
                    </footer>
                </Container>
            }

            <Loader loading={loading} />
        </div>
    )
}

export default SinglePage
