import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import ProjectSlide from '../../../components/ProjectImagesSlide/ProjectSlide';
import ArticleFooter from '../../../components/UI/ArticleFooter/ArticleFooter';
import Loader from '../../../components/UI/Loader/Loader';
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
            scroll.scrollToTop({ smooth: "easeOutElastic", delay: 500, duration: 1000 });
        }
        fetchProject();
    }, [slug])

    return (
        <div className={styles.Project}>

            {/** Page Header */}
            <PageHeader
                label="Projects"
                singlePage={project && project.title}
                backgroundImg={project && project.projectImages.image1.sourceUrl}
            />

            {/** Project Content */}
            { !loading &&
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
            }


            {/** Loader */}
            <Loader loading={loading} />

        </div>

    )
}

export default SingleProject

