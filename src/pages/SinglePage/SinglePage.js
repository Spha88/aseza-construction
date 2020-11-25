import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePage } from '../../lib/api';
import styles from './SinglePage.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Container from '../../components/UI/Container';

const SinglePage = () => {

    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState();

    const { id } = useParams();

    useEffect(() => {
        const getPage = async () => {
            const myPage = await getSinglePage(id);
            setPage(myPage);
            setLoading(false);
            // console.log(myPage);
        }

        getPage();

    }, [id])

    if (loading) return <h2>Loading ...</h2>

    return (
        <div className={styles.SinglePage}>
            <PageHeader
                label={page.title}
                backgroundImg={page.featuredImage && page.featuredImage.node.sourceUrl} />

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
        </div>
    )
}

export default SinglePage
