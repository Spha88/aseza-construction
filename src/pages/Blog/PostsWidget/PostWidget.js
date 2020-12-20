import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLatestPosts } from '../../../lib/api';
import { formatDate } from '../../../lib/utils';
import styles from './PostWidget.module.scss';


const PostWidget = () => {
    const [state, setState] = useState({
        posts: '',
        loading: true,
    })
    useEffect(() => {
        const fetchLatestPost = async () => {
            const posts = await getLatestPosts();
            setState(state => {
                return { ...state, posts: posts, loading: false }
            })
        }
        fetchLatestPost();
    }, [])

    const { posts, loading } = state;

    return (
        <div className={styles.PostWidget}>
            { loading ? (
                <h2>loading ...</h2>
            ) : (
                    <React.Fragment>
                        <h2 className={styles.Title}>Latest Posts</h2>
                        <ul className={styles.Posts}>
                            {posts.map(post => (
                                <li className={styles.Post} key={post.slug}>
                                    <Link to={`/news/${post.slug}`}>
                                        <div className={styles.FeaturedImg}
                                            style={{ backgroundImage: `url(${post.featuredImage.node.sourceUrl})` }}
                                        ></div>
                                        <div className={styles.Link}>
                                            <h4>

                                                {post.title}

                                            </h4>
                                            <h5>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {formatDate(post.date)}
                                            </h5>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                )
            }
        </div >
    )
}

export default PostWidget
