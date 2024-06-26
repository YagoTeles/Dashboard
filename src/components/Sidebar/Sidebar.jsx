import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import './sidebar.css';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import routesData from './topbarcontent';
import { useLocation } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
    const currentRoute = routesData.find(route => route.route === location.pathname);
   

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="sidebar-container">
            <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
                {sidebarOpen && (
                    <>
                        <img src={logo1} alt="Logo 1" />
                        <ul className="sidebar-menu">
                            <li>
                                <NavLink exact to="/" activeClassName="active">
                                    Ranking
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/perfil" activeClassName="active">
                                    Perfil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/compare" activeClassName="active">
                                    Compare
                                </NavLink>
                            </li>
                        </ul>
                        <div id='siderbardown'>
                            <img src={logo2} alt="Logo 2" />
                        </div>
                    </>
                )}
                <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                    {sidebarOpen ? <ArrowBackIosNewRoundedIcon /> : <ArrowForwardIosRoundedIcon />}
                </button>
            </div>
            <div className={`content ${sidebarOpen ? 'content-open' : 'content-closed'}`}>
                <div className='topbarcontent'>
                    <div className='title'>
                        {currentRoute ? currentRoute.name : ""}
                    </div>
                    {currentRoute && currentRoute.buttons.length > 0 && (
                        <>
                            {currentRoute.buttons.map((ButtonComponent, index) => (
                                <React.Fragment key={index}>{ButtonComponent}</React.Fragment>
                            ))}
                        </>
                    )}
                </div >
                {children}
            </div>
        </div>
    );
};

export default Sidebar;