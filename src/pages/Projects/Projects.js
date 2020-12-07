import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../lib/api';
import bg from '../../assets/images/slide3.jpg';

import styles from './Projects.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Loader from '../../components/UI/Loader/Loader';

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

    return (
        <div className={styles.ProjectsPage}>

            <PageHeader label="Projects" backgroundImg={bg} />

            { !loading && (
                <div className={styles.Projects}>
                    {projects.map(project => (
                        <div
                            key={project.slug}
                            className={styles.Project}>

                            <div className={styles.ProjectImg}
                                style={{ backgroundImage: `url(${project.projectImages.image1.sourceUrl})` }}>

                                <div className={styles.DropShadow}></div>
                                <div className={styles.Details}>
                                    <h2>{project.title}</h2>
                                    <h3>{project.projectDetails.subtitle}</h3>
                                    <Link to={`/projects/${project.slug}`}>
                                        details
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Loader loading={loading} />
        </div>
    )
}

export default Projects;
