import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { navBarMonitor } from '../../lib/utils';
import { getMenu } from '../../lib/api'
import ContactDetails from '../HeaderContactDetails/ContactDetails';
import styles from './Nav.module.scss';


const Nav = () => {
    const [state, setState] = useState({
        loading: true,
        menuItems: ''
    })

    useEffect(() => {
        // change nav background color and position on scroll
        navBarMonitor("#top-page-nav", styles);

        // Get menu items from database;
        async function getMenuItems() {
            const data = await getMenu(2);
            setState({ loading: false, menuItems: data.menu.menuItems.nodes })
        }
        getMenuItems();
    }, [])

    const { loading, menuItems } = state;

    return (
        <nav className={styles.Nav} id="top-page-nav">

            <div className={styles.NavContent}>
                <h2 className={styles.Logo}>Aseza</h2>

                <ul className={styles.NavItems}>

                    <li className={styles.Item}>
                        <NavLink to="/" activeClassName={styles.Active} exact>Home</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <NavLink to="/projects" activeClassName={styles.Active}>Projects</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <NavLink to="/services" activeClassName={styles.Active}>Services</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <NavLink to="/Blog" activeClassName={styles.Active}>Blog</NavLink>
                    </li>


                    {/* Check if the nav item actually has a connected node, which is a page/post*/}
                    {!loading && menuItems.map(item => (
                        item.connectedNode && (
                            <li key={item.connectedNode.node.id} className={styles.Item}>
                                <NavLink to={`/page/${item.connectedNode.node.slug}`} activeClassName={styles.Active}>{item.label}</NavLink>
                            </li>
                        )
                    ))}
                </ul>
                <Link to="/page/contact-page" className={styles.QuoteBtn}>GET A QUOTE</Link>
            </div>
        </nav>
    )
}

export default Nav
