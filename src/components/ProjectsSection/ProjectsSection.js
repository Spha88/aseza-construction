import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectsSection.module.scss';
import HeaderElement from '../UI/HeaderElement/HeaderElement';
import SectionLoader from '../../components/UI/SectionLoader/SectionLoader';
import { getLatestProjects } from '../../lib/api';

const ProjectsSection = () => {

    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState();

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getLatestProjects();
            setProjects(projects);
            setLoading(false);
        }
        fetchProjects();
    }, [])

    return (
        <div className={styles.ProjectsSection}>
            <div className={styles.Container}>
                {!loading &&
                    <React.Fragment>
                        <HeaderElement label="Latest Projects" />
                        <div className={styles.Row}>
                            {projects && projects.map(project => (
                                <div className={styles.Project}
                                    key={project.slug}
                                    style={{ backgroundImage: `url(${project.projectImages.image1.sourceUrl})` }}>

                                    <div className={styles.ProjectContent}>

                                        <h3>{project.title}</h3>
                                        <h4>{project.projectDetails.subtitle}</h4>
                                        <div>
                                            <p>Description Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            <Link to={`/projects/${project.slug}`}>Read more</Link>
                                        </div>

                                    </div>
                                    <div className={styles.Curtain}></div>
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                }
                {loading && <SectionLoader />}
            </div>
        </div>
    )
}

export default ProjectsSection
