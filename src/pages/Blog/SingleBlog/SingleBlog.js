import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArticleFooter from '../../../components/UI/ArticleFooter/ArticleFooter';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import { getSinglePost } from '../../../lib/api';
import Article from '../Article/Article';
import PostWidget from '../PostsWidget/PostWidget';
import ProjectsWidget from '../ProjectsWidget/ProjectsWidget';
import styles from './SingleBlog.module.scss';

const SingleBlog = () => {

  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const myPost = await getSinglePost(id);
      setPost(myPost);
      setLoading(false);
    }

    getPost();
  }, [id])

  if (loading) return <h2>Loading ...</h2>

  if (!post) return <h2>No post found</h2>

  return (
    <div className={styles.Blog}>
      <PageHeader label="news" singlePage={post.title} backgroundImg={post.featuredImage.node.sourceUrl} />
      <div className={styles.Layout}>
        <main><Article post={post} /></main>
        <aside>
          <PostWidget />
          <ProjectsWidget />
        </aside>
      </div>
      <ArticleFooter to="/blog" label="Back" />
    </div>
  )
}

export default SingleBlog
