import './sidebar.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('item1');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="sidebar" id='siderbar'>
            <img src={logo1} alt="" />

            <ul className="sidebar-menu">
                <li className={activeItem === 'item1' ? 'active' : ''}>
                    <NavLink to="/" onClick={() => handleItemClick('item1')}>
                        Item 1
                    </NavLink>
                </li>
                <li className={activeItem === 'item2' ? 'active' : ''}>
                    <NavLink to="/page2" onClick={() => handleItemClick('item2')}>
                        Item 2
                    </NavLink>
                </li>
                <li className={activeItem === 'item3' ? 'active' : ''}>
                    <NavLink to="/page3" onClick={() => handleItemClick('item3')}>
                        Item 3
                    </NavLink>
                </li>
            </ul>
            <div id='siderbardown' >
              <img src={logo2} alt="" />
            </div>
        </div>
    );
};

export default Sidebar;