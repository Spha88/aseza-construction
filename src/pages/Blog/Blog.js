import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../../lib/api';

import BlogStyles from './Blog.module.scss';

const Blog = () => {

    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState();

    useEffect(() => {
        async function fetchPosts() {
            const myPosts = await getPosts();
            setPosts(myPosts);
            setLoading(false);
        }
        fetchPosts();
    }, [])

    if (loading) return <h2>Loading ...</h2>

    if (!posts) return <h2>No posts</h2>

    return (
        <div>
            <header>
                <Link to="/">Home</Link>
            </header>
            {posts.map(({ node }) => (

                <div key={node.id} className={BlogStyles.Blog}>
                    <div>
                        <figure>
                            <img
                                src={node.extraPostInfo.thumbImage.mediaItemUrl}
                                alt={node.title}
                            />
                        </figure>
                    </div>
                    <div>
                        <h2>{node.title}</h2>
                        <p>{node.extraPostInfo.authorExcerpt}</p>
                        <Link to={`/blog/${node.slug}`}>
                            Read more
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Blog;
