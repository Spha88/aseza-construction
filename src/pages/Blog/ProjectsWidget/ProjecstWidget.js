import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLatestProjectsForWidget } from '../../../lib/api';
import { formatDate } from '../../../lib/utils';
import styles from './ProjectsWidget.module.scss';


const ProjectsWidget = () => {
    const [state, setState] = useState({
        projects: '',
        loading: true,
    })
    useEffect(() => {
        const fetchLatestPost = async () => {
            const projects = await getLatestProjectsForWidget();
            setState(state => {
                return { ...state, projects: projects, loading: false }
            })
        }
        fetchLatestPost();
    }, [])

    const { projects, loading } = state;

    return (
        <div className={styles.ProjectsWidget}>
            { loading ? (
                <h2>loading ...</h2>
            ) : (
                    <React.Fragment>
                        <h2 className={styles.Title}>Latest Projects</h2>
                        <ul className={styles.Posts}>
                            {projects.map(project => (
                                <li className={styles.Post} key={project.slug}>
                                    <Link to={`/projects/${project.slug}`}>
                                        <div className={styles.FeaturedImg}
                                            style={{ backgroundImage: `url(${project.projectImages.image1.sourceUrl})` }}
                                        ></div>
                                        <div className={styles.Link}>
                                            <h4>
                                                {project.title}
                                            </h4>
                                            <h5>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {formatDate(project.date)}
                                            </h5>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </React.Fragment>
                )
            }
        </div >
    )
}

export default ProjectsWidget
