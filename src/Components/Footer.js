import React from "react";
import "../Styles/Footer.css";
import logo from "../Assets/Logo_putih.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        {/* Kolom Kontak */}
        <div className="footer-contact">
          <div className="footer-item">
            <FaMapMarkerAlt />
            <p>Toraja Utara, Sulawesi Selatan<br />Indonesia</p>
          </div>
          <div className="footer-item">
            <FaEnvelope />
            <p>educoding@gmail.com</p>
          </div>
          <div className="footer-item">
            <FaPhone />
            <p>+08123456</p>
          </div>
        </div>

        {/* Kolom Keterangan EduCoding */}
        <div className="footer-info">
          <img src={logo} alt="eduCoding Logo" className="footer-logo" />
          <p className="footer-description">
          eduCoding adalah platform belajar daring yang menyediakan kursus berkualitas untuk mendukung pembelajaran interaktif dan membantu Anda berkembang di era digital.
          </p>
        </div>

        {/* Kolom Download */}
        <div className="footer-download">
          <h3 className="footer-download-title">Download sekarang</h3>
          <a
            href="https://play.google.com/store/apps/details?id=com.namapaket"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="google-play-button" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">Hak Cipta &copy; 2023 eduCoding</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
