import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            Home Page
            <Link to="/blog">
                view blog
            </Link>
        </div>
    )
}

export default Home
