import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectSlide from '../../../components/ProjectImagesSlide/ProjectSlide';
import ArticleFooter from '../../../components/UI/ArticleFooter/ArticleFooter';
import PageHeader from '../../../components/UI/PageHeader/PageHeader';
import { getSingleProject } from '../../../lib/api';
import ProjectDetails from './ProjectDetails/ProjectDetails';
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

            {/** Page Header */}
            <PageHeader
                label="Projects"
                singlePage={project.title}
                backgroundImg={project.projectImages.image1.sourceUrl}
            />

            {/** Project Content */}
            <div className={styles.ProjectContent}>
                <div className={styles.Collage}>
                    <div className={styles.TwoImages}>
                        <div className={styles.Image}
                            style={{ backgroundImage: `url(${project.projectImages.image2.sourceUrl})` }}></div>
                        <div className={styles.Image}
                            style={{ backgroundImage: `url(${project.projectImages.image3.sourceUrl})` }}></div>
                    </div>
                    <div className={styles.FeatureImg} style={{ backgroundImage: `url(${project.projectImages.image1.sourceUrl})` }}></div>
                </div>

                <div className={styles.Layout}>

                    <div className={styles.Aside}>
                        <h2>{project.title}</h2>
                        <ProjectDetails details={project.projectDetails} />
                    </div>

                    <div className={styles.Main}>
                        <div
                            className={styles.Content}
                            dangerouslySetInnerHTML={{ __html: project.content }} />
                    </div>
                </div>

                <ProjectSlide slides={project.projectImages} />

                <ArticleFooter to="/projects" label="Back" />
            </div>

        </div>

    )
}

export default SingleProject

