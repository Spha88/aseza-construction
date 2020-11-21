import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../lib/api';

import BlogStyles from './Projects.module.scss';

const Projects = () => {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState();

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjects(projects);
            setLoading(false);
        }
        fetchProjects();
    }, [])

    if (loading) return <h2>Loading ...</h2>

    if (!projects) return <h2>No posts</h2>

    return (
        <div>
            <header>
                <h2>Projects</h2>
            </header>
            {projects.map(project => (

                <div key={project.slug} className={BlogStyles.Blog}>
                    <div>
                        <figure>
                            <img
                                src={project.projectImages.image1.sourceUrl}
                                alt={project.title}
                            />
                        </figure>
                    </div>
                    <div>
                        <h2>{project.title}</h2>
                        <Link to={`/projects/${project.slug}`}>
                            Read more
                        </Link>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Projects;
