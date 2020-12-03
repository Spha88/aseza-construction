import React, { useEffect, useState } from 'react';
import styles from './BlogsFrontPage.module.scss';
import Container from '../UI/Container';
import HeaderElement from '../UI/HeaderElement/HeaderElement';
import { Link } from 'react-router-dom';
import { formatDate, shortenString } from '../../lib/utils';
import { getLatestPosts } from '../../lib/api';

const BlogsFrontPage = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();

    useEffect(() => {
        async function fetchPosts() {
            const myPosts = await getLatestPosts();
            setPosts(myPosts);
            setLoading(false);
        }
        fetchPosts();
    }, [])

    if (loading) return <h2>Loading ...</h2>

    if (!posts) return <h2>No posts</h2>

    return (
        <section className={styles.BlogsFrontPage}>
            <HeaderElement label="Latest News" />
            <Container>
                <div className={styles.Blogs}>
                    {posts.map(post => (
                        <div key={post.slug} className={styles.Blog}>
                            <div className={styles.FeatureImg} style={{ backgroundImage: `url(${post.featuredImage.node.sourceUrl})` }}>
                            </div>
                            <div className={styles.PostBody}>
                                <div className={styles.MetaData}>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {formatDate(post.date)}
                                    </p>
                                </div>
                                <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>


                                <Link to={`/blog/${post.slug}`}>
                                    <div className={styles.Excerpt} dangerouslySetInnerHTML={{ __html: shortenString(post.content, 100) }} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default BlogsFrontPage
