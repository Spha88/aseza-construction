import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './HeroSlide.module.scss';
import mySlides from './slides';

const HeroSlide = () => {

    // Convert slides from an Object to an Array;
    // const slideArr = [];
    // Object.keys(slides).map(key => {
    //     if (slides[key] !== null) {
    //         return slideArr.push(slides[key]);
    //     } else {
    //         return null;
    //     }
    // })

    const [state, setState] = useState({
        slideLength: mySlides.length,
        activeIndex: 0,
        width: 0,
        translate: 0,
        transition: 0.45
    })


    const { width, translate, transition, activeIndex, slideLength } = state

    const slideContainer = useRef();

    useEffect(() => {
        // Get the with of the slide container;
        if (slideContainer.current) {
            setState(state => {
                return { ...state, width: slideContainer.current.offsetWidth }
            });
        }

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
        <div className={styles.ProjectSlideContainer} ref={slideContainer}>

            <div className={styles.SlideContent}
                style={{
                    transform: `translateX(-${translate}px)`,
                    transition: `transform ease-out ${transition}s`,
                    width: `${width}px`
                }}>

                {mySlides.map((slide, index) => (
                    <div key={index} className={styles.Slide} style={{ backgroundImage: `url(${slide.sourceUrl})` }}>
                        <div className={styles.Caption}>
                            <div>
                                <h6>{slide.title}</h6>
                                <h1>{slide.bigTitle}</h1>
                                <p>{slide.caption}</p>
                            </div>
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

            <div className={styles.CallToAction}>
                <Link to="/projects">Our Projects</Link>
                <Link to="/page/contact-page">Contact Us</Link>
            </div>

            {/** Number of Current slide and Total number of slides indicator */}
            <div className={styles.NumberOfSlides}>{activeIndex + 1} / {slideLength}</div>

            {/** Nav/indicator buttons at the bottom of the slide */}
            <div className={styles.Dots}>
                {mySlides.map((slide, index) => (
                    <div
                        key={index}
                        onClick={() => selectSlide(index)}
                        className={`${styles.Dot} ${index === activeIndex && styles.Active}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

// HeroSlide.propTypes = {
//     slides: PropTypes.object
// }

export default HeroSlide
