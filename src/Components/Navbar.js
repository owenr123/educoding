import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Jika Anda menggunakan React Router
import '../Styles/Navbar.css';
import Logo from '../Assets/Logo.png';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('beranda');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Untuk mengontrol tampilan menu mobile

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false); // Tutup menu mobile setelah mengklik salah satu link
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen); // Toggle menu mobile saat tombol diklik
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
          ☰ {/* Ini adalah ikon hamburger, Anda dapat menggantinya dengan ikon lain */}
        </button>
        <ul className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              exact
              to="/educoding"
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
