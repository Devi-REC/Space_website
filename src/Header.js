import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-container">
            <div className="header">
                <div className="logo">
                    <FontAwesomeIcon icon={faRocket} className="rocket-icon" size="2x"/>
                    <span className="site-name">SpaceAdventure</span>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>
                <nav className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
                    <ul>
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/astronaut" className={location.pathname === '/astronaut' ? 'active' : ''}>Astronaut</Link></li>
                        <li><Link to="/satellite" className={location.pathname === '/satellite' ? 'active' : ''}>Satellite</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
