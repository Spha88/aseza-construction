import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { getMenu } from '../../lib/api'
import { iconPlacer } from '../../lib/utils';
import MenuIcon from '../UI/MenuIcon/MenuIcon';
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

                    <MenuIcon click={toggleNav} open={open} />
                </div>

                <ul className={`${styles.NavItems} ${open && styles.NavOpen}`} onClick={toggleNav}>

                    <li className={styles.Item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" /></svg>
                        <NavLink to="/" activeClassName={styles.Active} exact>Home</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v20h-20v-20h20zm2-2h-24v24h24v-24zm-4 7h-8v1h8v-1zm0 5h-8v1h8v-1zm0 5h-8v1h8v-1zm-10.516-11.304l-.71-.696-2.553 2.607-1.539-1.452-.698.71 2.25 2.135 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304zm0 5l-.71-.696-2.552 2.607-1.539-1.452-.698.709 2.249 2.136 3.25-3.304z" /></svg>
                        <NavLink to="/projects" activeClassName={styles.Active}>Projects</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 2v22h-20v-22h3c1.23 0 2.181-1.084 3-2h8c.82.916 1.771 2 3 2h3zm-11 1c0 .552.448 1 1 1 .553 0 1-.448 1-1s-.447-1-1-1c-.552 0-1 .448-1 1zm9 1h-4l-2 2h-3.897l-2.103-2h-4v18h16v-18zm-13 9.729l.855-.791c1 .484 1.635.852 2.76 1.654 2.113-2.399 3.511-3.616 6.106-5.231l.279.64c-2.141 1.869-3.709 3.949-5.967 7.999-1.393-1.64-2.322-2.686-4.033-4.271z" /></svg>
                        <NavLink to="/services" activeClassName={styles.Active}>Services</NavLink>
                    </li>

                    <li className={styles.Item}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.021 0c-1.646 0-2.98 1.335-2.98 2.98 0 .652.21 1.256.566 1.746l-3.275 3.274h2.144l2.309-2.309c.376.173.795.269 1.236.269 1.645 0 2.979-1.334 2.979-2.98s-1.334-2.98-2.979-2.98zm0 2.338c-.513 0-.929-.292-.929-.653s.416-.653.929-.653c.512 0 .928.292.928.653s-.417.653-.928.653zm-14.021 10.662h10v1h-10v-1zm10-2h-10v-1h10v1zm-3-4v1h-7v-1h7zm8 .861v6.524c0 2.392-6.648 9.615-9.811 9.615h-10.189v-24h15.055c-.439.584-.767 1.257-.915 2h-12.14v20h7.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-5.746c.668.215 1.33.198 2 .064z" /></svg>
                        <NavLink to="/Blog" activeClassName={styles.Active}>Blog</NavLink>
                    </li>

                    {/* Check if the nav item actually has a connected node, which is a page/post*/}
                    {!loading && menuItems.map(item => (
                        item.connectedNode && (
                            <li key={item.connectedNode.node.id} className={styles.Item}>
                                { iconPlacer(item.label)}
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
