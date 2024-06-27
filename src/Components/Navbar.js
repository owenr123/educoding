import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';
import Logo from '../Assets/Logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="active"
              onClick={() => handleNavLinkClick('beranda')}
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tentangkami"
              activeClassName="active"
              onClick={() => handleNavLinkClick('tentang')}
            >
              Tentang Kami
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontak"
              activeClassName="active"
              onClick={() => handleNavLinkClick('kontak')}
            >
              Kontak
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bantuan"
              activeClassName="active"
              onClick={() => handleNavLinkClick('bantuan')}
            >
              Bantuan
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
