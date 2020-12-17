import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { getMenu } from '../../lib/api'
import styles from './MobileNav.module.scss';


const Nav = () => {
    const [state, setState] = useState({
        loading: true,
        menuItems: '',
        open: false
    })

    const toggleNav = () => setState(state => {
        return { ...state, open: !state.open }
    })


    useEffect(() => {

        // Get menu items from database;
        async function getMenuItems() {
            const data = await getMenu(2);
            console.log(data.menu.menuItems.nodes);
            setState({ loading: false, menuItems: data.menu.menuItems.nodes })
        }
        getMenuItems();
    }, [])

    const { loading, menuItems, open } = state;

    return (
        <nav className={`${styles.MobileNav} ${!open && styles.NavClosed}`}>

            <div className={styles.NavContent}>
                <div className={styles.LogoContainer}>
                    <h2 className={styles.Logo}>Aseza</h2>

                    <Link to="/page/contact-page" className={styles.QuoteBtn}>GET A QUOTE</Link>

                    <div onClick={toggleNav}>
                        {open ? 'Close ' : 'Open '} menu
                    </div>
                </div>

                <ul className={`${styles.NavItems} ${open && styles.NavOpen}`} onClick={toggleNav}>

                    <li className={styles.Item}>
                        <NavLink to="/" activeClassName={styles.Active} exact>Home</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <NavLink to="/projects" activeClassName={styles.Active}>Projects</NavLink>
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

            </div>
        </nav>
    )
}

export default Nav
