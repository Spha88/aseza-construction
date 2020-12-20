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

    const firstSlide = testimonials && testimonials[0];
    const lastSlide = testimonials && testimonials[slideLength - 1]

    useEffect(() => {

        const mySlideContainer = document.querySelector("#heroSlide");

        const fetchTestimonials = async () => {
            const data = await getTestimonials();
            setState(state => {
                return {
                    ...state,
                    testimonials: data,
                    slideLength: data.length,
                    // Set the width of the slides container
                    width: mySlideContainer && mySlideContainer.offsetWidth,
                    translate: mySlideContainer.offsetWidth,
                    loading: false
                }
            })
        }

        fetchTestimonials();

    }, [])

    const nextSlide = () => {
        // Go back to first slide when you reach the last slide
        if (activeIndex === slideLength - 1) {
            setState({
                ...state,
                transition: 0.45,
                translate: (activeIndex + 2) * width
            })
            setTimeout(() => {
                return setState({
                    ...state,
                    activeIndex: 0,
                    transition: 0,
                    translate: width,
                })
            }, [450])
        }
        setState({
            ...state,
            transition: 0.45,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 2) * width
        })
    };

    const prevSlide = () => {
        // Go to last slide if you are on the first slide
        if (activeIndex === 0) {
            setState({
                ...state,
                translate: 0,
                transition: 0.45,
            })

            setTimeout(() => {
                return setState({
                    ...state,
                    transition: 0,
                    activeIndex: slideLength - 1,
                    translate: (slideLength * width),
                })
            }, [450])
        }
        setState({
            ...state,
            transition: 0.45,
            activeIndex: activeIndex - 1,
            translate: activeIndex * width
        })
    };

    const selectSlide = index => {
        setState({
            ...state,
            transition: 0.45,
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
                            <div className={styles.Slide}>
                                <div className={styles.SlideInner}>
                                    <div className={styles.Testimonial}>
                                        <div dangerouslySetInnerHTML={{ __html: lastSlide.content }} />
                                        <div className={styles.TestimonialImg}
                                            style={{ backgroundImage: `url(${lastSlide.testimonialDetails.image.sourceUrl})` }}
                                        />
                                    </div>
                                    <h2>{lastSlide.testimonialDetails.name}</h2>
                                    <h3>{lastSlide.testimonialDetails.occupation}</h3>
                                    <h4>{lastSlide.testimonialDetails.organisation}</h4>
                                </div>
                            </div>
                            {testimonials.map((slide, index) => (
                                <div key={index} className={styles.Slide}>
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
                            <div className={styles.Slide}>
                                <div className={styles.SlideInner}>
                                    <div className={styles.Testimonial}>
                                        <div dangerouslySetInnerHTML={{ __html: firstSlide.content }} />
                                        <div className={styles.TestimonialImg}
                                            style={{ backgroundImage: `url(${firstSlide.testimonialDetails.image.sourceUrl})` }}
                                        />
                                    </div>
                                    <h2>{firstSlide.testimonialDetails.name}</h2>
                                    <h3>{firstSlide.testimonialDetails.occupation}</h3>
                                    <h4>{firstSlide.testimonialDetails.organisation}</h4>
                                </div>
                            </div>
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
