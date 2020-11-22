import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { getMenu } from '../../lib/api'
import ContactDetails from './ContactDetails/ContactDetails';
import styles from './Nav.module.scss';


const Nav = () => {
    const [loading, setLoading] = useState(true);
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        async function getMenuItems() {
            const data = await getMenu(2);
            setMenuItems(data.menu.menuItems.nodes);
            setLoading(false);
            // console.log(data.menu.menuItems.nodes);
        }
        getMenuItems();
    }, [])

    if (loading) return <h2>Loading ...</h2>

    return (
        <React.Fragment>
            <ContactDetails />
            <nav className={styles.Nav}>
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
                            <NavLink to="/Blog" activeClassName={styles.Active}>Blog</NavLink>
                        </li>

                        {/* Check if the nav item actually has a connected node, which is a page/post*/}
                        {menuItems.map(item => (
                            item.connectedNode && (
                                <li key={item.connectedNode.node.id} className={styles.Item}>
                                    <NavLink to={`/page/${item.connectedNode.node.slug}`} activeClassName={styles.Active}>{item.label}</NavLink>
                                </li>
                            )
                        ))}
                    </ul>
                    <Link to="/Blog" className={styles.QuoteBtn}>GET A QUOTE</Link>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Nav
