import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png';
import './sidebar.css';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import routesData from './topbarcontent';
import { useLocation } from 'react-router-dom';
import Buttondrop from '../buttongroup/Buttondrop';

const Sidebar = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
    const currentRoute = routesData.find(route3 => route3.route === location.pathname);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="sidebar-container">
            <div className={`sidebar ${sidebarOpen ? '' : 'closed'}`}>
                {sidebarOpen && (
                    <>
                        <img src={logo1} alt="" />

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
                            <img src={logo2} alt="" />
                        </div>
                    </>
                )}

                <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                    {sidebarOpen ? <ArrowBackIosNewRoundedIcon/> : <ArrowForwardIosRoundedIcon/>}
                </button>
            </div>

            <div className={`content ${sidebarOpen ? 'content-open' : 'content-closed'}`}>
                <div className='topbarcontent'>
                    {currentRoute ? currentRoute.name : ""}
                    <Buttondrop/>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
