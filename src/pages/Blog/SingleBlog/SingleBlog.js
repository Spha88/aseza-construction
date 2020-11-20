import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSinglePost } from '../../../lib/api';
import { formatDate } from '../../../lib/utils';

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
    <div>
      <header><h1>Single Blog page</h1></header>
      <article>
        <div>
          <h1 >{post.title}</h1>
          <p>{formatDate(post.date)}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <footer>
          <Link to="/blog">Back </Link>
        </footer>
      </article>
    </div>
  )
}

export default SingleBlog
