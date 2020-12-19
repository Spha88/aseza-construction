import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import ArticleFooter from '../../../components/UI/ArticleFooter/ArticleFooter';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import { getSinglePost } from '../../../lib/api';
import Article from '../Article/Article';
import PostWidget from '../PostsWidget/PostWidget';
import ProjectsWidget from '../ProjectsWidget/ProjectsWidget';
import Loader from '../../../components/UI/Loader/Loader';
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
      scroll.scrollToTop({ smooth: "easeOutElastic", delay: 500, duration: 1000 });
    }
    getPost();
  }, [id])

  return (
    <div className={styles.Blog}>
      <PageHeader
        label="news" singlePage={post && post.title} backgroundImg={post && post.featuredImage.node.sourceUrl} />
      { !loading &&
        <div className={styles.Layout}>
          <main><Article post={post} /></main>
          <aside>
            <PostWidget />
            <ProjectsWidget />
          </aside>
        </div>
      }
      <ArticleFooter to="/news" label="Back" />
      <Loader loading={loading} />
    </div>
  )
}

export default SingleBlog
