import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePage } from '../../lib/api';
import styles from './SinglePage.module.scss';

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
            <h2 className={styles.PageTitle}>{page.title}</h2>

            { page.featuredImage &&
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
        </div>
    )
}

export default SinglePage
