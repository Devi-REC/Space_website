import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    const location = useLocation();

    return (
        <div className="header-container">
            <div className="header" style={{ backgroundColor: "black", borderBottom: "2px solid rgb(45, 210, 207)" }}>
                <div className="logo">
                    <FontAwesomeIcon icon={faRocket} className="rocket-icon" />
                    <span className="site-name">SpaceAdventure</span>
                
                <nav>
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/astronaut" className={location.pathname === '/astronaut' ? 'active' : ''}>Astronaut</Link></li>
                        <li><Link to="/satellite" className={location.pathname === '/satellite' ? 'active' : ''}>Satellite</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
