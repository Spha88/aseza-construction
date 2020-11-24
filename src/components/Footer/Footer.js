import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import Container from '../UI/Container';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <Container>
                <div className={styles.Row}>
                    <div className={styles.LogoCopyRight + ' ' + styles.FooterSection}>
                        <div className={styles.Logo}>
                            <h2>Aseza</h2>
                            <h3>Project Managers</h3>
                        </div>
                        <div className={styles.CopyRight}>
                            <h5>&copy; Aseza Project Managers 2018</h5>
                            <h5>All Rights Reserved</h5>
                        </div>
                    </div>
                    <div className={styles.ContactDetails + ' ' + styles.FooterSection}>
                        <ul>
                            <li>(+2751) 3655 9555</li>
                            <li><a href="mailto:support@aseza.org">support@aseza.org</a></li>
                            <li><a href="mailto:hello@aseza.org">hello@aseza.org</a></li>
                            <li>356 King Williams Town</li>
                            <li>Easter Cape, SA</li>
                        </ul>
                    </div>

                    <div className={styles.Nav + ' ' + styles.FooterSection}>
                        <ul>
                            <li><NavLink activeClassName={styles.Active} to="/">Home</NavLink></li>
                            <li><NavLink activeClassName={styles.Active} to="/projects">Projects</NavLink></li>
                            <li><NavLink activeClassName={styles.Active} to="/contact-us">Contact Us</NavLink> </li>
                            <li><NavLink activeClassName={styles.Active} to="/blog">News</NavLink></li>
                            <li><NavLink activeClassName={styles.Active} to="faq">FAQ</NavLink></li>
                        </ul>
                    </div>

                    <div className={styles.SocialMediaLinks + ' ' + styles.FooterSection}>
                        <ul>
                            <li><a href="/facebook.com">Facebook</a></li>
                            <li><a href="/twitter.com">Twitter</a></li>
                            <li><a href="/instagram.com">Instagram</a></li>
                            <li><a href="/linkedin.com">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
