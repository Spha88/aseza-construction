import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getMenu } from '../../lib/api'
import styles from './Nav.module.scss';


const Nav = () => {
    const [loading, setLoading] = useState(true);
    const [menuItems, setMenuItems] = useState();

    useEffect(() => {
        async function getMenuItems() {
            const { data } = await getMenu(2);
            setMenuItems(data.menu.menuItems.nodes);
            setLoading(false);
            // console.log(data.menu.menuItems.nodes);
        }
        getMenuItems();
    }, [])

    if (loading) return <h2>Loading ...</h2>

    return (
        <nav className={styles.Nav}>
            <h2 className={styles.Logo}>Navigator</h2>
            <ul className={styles.NavItems}>
                <li className={styles.Item}>
                    <Link to="/">Home</Link>
                </li>
                {menuItems.map(item => (
                    <li key={item.connectedNode.node.id} className={styles.Item}>
                        <Link to={`/page/${item.connectedNode.node.slug}`}>{item.label}</Link>
                    </li>
                ))}
                <li className={styles.Item}>
                    <Link to="/Blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
