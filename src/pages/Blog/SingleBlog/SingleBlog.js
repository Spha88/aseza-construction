import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import { getSinglePost } from '../../../lib/api';
import { formatDate } from '../../../lib/utils';
import Article from '../Article/Article';
import Blog from '../Blog';
import PostWidget from '../PostsWidget/PostWidget';
import styles from './SingleBlog.module.scss';

const SingleBlog = () => {

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const myPost = await getSinglePost(id);
      console.log(myPost);
      setPost(myPost);
      setLoading(false);
    }

    getPost();
  }, [id])

  if (loading) return <h2>Loading ...</h2>

  if (!post) return <h2>No post found</h2>

  return (
    <div className={styles.Blog}>
      <PageHeader label={post.title} backgroundImg={post.featuredImage.node.sourceUrl} />
      <div className={styles.Layout}>
        <main><Article post={post} /></main>
        <aside>
          <PostWidget />
        </aside>
      </div>
    </div>
  )
}

export default SingleBlog
