import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Article.module.scss';
import { formatDate } from '../../../lib/utils';

const Article = ({ post }) => {
    return (
        <article className={styles.Article}>
            <div className={styles.FeaturedImg}
                style={{ backgroundImage: `url(${post.featuredImage.node.sourceUrl})` }}>

            </div>
            <h1 className={styles.Title}>{post.title}</h1>
            <div className={styles.MetaData}>
                <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>{formatDate(post.date)}</p>
            </div>
            <div
                className={styles.BlogContent}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </article>
    )
}

export default Article
