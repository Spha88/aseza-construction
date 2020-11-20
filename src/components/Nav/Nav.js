import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getMenu } from '../../lib/api'


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
        <nav>
            <h2>Navigator</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.connectedNode.node.id}>
                        <Link
                            to={`${item.connectedNode.node.slug}`}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
