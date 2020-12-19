import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { getProjects } from '../../lib/api';
import styles from './Projects.module.scss';
import PageHeader from '../../components/UI/PageHeader/PageHeader';
import Loader from '../../components/UI/Loader/Loader';
import { Zoom } from 'react-reveal';

const Projects = () => {

    const [state, setState] = useState({ loading: true, projects: [] })

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setState(state => ({ ...state, projects: projects, loading: false }))
        }

        fetchProjects();

        // Scroll to beginning of page if not at the top
        scroll.scrollToTop({ smooth: "easeOutElastic", delay: 500, duration: 1000 });

    }, [])

    const { loading, projects } = state;

    return (
        <div className={styles.ProjectsPage}>

            <PageHeader label="Projects"
                backgroundImg={projects[0] && projects[0].projectImages.image1.sourceUrl} />

            { !loading && (
                <div className={styles.Projects}>
                    {projects.map((project, index) => (
                        <Zoom fraction={0.1} key={project.slug}>
                            <div className={styles.Project}>
                                <div className={styles.ProjectImg}
                                    style={{ backgroundImage: `url(${project.projectImages.image1.sourceUrl})` }}>

                                    <div className={styles.DropShadow}></div>
                                    <div className={styles.Details}>
                                        <h2>{project.title}</h2>
                                        <h3>{project.projectDetails.subtitle}</h3>
                                        <Link to={`/projects/${project.slug}`}>
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            )}

            <Loader loading={loading} />
        </div>
    )
}

export default Projects;
