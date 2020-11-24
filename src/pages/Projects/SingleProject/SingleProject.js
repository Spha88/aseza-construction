import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectSlide from '../../../components/ProjectImagesSlide/ProjectSlide';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import { getSingleProject } from '../../../lib/api';
import styles from './SingleProject.module.scss';

const SingleProject = () => {
    const [loading, setLoading] = useState(true);
    const [project, setProject] = useState();
    const { slug } = useParams();

    useEffect(() => {
        const fetchProject = async () => {
            const myProject = await getSingleProject(slug);
            setProject(myProject);
            setLoading(false);
        }

        fetchProject();
    }, [slug])

    if (loading) return <h2>Loading ...</h2>

    if (!project) return <h2>Project not found</h2>

    return (
        <div className={styles.Project}>
            <PageHeader label="Projects" backgroundImg={project.projectImages.image1.sourceUrl} />

            <div className={styles.ProjectContent}>
                <h2>{project.title}</h2>
                <ProjectSlide slides={project.projectImages} />
                <div
                    className={styles.Content}
                    dangerouslySetInnerHTML={{ __html: project.content }} />

                <footer>
                    <Link to="/projects">Back</Link>
                </footer>
            </div>
        </div>

    )
}

export default SingleProject

