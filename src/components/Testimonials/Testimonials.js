import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Testimonials.module.scss';
import HeaderElement from '../UI/HeaderElement/HeaderElement';
import { getTestimonials } from '../../lib/api';
import SectionLoader from '../UI/SectionLoader/SectionLoader';

const ProjectSlide = () => {

    const [state, setState] = useState({
        slideLength: 0,
        activeIndex: 0,
        width: 0,
        translate: 0,
        transition: 0.45,
        testimonials: null,
        loading: true
    })


    const { width, testimonials, translate, transition, activeIndex, slideLength, loading } = state

    const slideContainer = useRef();

    useEffect(() => {

        const mySlideContainer = document.querySelector("#heroSlide");

        const fetchTestimonials = async () => {
            const data = await getTestimonials();
            setState(state => {
                return {
                    ...state,
                    // Set the width of the slides container
                    width: mySlideContainer && mySlideContainer.offsetWidth,
                    testimonials: data,
                    slideLength: data.length,
                    loading: false
                }
            })
        }

        fetchTestimonials();

    }, [])

    const nextSlide = () => {
        // Go back to first slide when you reach the last slide
        if (activeIndex === slideLength - 1) {
            return setState({
                ...state,
                activeIndex: 0,
                translate: 0
            })
        }
        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * width
        })
    };

    const prevSlide = () => {
        // Go to last slide if you are on the first slide
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (slideLength - 1) * width,
                activeIndex: slideLength - 1
            })
        }
        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * width
        })
    };

    const selectSlide = index => {
        setState({
            ...state,
            activeIndex: index,
            translate: index * width
        })
    }

    return (
        <div className={styles.TestimonialsSlide} id="heroSlide" ref={slideContainer}>

            { loading ? (
                <SectionLoader />
            ) : (
                    <React.Fragment>
                        <HeaderElement label="What Clients Say" />
                        <div className={styles.SlideContent}
                            style={{
                                transform: `translateX(-${translate}px)`,
                                transition: `transform ease-out ${transition}s`,
                                width: `${width}px`
                            }}>

                            {testimonials.map((slide, index) => (
                                <div key={index} className={styles.Slide} style={{ backgroundImage: `url(${slide.sourceUrl})` }}>
                                    <div className={styles.SlideInner}>
                                        <div className={styles.Testimonial}>
                                            <div dangerouslySetInnerHTML={{ __html: slide.content }} />
                                            <div className={styles.TestimonialImg}
                                                style={{ backgroundImage: `url(${slide.testimonialDetails.image.sourceUrl})` }}
                                            />
                                        </div>
                                        <h2>{slide.testimonialDetails.name}</h2>
                                        <h3>{slide.testimonialDetails.occupation}</h3>
                                        <h4>{slide.testimonialDetails.organisation}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/** Arrows */}
                        <div className={styles.PrevBtn} onClick={prevSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className={styles.NextBtn} onClick={nextSlide}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>

                        {/** Number of Current slide and Total number of slides indicator */}
                        <div className={styles.NumberOfSlides}>{activeIndex + 1} / {slideLength}</div>

                        {/** Nav/indicator buttons at the bottom of the slide */}
                        <div className={styles.Dots}>
                            {testimonials.map((slide, index) => (
                                <div
                                    key={index}
                                    onClick={() => selectSlide(index)}
                                    className={`${styles.Dot} ${index === activeIndex && styles.Active}`}
                                ></div>
                            ))}
                        </div>
                    </React.Fragment>
                )}

        </div>
    )
}

ProjectSlide.propTypes = {
    slides: PropTypes.object
}

export default ProjectSlide
